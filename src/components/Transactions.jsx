import React from "react";

function Transactions({ transactions, removeTransaction }) {
  return (
    <div className="transactions">
      <h2>Transações</h2>
      <ul>
        {transactions.length === 0 ? (
          <li>Nenhuma transação adicionada</li>
        ) : (
          transactions.map((t) => (
            <li key={t.id} className={t.type}>
              {t.description} - R$ {t.amount.toFixed(2)}
              <button 
                className="remove-btn" 
                onClick={() => removeTransaction(t.id)}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Transactions;
