
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Pengumuman from './pengumuman';
import Mahasiswa from './mahasiswa';
import Berita from './berita';
import Beranda from './beranda';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <header>
          <span className="label">PORTAL AKADEMIK</span>
          <h1>KampusHub</h1>
          <p>
            Pusat informasi akademik dan kemahasiswaan.
          </p>
        </header>

        <nav>
          <span className="nav-label">MENU</span>

          <NavLink to="/" end className={({ isActive }) =>
            isActive ? 'active' : ''
          }>
            Beranda
          </NavLink>

          <NavLink to="/berita" className={({ isActive }) =>
            isActive ? 'active' : ''
          }>
            Berita
          </NavLink>

          <NavLink to="/mahasiswa" className={({ isActive }) =>
            isActive ? 'active' : ''
          }>
            Mahasiswa
          </NavLink>

          <NavLink to="/pengumuman" className={({ isActive }) =>
            isActive ? 'active' : ''
          }>
            Pengumuman
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/pengumuman" element={<Pengumuman />} />
          </Routes>
        </main>

        <footer>
          <p>
            © {new Date().getFullYear()} KampusHub
            {' · '}Portal Informasi Kampus
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
