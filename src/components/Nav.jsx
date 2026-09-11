import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { Sun, Moon } from './Icons.jsx';
import { LINKS } from '../data.js';

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="nav" id="nav">
      <div className="container">
        <Link className="nav-brand" to="/"><img src="/logo.webp" alt="Nishant Patel logo" width="26" height="26" />Nishant Patel</Link>
        <div className="nav-right">
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/" end>
            Home
          </NavLink>
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/projects">
            Projects
          </NavLink>
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/oss">
            OSS
          </NavLink>
          <a className="nav-hire" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">Hire Me</a>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title="Toggle theme">
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
