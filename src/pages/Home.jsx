import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FinanceContext } from '../context/FinanceContext';

const Home = () => {

  const { initialBalance, expenses, investments } = useContext(FinanceContext);
  const totalExpenses = expenses.reduce((accumulator, item) => accumulator + Number(item.value), 0);
  const totalInvested = investments.reduce((accumulator, item) => accumulator + Number(item.investValue), 0);
  const currentBalance = initialBalance - totalExpenses - totalInvested;

  return (
    <div>
      <header>
        <h1>Controle Financeiro</h1>
      </header>

      <hr />

      <section>
        <h2>Resumo Geral</h2>
        <div>
          
          <p><strong>Saldo Atual:</strong> R$ {currentBalance.toFixed(2).replace('.', ',')}</p>
         
          <p><strong>Total de Despesas:</strong> R$ {totalExpenses.toFixed(2).replace('.', ',')}</p>
          
          
        <p><strong>Total em Investimentos:</strong> R$ {totalInvested.toFixed(2).replace('.', ',')}</p>
        
        </div>
      </section>

      <hr />

      <nav>
        <h2>Para onde deseja ir?</h2>
        <div style={{ display: 'flex', gap: '15px' }}>

          <Link to="/releases">
            <button type="button">Lançar Despesas</button>
          </Link>

          <Link to="/kpis">
            <button type="button">Indicadores de Gastos</button>
          </Link>

          <Link to="/investments">
            <button type="button">Investimentos</button>
          </Link>

        </div>
      </nav>

      <footer style={{ marginTop: '30px' }}>
        <Link to="/">
          <button type="button">Sair</button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;