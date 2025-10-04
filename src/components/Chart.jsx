import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ChartComponent({ transactions }) {
  const entrada = transactions
    .filter((t) => t.type === "entrada")
    .reduce((acc, t) => acc + t.amount, 0);
  const saida = transactions
    .filter((t) => t.type === "saida")
    .reduce((acc, t) => acc + t.amount, 0);

  const data = [
    { name: "Entrada", value: entrada },
    { name: "Saída", value: saida },
  ];

  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div className="chart">
      <h2>Resumo Financeiro</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ChartComponent;
