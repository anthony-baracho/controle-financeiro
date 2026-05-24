import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FinanceContext } from '../context/FinanceContext';

const Releases = () => {

  const { expenses, addExpense } = useContext(FinanceContext);


  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('Alimentação');


  const handleAddExpense = (e) => {
    e.preventDefault();


    const newExpense = {
      description,
      category,
      value: Number(value)
    };

    addExpense(newExpense);

    setDescription('');
    setValue('');
  };

  return (
    <div>
      <header>
        <Link to="/home">
          <button type="button">⬅ Voltar para a Home</button>
        </Link>
        <h1>Lançar Novas Despesas</h1>
      </header>

      <hr />

      <section>
        <h2>Adicionar Gasto</h2>
        <form onSubmit={handleAddExpense}>
          <div>
            <label>Descrição: </label>
            <input
              type="text"
              placeholder="Ex: Supermercado"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Valor (R$): </label>
            <input
              type="number"
              step="0.01"
              placeholder="0,00"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Categoria: </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Alimentação">Alimentação</option>
              <option value="Transporte">Transporte</option>
              <option value="Moradia">Moradia</option>
              <option value="Lazer">Lazer</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <button type="submit" style={{ marginTop: '10px' }}>Salvar Despesa</button>
        </form>
      </section>

      <hr />

      <section>
        <h2>Histórico de Lançamentos</h2>
        <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
  
            {expenses.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>R$ {Number(item.value).toFixed(2).replace('.', ',')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Releases;