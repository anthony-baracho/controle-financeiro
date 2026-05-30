import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FinanceContext } from '../context/FinanceContext';

const Home = () => {
  const { expenses = [], investments = [] } = useContext(FinanceContext);

  const totalDespesasReal = expenses.reduce((acc, curr) => acc + Number(curr.value || 0), 0);

  const totalInvestidoReal = investments.reduce((acc, curr) => acc + Number(curr.value || 0), 0);

  // para seu conhecimento ruan: deixei um valor fixo de R$ 5.000,00

  const saldoFinalCalculado = 5000 - totalDespesasReal;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-tight">NexPay</h1>
          <Link to="/">
            <button className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition-colors">
              Sair
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Olá, seja bem vindo!</h2>
          <p className="text-slate-400 mt-1">Aqui está o resumo das suas finanças.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Saldo Atual</p>
            <p className={`text-3xl font-bold mt-2 ${saldoFinalCalculado >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              R$ {saldoFinalCalculado.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total de Despesas</p>
            <p className="text-3xl font-bold text-rose-500 mt-2">
              R$ {totalDespesasReal.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Investido</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">
              R$ {totalInvestidoReal.toFixed(2).replace('.', ',')}
            </p>
          </div>

        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Para onde deseja ir?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link to="/releases" className="group">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-all text-center">
                <span className="text-2xl block mb-2"></span>
                <p className="font-medium text-slate-200 group-hover:text-white">Lançar Despesas</p>
                <small className="text-slate-500 block mt-1">Cadastre seus gastos diários</small>
              </div>
            </Link>

            <Link to="/investments" className="group">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-all text-center">
                <span className="text-2xl block mb-2"></span>
                <p className="font-medium text-slate-200 group-hover:text-white">Investimentos</p>
                <small className="text-slate-500 block mt-1">Veja como seu dinheiro está investido</small>
              </div>
            </Link>

            <Link to="/kpis" className="group">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-all text-center">
                <span className="text-2xl block mb-2"></span>
                <p className="font-medium text-slate-200 group-hover:text-white">Indicadores </p>
                <small className="text-slate-500 block mt-1">Análise geral de gastos</small>
              </div>
            </Link>

          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;