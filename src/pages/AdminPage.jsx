import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

export const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Handle static demonstration login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Por favor, informe credenciais válidas.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-page">
        <div className="admin-login-card">
          <div className="login-header">
            <span className="login-brand">GABRIEL GOUVEIA</span>
            <span className="login-label">PAINEL ADMINISTRATIVO</span>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            {authError && <div className="login-error">{authError}</div>}
            <div className="login-field">
              <label htmlFor="user">USUÁRIO</label>
              <input
                type="text"
                id="user"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
              />
            </div>

            <div className="login-field">
              <label htmlFor="pass">SENHA</label>
              <input
                type="password"
                id="pass"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="login-btn">ENTRAR NO PAINEL →</button>
          </form>

          <Link to="/" className="login-back-link">← VOLTAR AO PORTFÓLIO PÚBLICO</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <span>GABRIEL GOUVEIA</span>
          <span className="sidebar-badge">ADMIN 1.0</span>
        </div>

        <nav className="sidebar-nav">
          <button className={`nav-item ${activeTab === 'dashboard' ? 'is-active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            📊 Dashboard
          </button>
          <button className={`nav-item ${activeTab === 'profile' ? 'is-active' : ''}`} onClick={() => setActiveTab('profile')}>
            👤 Perfil & Foto
          </button>
          <button className={`nav-item ${activeTab === 'certificates' ? 'is-active' : ''}`} onClick={() => setActiveTab('certificates')}>
            🎓 Certificados
          </button>
          <button className={`nav-item ${activeTab === 'projects' ? 'is-active' : ''}`} onClick={() => setActiveTab('projects')}>
            💼 Projetos
          </button>
          <button className={`nav-item ${activeTab === 'experiments' ? 'is-active' : ''}`} onClick={() => setActiveTab('experiments')}>
            🧪 Experimentos
          </button>
          <button className={`nav-item ${activeTab === 'languages' ? 'is-active' : ''}`} onClick={() => setActiveTab('languages')}>
            🌐 Idiomas
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>🚪 Sair</button>
      </aside>

      {/* Main Content Area */}
      <main className="admin-content">
        <header className="admin-header">
          <h2>ADMINISTRATIVO // {activeTab.toUpperCase()}</h2>
          <Link to="/" className="view-site-link">VER SITE PÚBLICO ↗</Link>
        </header>

        <div className="admin-panel-body">
          {activeTab === 'dashboard' && (
            <div className="dash-overview">
              <div className="metric-card">
                <span className="metric-title">PROJETOS ATIVOS</span>
                <span className="metric-value">4</span>
              </div>
              <div className="metric-card">
                <span className="metric-title">EXPERIMENTOS LAB</span>
                <span className="metric-value">6</span>
              </div>
              <div className="metric-card">
                <span className="metric-title">CERTIFICADOS</span>
                <span className="metric-value">4</span>
              </div>
              <div className="metric-card">
                <span className="metric-title">IDIOMAS ATIVOS</span>
                <span className="metric-value">3 (PT, EN, ES)</span>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="tab-pane">
              <h3>FOTO PRINCIPAL DO PERFIL</h3>
              <p>Envie uma imagem editorial em formato vertical (JPG, PNG, WEBP).</p>
              <div className="file-upload-box">
                <input type="file" accept="image/*" id="photo-file" />
                <label htmlFor="photo-file" className="upload-btn">SELECIONAR NOVA FOTO 📸</label>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="tab-pane">
              <h3>GERENCIAR CERTIFICADOS</h3>
              <button className="action-btn">+ ADICIONAR NOVO CERTIFICADO</button>
              <div className="admin-table">
                <div className="table-row header">
                  <span>NOME</span>
                  <span>INSTITUIÇÃO</span>
                  <span>ANO</span>
                  <span>AÇÕES</span>
                </div>
                <div className="table-row">
                  <span>Desenvolvimento de Sistemas</span>
                  <span>IFB</span>
                  <span>2024</span>
                  <span>[EDITAR] [EXCLUIR]</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="tab-pane">
              <h3>GERENCIAR PROJETOS & CASES</h3>
              <button className="action-btn">+ CRIAR NOVO CASE</button>
            </div>
          )}

          {activeTab === 'experiments' && (
            <div className="tab-pane">
              <h3>GERENCIAR EXPERIMENTOS LAB</h3>
              <button className="action-btn">+ ADICIONAR EXPERIMENTO</button>
            </div>
          )}

          {activeTab === 'languages' && (
            <div className="tab-pane">
              <h3>CONFIGURAÇÃO DE IDIOMAS & CONTEÚDO</h3>
              <p>Gerencie chaves de tradução para PT-BR, EN e ES.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
