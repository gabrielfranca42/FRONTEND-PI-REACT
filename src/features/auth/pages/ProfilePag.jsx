import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';

const ProfilePage = () => {
  const [user, setUser] = useState({
    nome: '', curso: '', periodo: '', turma: '', email: '', matricula: ''
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Salvando no Node.js:", user);
  };

  return (
    <div className="profile-container">
      <h2 className="page-title">PERFIL</h2>
      <form className="profile-card" onSubmit={handleSave}>
        <Input placeholder="NOME COMPLETO" value={user.nome} onChange={e => setUser({...user, nome: e.target.value})} />
        
        <div className="grid-2-col">
          <Input placeholder="CURSO" value={user.curso} onChange={e => setUser({...user, curso: e.target.value})} />
          <Input placeholder="E-MAIL INSTITUCIONAL" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
        </div>

        <div className="grid-3-col">
          <Input placeholder="PERÍODO" value={user.periodo} onChange={e => setUser({...user, periodo: e.target.value})} />
          <Input placeholder="TURMA" value={user.turma} onChange={e => setUser({...user, turma: e.target.value})} />
          <Input placeholder="MATRÍCULA" value={user.matricula} onChange={e => setUser({...user, matricula: e.target.value})} />
        </div>

        <button type="submit" className="btn-save">SALVAR</button>
      </form>
    </div>
  );
};

export default ProfilePage;