import { useEffect, useState } from "react";
// import mockUsers from "./mock/mockUsers";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAdress] = useState("");
  const [users, setUsers] = useState([]);

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

  const addUsers = async (elem) => {
    try {
      const result = await axios
        .get("/")
        .then((res) => res.data)
        .catch(err);
      return result;
    } catch (err) {
      return res.status(412).json(err);
    }
  };

  const addUserById = async (e) => {
    // todo
    console.log(e.target.value);
  };

  const updateUsers = async (id, elem) => {
    // todo
  };

  const deleteUsers = async (id) => {
    // todo
  };

  return (
    <>
      <h1>Directions App</h1>
      <form className="form__users">
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
        <button className="btn__users" onClick={(e) => addUsers(e)}>
          Adicionar usuário
        </button>
      </form>
    </>
  );
}

export default App;
