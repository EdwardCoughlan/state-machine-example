import { createMachine } from "xstate";

type Product = {};

type Context = {
  items: Array<Product>;
};

type Transitions =
  | {
      type: "ADD_TO_CART";
      item: Product;
    }
  | {
      type: "REMOVE_FROM_CART";
      itemId: string;
    }
  | {
      type: "CLEAR_CART";
    };

export const createCartMachine = (machineName: string) =>
  createMachine<Context, Transitions>(
    {
      id: machineName,
      key: machineName,
      context: { items: [] },
      initial: "idle",
      states: {
        idle: {
          on: {
            ADD_TO_CART: {
              actions: (ctx, event) => {},
              target: "addingToCart",
            },
            REMOVE_FROM_CART: {
              target: "removingFromCart",
            },
            CLEAR_CART: "clearingCart",
          },
        },
        addingToCart: {
          always: {},
          onDone: "idle",
        },
        removingFromCart: {
          always: "idle",
        },
        clearingCart: {
          always: "idle",
        },
      },
    },
    {}
  );
