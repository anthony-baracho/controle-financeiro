import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      <header>

        <h1>Painel Financeiro</h1>
        <p>Seja bem vindo ao seu controle de finanças pessoal!</p>

      </header>

      <hr />

      <section>
        <h2>Resumo Geral</h2>
        <div>

          <p><strong>Saldo Atual:</strong> R$ 0,00</p>
          <p><strong>Total de Despesas:</strong> R$ 0,00</p>

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
            <button type="button">Indicadores Gerais</button>
          </Link>

          <Link to="/investments">
            <button type="button">Seus Investimentos</button>
          </Link>

        </div>
      </nav>

      <footer style={{ marginTop: '30px' }}>

        <Link to="/">
          <button type="button">Sair</button>
        </Link>

      </footer>

    </div>
  )
}

export default Home
