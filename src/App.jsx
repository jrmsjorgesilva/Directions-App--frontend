import { useEffect, useState } from "react";
// import mockUsers from "./mock/mockUsers";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAdress] = useState("");
  const [users, setUsers] = useState([
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      name: "Honório de Freitas",
      email: "honorio@gmail.com",
      address: "Rua do honorio",
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      name: "Renata Vasconcelos",
      email: "donosdadbola@gmail.com",
      address: "Rua Futebolistica",
    },
  ]);

  console.log("users>>>", users);

  useEffect(() => {
    const usersURI = "http://localhost:8000/users";
    const fetchUsers = async () => {
      try {
        const result = await axios
          .get(usersURI)
          .then((response) => response.data)
          .catch((err) => console.error(err));
        console.log("result->", result);
      } catch (err) {
        return res.status(412).json(err);
      }
    };
    fetchUsers();
  }, []);

  const addUsers = async (e) => {
    try {
      e.preventDefault();
      const result = await axios
        .get("/")
        .then((res) => {
          const result = res.data;
          setUsers((prevState) => [...prevState, result]);
        })
        .catch(err);
      return result;
    } catch (err) {
      return res.status(412).json(err);
    }
  };

  const getUser = async (e) => {
    setUsers(
      {
        ...props,
      },
      e.target.value
    );
  };

  const getUserById = async (id, e) => {
    // todo
  };

  const cleanUser = () => {
    // todo
  }

  const updateUsers = async (id, elem) => {
    // todo
  };

  const deleteUsers = async (id) => {
    // todo
  };

  return (
    <>
      <h1>Directions App</h1>
      <form className="form__users" onSubmit={addUsers}>
        <label htmlFor="nome">
          Nome:
          <input
            className="input__users--nome"
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            className="input__users--email"
            type="text"
            placeholder="email"
            onChange={(e) => setMail(e.target)}
          />
        </label>
        <label htmlFor="endereco">
          Endereço:
          <input
            className="input__users--address"
            type="text"
            placeholder="endereço"
            onChange={(e) => setAdress(e.target)}
          />
        </label>
        <button className="btn__users" type="submit">
          Adicionar usuário
        </button>
      </form>
      {users.map((item) => (
        <ul key={item.id}>
          <li>{item.name || "sadfsdf"}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
