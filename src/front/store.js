export const initialStore = () => {
  return {
    message: null,
    authState: 0,
    searchValue: "",
    workers: [
      {
        id: 1,
        name: "Carlos",
        surname: "Lorenzo Moreno",
        email: "carlos@email.com",
        phone: "+34678912345",
        works: ["fontanería", "pintura", "limpieza"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.3,
        distance: 2,
      },
      {
        id: 2,
        name: "Judith",
        surname: "Ramírez Pachón",
        email: "judith@email.com",
        phone: "+34654321987",
        works: ["cocina", "decoración", "carpintería"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.9,
        distance: 4,
      },
      {
        id: 3,
        name: "Luis",
        surname: "Guilarte",
        email: "luis@email.com",
        phone: "+34639528417",
        works: ["jardinería", "carpintería", "limpieza"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.6,
        distance: 6,
      },
      {
        id: 4,
        name: "Eduardo",
        surname: "Incerteza",
        email: "edu@email.com",
        phone: "+3639852147",
        works: ["albañilería", "pintura"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.8,
        distance: 3,
      },
      {
        id: 5,
        name: "Daniela",
        surname: "Eula",
        email: "danieula@email.com",
        phone: "+34624895173",
        works: ["cuidado infantil", "carpintería"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.2,
        distance: 7,
      },
      {
        id: 6,
        name: "Maria Fernanda",
        surname: "Duarte",
        email: "mafeduarte@email.com",
        phone: "+34684235719",
        works: ["limpieza"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.4,
        distance: 15,
      },
      {
        id: 7,
        name: "Rosinni",
        surname: "Rodríguez Milano",
        email: "rosinni@email.com",
        phone: "+34645978312",
        works: ["albañilería", "decoración", "fontanería"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.7,
        distance: 12,
      },
      {
        id: 8,
        name: "Pepito",
        surname: "Palotes",
        email: "pepito@email.com",
        phone: "+34632145789",
        works: ["cocina", "cuidado de mayores"],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 3.0,
        distance: 1,
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

    case "search":
      return {
        ...store,
        searchValue: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}
