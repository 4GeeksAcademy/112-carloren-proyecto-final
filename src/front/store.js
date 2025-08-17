export const initialStore = () => {
  return {
    message: null,
    authState: 2,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    case "LOGIN_USER":
      return {
        ...store,
        authState: 1,
      };

    case "LOGIN_WORKER":
      return {
        ...store,
        authState: 2,
      };

    case "LOGOUT":
      return {
        ...store,
        authState: 0,
      };
    default:
      throw Error("Unknown action.");
  }
}
