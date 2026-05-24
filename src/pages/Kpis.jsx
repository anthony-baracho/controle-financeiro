import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FinanceContext } from '../context/FinanceContext';

const Kpis = () => {
 
 
  const { expenses } = useContext(FinanceContext);

  const totalGasto = expenses.reduce((acc, curr) => acc + Number(curr.value), 0);

  let maiorDespesa = { description: 'Nenhuma', value: 0, category: 'Nenhuma' };
  if (expenses.length > 0) {
    maiorDespesa = expenses.reduce((maior, atual) => atual.value > maior.value ? atual : maior, expenses[0]);
  }

  const mediaLancamento = expenses.length > 0 ? totalGasto / expenses.length : 0;

  const somarPorCategoria = (cat) => {
    return expenses
      .filter(item => item.category === cat)
      .reduce((acc, curr) => acc + Number(curr.value), 0);
  };

  const gastoAlimentacao = somarPorCategoria('Alimentação');
  const gastoTransporte = somarPorCategoria('Transporte');
  const gastoMoradia = somarPorCategoria('Moradia');

 const obterPorcentagem = (valorCategoria) => {
    if (totalGasto === 0) return 0;
    return Math.round((valorCategoria / totalGasto) * 100);
  };

  const pctAlimentacao = obterPorcentagem(gastoAlimentacao);
  const pctTransporte = obterPorcentagem(gastoTransporte);
  const pctMoradia = obterPorcentagem(gastoMoradia);

  return (
    <div>
   
      <header>
        <Link to="/home">
          <button type="button">⬅ Voltar para a Home</button>
        </Link>
        <h1>Indicadores de Gastos</h1>
      </header>

      <hr />

      <section>
        <h2>Métricas do Mês</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '170px' }}>
            <h3>Maior Despesa</h3>
            <p><strong>R$ {Number(maiorDespesa.value).toFixed(2).replace('.', ',')}</strong></p>
            <small>Item: {maiorDespesa.description}</small>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '170px' }}>
            <h3>Média por Lançamento</h3>
            <p><strong>R$ {mediaLancamento.toFixed(2).replace('.', ',')}</strong></p>
            <small>Total de itens: {expenses.length}</small>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '170px' }}>
            <h3>Total Acumulado</h3>
            <p><strong>R$ {totalGasto.toFixed(2).replace('.', ',')}</strong></p>
          </div>

        </div>
      </section>

      <hr />

      <section>
        <h2>Gastos por Categoria</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
          
         
          <div>
            <p><strong>Alimentação:</strong> R$ {gastoAlimentacao.toFixed(2).replace('.', ',')} ({pctAlimentacao}%)</p>
            <div style={{ background: '#eee', borderRadius: '4px', height: '12px', width: '100%' }}>
              <div style={{ background: '#007bff', height: '100%', width: `${pctAlimentacao}%`, borderRadius: '4px', transition: 'width 0.3s' }}></div>
            </div>
          </div>

          
          <div>
            <p><strong>Transporte:</strong> R$ {gastoTransporte.toFixed(2).replace('.', ',')} ({pctTransporte}%)</p>
            <div style={{ background: '#eee', borderRadius: '4px', height: '12px', width: '100%' }}>
              <div style={{ background: '#28a745', height: '100%', width: `${pctTransporte}%`, borderRadius: '4px', transition: 'width 0.3s' }}></div>
            </div>
          </div>

      
          <div>
            <p><strong>Moradia:</strong> R$ {gastoMoradia.toFixed(2).replace('.', ',')} ({pctMoradia}%)</p>
            <div style={{ background: '#eee', borderRadius: '4px', height: '12px', width: '100%' }}>
              <div style={{ background: '#ffc107', height: '100%', width: `${pctMoradia}%`, borderRadius: '4px', transition: 'width 0.3s' }}></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Kpis;