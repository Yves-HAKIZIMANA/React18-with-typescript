import { useState } from "react";

import produce from "immer"

const [customers, setCustomers] = useState([
  {
    id: 1,
    name: "Yves",
    money: 10000,
  },
  {
    id: 2,
    name: "David",
    money: 20000,
  },
]);

const [game, setGame] = useState({
  id: 1,
  player: {
    name: "John",
  },
});

const [pizza, setPizza] = useState({
  name: "Spicy Pepperoni",
  toppings: ["Mushrooms"],
});

const [cart, setCart] = useState({
  discount: 0.1,
  items: [
    { id: 1, title: "Product1", quantity: 1 },
    { id: 2, title: "Product2", quantity: 2 },
  ],
});

const handleCart = () => {
  setCart({
    ...cart,
    items: cart.items.map((item) =>
      item.id === 1 ? { ...item, quantity: 2 } : item
    ),
  });
};

const handlePizza = () => {
  setPizza({
    ...pizza,
    toppings: [...pizza.toppings, "cheese"],
  });
  console.log(pizza);
};

const handleGame = () => {
  setGame({ ...game, player: { ...game.player, name: "Bob" } });
};
const handleClick = () => {
    setCustomers(customers.map(customer => customer.id === 1 ? {...customer, money: 30000} : customer))
    console.log(customers)

    setCustomers([...customers, {id: 3, name: "Arstide", money: 50000}])

    setCustomers(customers.filter(customer => customer.id !== 2))
  setCustomers(
    produce((draft) => {
      const customer = draft.find((customer) => customer.id === 1);
      if (customer) customer.money = 50000;
      const customer2 = draft.find((customer) => customer.id === 2);
      if (customer2) customer2.money = 60000;
    })
  );
};
