import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando as páginas que criamos
import LoginPage from '../features/auth/pages/LoginPage';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import UploadPage from '../features/certificates/pages/UploadPage';
import ProfilePage from '../features/auth/pages/ProfilePage';
import AdminValidationPage from '../features/certificates/pages/AdminValidationPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rotas do Aluno */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/envios" element={<UploadPage />} />
        <Route path="/perfil" element={<ProfilePage />} />

        {/* Rota do Coordenador */}
        <Route path="/admin/validacao" element={<AdminValidationPage />} />

        {/* Redirecionamento padrão: se não estiver logado, vai para o login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;