import { Children, useState, useEffect } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import produce from "immer";
import Expandable from "./components/Expandable";
import Form from "./components/Form/Form";
import ExpenseList from "./components/Expense-Tracker/components/ExpenseList";
import ExpenseFilter from "./components/Expense-Tracker/components/ExpenseFilter";
import ExpenseForm from "./components/Expense-Tracker/components/ExpenseForm";
import { FieldValue } from "react-hook-form";
import apiClient from "./services/api-client";
import userService, { User } from "./services/user-client";
import useUsers from "./hooks/useUsers";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("")
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "tomatoes", amount: 10, category: "Utilities" },
  //   { id: 3, description: "movies", amount: 3, category: "Entertainment" },
  // ]);

  // const handleDelete = (id: number) => {
  //   setExpenses(expenses.filter(expense => expense.id !== id ))
  //   console.log("Deleted")
  // }
  // const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

  const { users, loading, errors, setErrors, setUsers} = useUsers()

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setErrors(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "MasterMind" };
    setUsers([newUser, ...users]);
    userService.add(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " updated" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setErrors(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    // <div className="p-4">
    //   {/* <Form /> */}
    //   <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
    //   <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
    //   <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    <div>
      {errors && <p className="text-danger">{errors}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => handleDelete(user)}>
                Delete
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => updateUser(user)}>
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
