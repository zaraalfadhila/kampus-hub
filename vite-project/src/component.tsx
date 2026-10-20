import { NavLink } from "react-router-dom";

function Component() {
  return (
    <nav>
      <span className="nav-label">NAV</span>

      <NavLink to="/pengumuman">Pengumuman</NavLink>
      <NavLink to="/tentang">Tentang</NavLink>
      <NavLink to="/mahasiswa">Mahasiswa</NavLink>
      <NavLink to="/berita">Berita</NavLink>
    </nav>
  );
}

export default Component;
