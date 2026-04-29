import React from 'react';

const AdminValidationPage = () => {
  const pendentes = [
    { id: 1, data: '29/04/2026', aluno: 'Gabriel França', curso: 'ADS', arquivo: 'certificado_projeto.pdf' }
  ];

  return (
    <div className="admin-container">
      <h2 className="page-title">VALIDAÇÃO DE ATIVIDADES</h2>
      <p>Pendentes: <strong>{pendentes.length}</strong></p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>DATA</th>
            <th>ALUNO</th>
            <th>CURSO</th>
            <th>ARQUIVO</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {pendentes.map(item => (
            <tr key={item.id}>
              <td>{item.data}</td>
              <td>{item.aluno}</td>
              <td>{item.curso}</td>
              <td><i className="file-icon"></i> {item.arquivo}</td>
              <td>
                <button className="btn-analyze">ANALISAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button className="btn-report-pdf">GERAR RELATÓRIO PDF</button>
    </div>
  );
};

export default AdminValidationPage;