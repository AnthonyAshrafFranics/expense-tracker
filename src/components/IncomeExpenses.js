import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  let expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="d-flex bg-white p-3 justify-content-evenly rounded mt-2">
      <div className="p-1">
        <Typography variant="h4" style={{ fontSize: "1.2em" }}>
          INCOME
        </Typography>
        <Typography
          variant="h5"
          style={{ fontSize: "1em" }}
          className="text-success"
        >
          ${income}
        </Typography>{" "}
      </div>
      <div style={{ borderLeft: "1px solid lightgray" }} className="p-1">
        <Typography
          variant="h4"
          style={{ fontSize: "1.2em", marginLeft: "3px" }}
        >
          EXPENSE
        </Typography>
        <Typography
          variant="h5"
          style={{ fontSize: "1em", marginLeft: "3px" }}
          className="text-danger"
        >
          ${expense}
        </Typography>
      </div>
    </div>
  );
};
