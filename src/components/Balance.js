import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="mt-4">
      <Typography variant="h4" style={{ fontSize: "1.5em" }}>
        Your Balance
      </Typography>
      <Typography variant="h2" style={{ fontSize: "2.5em" }}>
        ${total}
      </Typography>
    </div>
  );
};
