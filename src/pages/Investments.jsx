import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FinanceContext } from '../context/FinanceContext';

const Investments = () => {
  
  const { investments, addInvestment } = useContext(FinanceContext);

  
  const [investName, setInvestName] = useState('');
  const [investValue, setInvestValue] = useState('');
  const [investType, setInvestType] = useState('Renda Fixa');

  const handleAddInvestment = (e) => {
    e.preventDefault();
    
    const newInvestment = {
      investName,
      investType,
      investValue: Number(investValue) 
    };

    addInvestment(newInvestment);
    
    setInvestName('');
    setInvestValue('');
  };

  return (
    <div>
      <header>
        <Link to="/home">
          <button type="button">⬅ Voltar para a Home</button>
        </Link>
        <h1>Painel de Investimentos</h1>
      </header>

      <hr />

      <section>
        <h2>Novo Investimento</h2>
        <form onSubmit={handleAddInvestment}>
          <div>
            <label>Nome do Ativo: </label>
            <input 
              type="text" 
              placeholder="Ex: CDB Itaú" 
              value={investName}
              onChange={(e) => setInvestName(e.target.value)}
              required 
            />
          </div>

          <div>
            <label>Valor Aplicado (R$): </label>
            <input 
              type="number" 
              step="0.01" 
              placeholder="0,00" 
              value={investValue}
              onChange={(e) => setInvestValue(e.target.value)}
              required 
            />
          </div>

          <div>
            <label>Tipo de Investimento: </label>
            <select value={investType} onChange={(e) => setInvestType(e.target.value)}>
              <option value="Renda Fixa">Renda Fixa</option>
              <option value="Renda Variável (Ações)">Renda Variável (Ações)</option>
              <option value="Fundo Imobiliário">Fundo Imobiliário</option>
              <option value="Criptoativos">Criptoativos</option>
            </select>
          </div>

          <button type="submit" style={{ marginTop: '10px' }}>Registrar</button>
        </form>
      </section>

      <hr />

      <section>
        <h2>Ativos Atuais</h2>
        <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#e8f4fd' }}>
              <th>Ativo</th>
              <th>Tipo</th>
              <th>Total Investido</th>
            </tr>
          </thead>
          <tbody>
           
            {investments.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '10px' }}>
                  Nenhum investimento registrado ainda.
                </td>
              </tr>
            ) : (
           
              investments.map((item) => (
                <tr key={item.id}>
                  <td>{item.investName}</td>
                  <td>{item.investType}</td>
                  <td>R$ {Number(item.investValue).toFixed(2).replace('.', ',')}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Investments;