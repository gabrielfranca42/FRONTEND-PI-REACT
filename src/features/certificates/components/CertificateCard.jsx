import React from 'react';

export const CertificateCard = ({ title, date, status }) => {
  // Lógica simples para mudar a cor da tag baseado no status
  const statusColors = {
    ENVIADO: 'bg-blue-100 text-blue-600',
    APROVADO: 'bg-green-100 text-green-600',
    REPROVADO: 'bg-red-100 text-red-600'
  };

  return (
    <div className="certificate-card">
      <div className="card-info">
        <h3>{title}</h3>
        <span>Enviado em: {date}</span>
      </div>
      <div className={`status-badge ${statusColors[status]}`}>
        {status}
      </div>
      <button className="btn-open">ABRIR</button>
    </div>
  );
};