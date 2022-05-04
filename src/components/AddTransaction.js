import { Button, Input, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    console.log(newTransaction);

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <form className="mt-3" onSubmit={onSubmit}>
      <Typography variant="h5">Add new transaction</Typography>
      <hr />
      <Input
        className="bg-white w-100 my-3"
        placeholder="Enter New Transaction"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Typography>Amount</Typography>
      <Typography>(negative-expense, positive-income)</Typography>
      <Input
        className="bg-white w-100 my-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount..."
      />
      <Button
        style={{ backgroundColor: "purple", color: "white" }}
        className="w-100 mb-3"
        type="submit"
      >
        Add Transaction
      </Button>
    </form>
  );
};
