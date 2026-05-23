import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Releases = () => {

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('Alimentação');

  const handleAddExpense = (e) => {

    e.preventDefault();
    console.log('Nova despesa:', { description, value, category });

    setDescription('');
    setValue('');
  };

  return (
    <div>

      <header>
        <Link to="/home">
          <button type="button">⬅ Voltar para Home</button>
        </Link>

        <h1>Lance suas despesas</h1>

      </header>

      <hr />

      <section>

        <h2>Adicinar Gasto</h2>
        <form onSubmit={handleAddExpense}>

          <div>

            <label>Descrição: </label>
            <input
              type="text"
              placeholder='Ex: Mercado'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Valor: </label>
            <input
              type="number"
              step="0.01"
              placeholder='0,00'
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Categoria: </label>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Alimentação">Alimentação</option>
              <option value="Transporte">Transporte</option>
              <option value="Educação">Educação</option>
              <option value="Lazer">Lazer</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <button type="submit" style={{ marginTop: '10px' }}>Salvar</button>
        </form>
      </section>

      <hr />

      <section>
        <h2>Histórico de Lançamentos</h2>
        <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#ccffcb' }}>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>Mercadinho Preço Bom</td>
              <td>Alimentação</td>
              <td>R$ 150,00</td>

            </tr>

            <tr>
              <td>Combustível Posto Ipiranga</td>
              <td>Transporte</td>
              <td>R$ 80,00</td>

            </tr>

          </tbody>
        </table>
      </section>

    </div>
  )
}

export default Releases
