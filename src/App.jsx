import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importação das suas páginas - Caminhos baseados na sua estrutura de pastas
import LoginPage from './features/auth/pages/LoginPage';
import ProfilePag from './features/auth/pages/ProfilePag'; 
import DashboardPages from './features/dashboard/pages/DashboardPages';
import CourseManagementPage from './features/admin/pages/CourseManagementPage';

// Import do CSS Global
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Tela de Login (Rota Inicial) */}
        <Route path="/" element={<LoginPage />} />

        {/* 2. Rota do Dashboard */}
        <Route path="/dashboard" element={<DashboardPages />} />

        {/* 3. Rota de Perfil (Atenção ao nome do arquivo: ProfilePag) */}
        <Route path="/perfil" element={<ProfilePag />} />

        {/* 4. Rota de Gestão de Cursos */}
        <Route path="/admin/cursos" element={<CourseManagementPage />} />

        {/* 5. Redirecionamento de segurança: qualquer rota inexistente manda pro Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;