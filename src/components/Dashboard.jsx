import React, { useState, useEffect } from "react";
import Header from "./Header";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";
import ChartComponent from "./Chart";

function Dashboard() {
  // Carrega transações do LocalStorage ou inicia vazio
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // Salva sempre que transactions mudar
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
        <AddTransaction addTransaction={addTransaction} />
        <Transactions transactions={transactions} removeTransaction={removeTransaction} />
        <ChartComponent transactions={transactions} />
      </div>
    </div>
  );
}

export default Dashboard;
