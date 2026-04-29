import React, { useState } from 'react';
import { CertificateCard } from '../components/CertificateCard';
import '../../../styles/global.css';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Dados mockados (simulando o que virá do Node.js/Banco futuramente)
  const meusEnvios = [
    { id: 1, title: 'Certificado de Palestra React', date: '28/04/2026', status: 'ENVIADO' },
    { id: 2, title: 'Workshop Node.js', date: '20/04/2026', status: 'APROVADO' },
    { id: 3, title: 'Monitoria de Algoritmos', date: '15/04/2026', status: 'REPROVADO' },
  ];

  return (
    <div className="upload-container">
      <h2 className="page-title">UPLOAD DE ARQUIVOS</h2>

      {/* ÁREA DE DRAG & DROP */}
      <div className="upload-box">
        <div className="drop-zone">
          <i className="icon-upload"></i>
          <p>Arraste seu certificado PDF ou <strong>clique aqui</strong></p>
          <input 
            type="file" 
            onChange={(e) => setSelectedFile(e.target.files[0])} 
            className="file-input"
          />
          {selectedFile && <span className="file-name">{selectedFile.name}</span>}
        </div>
        <button className="btn-send">ENVIAR CERTIFICADO</button>
      </div>

      {/* LISTAGEM */}
      <div className="list-section">
        <h2 className="list-title">MEUS ENVIOS</h2>
        <div className="envios-grid">
          {meusEnvios.map(envio => (
            <CertificateCard key={envio.id} {...envio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;