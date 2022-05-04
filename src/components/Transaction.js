import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <ListGroup.Item
      className="d-flex justify-content-between mb-2 transaction-list"
      style={
        transaction.amount < 0
          ? { borderRight: "3px solid red" }
          : { borderRight: "3px solid #20c997" }
      }
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </ListGroup.Item>
  );
};
