import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <i className="menu-icon"></i>
      </div>
      
      <nav className="sidebar-nav">
        <Link title="Home" to="/dashboard"><i className="icon-home"></i></Link>
        <Link title="Perfil" to="/perfil"><i className="icon-user"></i></Link>
        <Link title="Upload" to="/envios"><i className="icon-folder"></i></Link>
        <Link title="Relatórios" to="/dashboard"><i className="icon-report"></i></Link>
      </nav>

      <button className="btn-logout" onClick={() => navigate('/login')}>
        <i className="icon-exit"></i>
      </button>
    </aside>
  );
};

export default Sidebar;