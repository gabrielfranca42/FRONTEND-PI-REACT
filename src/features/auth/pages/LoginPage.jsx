import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { useAuth } from '../hooks/useAuth';
import '../../../styles/global.css'; // Puxando o seu CSS original

const LoginPage = () => {
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    perfil: '',
    matricula: '',
    senha: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    if (result.success) {
      alert("Login realizado com sucesso! (Redirecionando...)");
    }
  };

  return (
    <div className="login-container">
      {/* SEÇÃO ESQUERDA - BRANDING */}
      <div className="branding-section">
        <h1 className="main-title">UP Digital</h1>
        <p className="sub-title">GESTÃO ACADÊMICA DE<br />HORAS COMPLEMENTARES</p>
        
        <div className="hero-visual">
          <div className="circle-frame">
            <img src="/src/assets/alunos.png" alt="Estudante" />
          </div>
        </div>
      </div>

      {/* SEÇÃO DIREITA - FORMULÁRIO */}
      <div className="form-section">
        <div className="login-card">
          <div className="card-header">
            <img src="/src/assets/logo2.png" alt="Logo UP Digital" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <select 
                className="pwa-input" 
                required
                value={formData.perfil}
                onChange={(e) => setFormData({...formData, perfil: e.target.value})}
              >
                <option value="" disabled>PERFIL</option>
                <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                <option value="COORDENADOR">COORDENADOR</option>
                <option value="ALUNO">ALUNO</option>
              </select>
            </div>

            <Input 
              type="text" 
              placeholder="MATRÍCULA" 
              value={formData.matricula}
              onChange={(e) => setFormData({...formData, matricula: e.target.value})}
            />

            <Input 
              type="password" 
              placeholder="SENHA" 
              value={formData.senha}
              onChange={(e) => setFormData({...formData, senha: e.target.value})}
            />

            <button type="submit" id="btnEntrar" disabled={loading}>
              {loading ? "CARREGANDO..." : "ENTRAR"}
            </button>
            
            <a href="#" className="forgot-link">ESQUECI MINHA SENHA</a>
          </form>
        </div>
      </div>

      {/* ELEMENTOS DECORATIVOS */}
      <div className="deco-circle-orange"></div>
      <div className="deco-bar-blue"></div>
    </div>
  );
};

export default LoginPage;