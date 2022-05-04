import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className="mt-3">
      <Typography variant="h5">History</Typography>
      <hr />
      <ListGroup className="">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>
    </div>
  );
};
