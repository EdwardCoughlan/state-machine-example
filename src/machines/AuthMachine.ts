import { createMachine } from "xstate";


type Context = {
};

type Transitions =
  | {
      type: "LOGIN";
    }
  | {
      type: "LOGOUT";
    }
  | {
      type: "";
    };

export const createAuthMachine = (machineName: string) =>
  createMachine(
    {
      id: machineName,
      key: machineName,
      context: {
        user: {},
        session:{}
        
      },
      initial: "unauthenthicated",
      states: {
        unauthenthicated: {
          on: {
            LOGIN: {},
            CHECK_SESSION: {target: 'verifying'}
          }
        },
        authenticating: {
        },
        authenticated: {
        },
        verifying: {
          invoke: {
            src: '',
            onDone: {},
            onError: {}
          },
        },
        error: {
          on: {
              LOGIN: 'authenticating'
          }
        }
      },
    },
    {}
  );
