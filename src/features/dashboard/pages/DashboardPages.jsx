import React from 'react';
import '../../../styles/global.css';

const DashboardPage = () => {
  // Dados que virão do banco de dados (Node.js)
  const stats = {
    totalAcumulado: 145,
    percentual: 72,
    categorias: [
      { nome: 'Pesquisa', horas: 40 },
      { nome: 'Extensão', horas: 60 },
      { nome: 'Eventos', horas: 45 }
    ]
  };

  return (
    <div className="dashboard-container">
      <h2 className="page-title">RELATÓRIOS</h2>
      
      <div className="stats-grid">
        {/* Card de Total */}
        <div className="stat-card">
          <i className="icon-clock"></i>
          <span className="stat-label">TOTAL DE HORAS ACUMULADAS</span>
          <h2 className="stat-value">{stats.totalAcumulado}h</h2>
        </div>

        {/* Card de Percentual */}
        <div className="stat-card">
          <i className="icon-chart"></i>
          <span className="stat-label">PERCENTUAL DE CONCLUSÃO</span>
          <h2 className="stat-value">{stats.percentual}%</h2>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${stats.percentual}%` }}></div>
          </div>
        </div>
      </div>

      {/* Tabela de Categorias */}
      <div className="category-section">
        <h3>HORAS POR CATEGORIA</h3>
        <ul className="category-list">
          {stats.categorias.map((cat, index) => (
            <li key={index}>
              <span>{cat.nome}:</span>
              <strong>{cat.horas}h</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;