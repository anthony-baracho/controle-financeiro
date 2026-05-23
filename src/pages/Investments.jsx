import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Investments = () => {

  const [investName, setInvestName] = useState('');
  const [investValue, setInvestValue] = useState('');
  const [investType, setInvestType] = useState('Renda Fixa');

  const handleAddInvestment = (e) => {

    e.preventDefault();

    console.log('Novo Investimento', { investName, investValue, investType });

    setInvestName('');
    setInvestValue('');
  };

  return (
    <div>

      <header>
        <Link to="/home">
          <button type="button">Voltar para a Home</button>
        </Link>

        <h1>Carteira de Investimentos</h1>
      </header>

      <hr />

      <section>
        <h2>Novo Investimento</h2>
        <form onSubmit={handleAddInvestment}>
          <div>
            <label>Nome do Ativo:</label>
            <input
              type="text"
              placeholder="Ex: CDB"
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
            <label>Tipo de Investimento:</label>
            <select value={investType} onChange={(e) => setInvestType(e.target.value)}>
              <option value="Renda Fixa">Renda Fixa</option>
              <option value="Renda Variável">Renda Variável</option>
              <option value="Fundo Imobiliário">Fundo Imobiliário</option>
              <option value="Criptoativos">Criptoativos</option>
            </select>
          </div>

          <button type="submit" style={{ marginTop: '10px' }}>Salvar</button>
        </form>
      </section>

      <hr />

      <section>
        <h2>Ativos Atuais</h2>
        <table border="1" style={{ width: "100%", textAlign: 'left', borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroungColor: '#e8f4fd' }}>
              <th>Ativo</th>
              <th>Tipo</th>
              <th>Total Investido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CDB</td>
              <td>Renda Fixa</td>
              <td>R$ 1.000,00</td>
            </tr>

            <tr>
              <td>Ações</td>
              <td>Renda Variável</td>
              <td>R$ 500,00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>


  )

}





export default Investments
