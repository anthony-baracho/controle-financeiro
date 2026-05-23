import React from 'react'
import { Link } from 'react-router-dom';


const Kpis = () => {
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
          
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '150px' }}>
           
            <h3>Maior Despesa</h3>
            
            <p>R$ 0,00</p>
           

          </div>

          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '150px' }}>
            
            <h3>Média por Lançamento</h3>
            
            <p>R$ 0,00</p>
          
          </div>

          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '150px' }}>
           
            <h3>Limite de Gastos</h3>
            
            <p>Atingiu <strong>0%</strong> do teto</p>
          
          </div>

        </div>
      </section>

      <hr />

     
      <section>
        <h2>Gastos por Categoria</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
          
          <div>
            <p> <strong>Alimentação:</strong> R$ 0,00 (0%)</p>
            
            <div style={{ background: '#585858', borderRadius: '4px', height: '10px', width: '100%' }}>
              <div style={{ background: '#007bff', height: '100%', width: '0%', borderRadius: '4px' }}></div>
            </div>
          </div>

          <div>
            <p> <strong>Transporte:</strong> R$ 0,00 (0%)</p>
            <div style={{ background: '#585858', borderRadius: '4px', height: '10px', width: '100%' }}>
              <div style={{ background: '#28a745', height: '100%', width: '0%', borderRadius: '4px' }}></div>
            </div>
          </div>

          <div>
            <p> <strong>Moradia:</strong> R$ 0,00 (0%)</p>
            <div style={{ background: '#585858', borderRadius: '4px', height: '10px', width: '100%' }}>
              <div style={{ background: '#ffc107', height: '100%', width: '0%', borderRadius: '4px' }}></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Kpis;

        
    


