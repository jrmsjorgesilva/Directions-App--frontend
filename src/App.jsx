import { useEffect, useState } from "react";
// import mockUsers from "./mock/mockUsers";
import "./App.css";
import axios from "axios";
// components
import Example from "./components/Example";

function App() {
  const [name, setName] = useState(() => "");
  const [email, setEmail] = useState(() => "");
  const [address, setAddress] = useState(() => "");
  const [users, setUsers] = useState(() => [
    {
      _id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      name: "Honório de Freitas",
      email: "honorio@gmail.com",
      address: "Rua do honorio",
    },
    {
      _id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      name: "Renata Vasconcelos",
      email: "donosdadbola@gmail.com",
      address: "Rua Futebolistica",
    },
  ]);

  const usersURI = "http://localhost:8000/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios
          .get(usersURI)
          .then((response) => {
            const data = response.data;
            console.log("data", data);
            setUsers((prevState) => [...data]);
          })
          .catch((err) => console.error(err));
      } catch (err) {
        return console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const addUsers = async (e) => {
    e.preventDefault();
    if (!name || !email || !address) return;
    console.log("user added", e);
    const data = {
      _id: () => Math.floor(Math.ramdom() * Number.MAX_SAFE_INTEGER),
      name: name,
      email: email,
      address: address,
    };
    setUsers((prevState) => [...prevState, data]);
    cleanUser();
  };

  const getUser = async (e) => {};

  const getUserById = async (_id, e) => {
    // todo
  };

  const cleanUser = () => {
    // todo
    setName("");
    setEmail("");
    setAddress("");
    // ref.current.focus();
    console.log("user cleaned");
  };

  const updateUsers = async (_id) => {
    // todo
    if (!_id || !name || !email || !address) return;
    const userToUpdate = {
      _id,
      name,
      email,
      address,
    };
    deleteUsers(_id);
    setUsers((prevState) => [...prevState, userToUpdate]);
    cleanUser();
  };

  const deleteUsers = async (_id) => {
    // todo
    if (!_id) return;
    const userToDelete = users;
    const result = userToDelete.filter((item) => item._id !== _id);
    setUsers((prevState) => [...result]);
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
            value={name}
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            className="input__users--email"
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="endereco">
          Endereço:
          <input
            className="input__users--address"
            type="text"
            value={address}
            placeholder="endereço"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <button className="btn__users" type="submit">
          Adicionar usuário
        </button>
      </form>
      {users.map((item) => (
        <ul key={item._id}>
          <li>{item.name}</li>
          <li>{item.email}</li>
          <li>{item.address}</li>
          <button onClick={() => updateUsers(item._id)}>Atualizar</button>
          <button onClick={() => deleteUsers(item._id)}>Deleter</button>
        </ul>
      ))}
      <Example />
    </>
  );
}

export default App;
