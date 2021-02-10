import { assign, createMachine, EventObject, spawn } from "xstate";
import { createCartMachine } from "./CartMachine";

type Context = {
  authenticationMachine?: {};
  cartMachine?: {};
};
type Transitions = { type: "LOGOUT" } | { type: "LOGIN" };
type States =
  | {
      value: "bootstrap";
      context: Context & {
        authenticationMachine: undefined;
        cartMachine: undefined;
      };
    }
  | {
      value: "ready";
      context: Context & { authenticationMachine: {}; cartMachine: {} };
    };

const spawnMachines = (context: Context, event: EventObject) =>
  assign<Context>({
    cartMachine: spawn(createCartMachine("cart-machine"), "machine-id"),
  });

export const AppMachine = createMachine<Context, Transitions, States>(
  {
    id: "ApplicationMachine",
    initial: "bootstrap",
    context: {
      authenticationMachine: undefined,
      cartMachine: undefined,
    },
    states: {
      bootstrap: {
        always: {
          actions: assign((context, event) => {
            console.log(context, event);
            const cartMachine = spawn(
              createCartMachine("cart-machine"),
              "cart-machine"
            );
            return {
              cartMachine,
            };
          }),
          target: "ready",
          cond: (context) => context.cartMachine === undefined,
        },
      },
      ready: {},
    },
  },
  {
    actions: {
      spawnMachines: spawnMachines,
    },
  }
);
