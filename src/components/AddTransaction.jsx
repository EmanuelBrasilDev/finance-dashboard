import React, { useState } from 'react';

function AddTransaction({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('entrada');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount('');
  };

  return (
    <div className="add-transaction">
      <h2>Adicionar Transação</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AddTransaction;
