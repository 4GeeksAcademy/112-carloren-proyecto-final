export const initialStore = () => {
  return {
    message: null,
    authState: 2,
    workers: [
      {
        name: "Carlos",
        surname: "Lorenzo Moreno",
        email: "carlos@email.com",
        phone: "+34678912345",
        works: ["fontanería", "pintura", "limpieza"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
      },
      {
        name: "Judith",
        surname: "Ramírez Pachón",
        email: "judith@email.com",
        phone: "+34654321987",
        works: ["cocina", "decoración", "carpintería"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
      },
      {
        name: "Luis",
        surname: "Guilarte",
        email: "luis@email.com",
        phone: "+34639528417",
        works: ["jardinería", "carpintería", "limpieza"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
      },
    ],
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
