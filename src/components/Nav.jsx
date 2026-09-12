import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { Sun, Moon } from './Icons.jsx';
import { LINKS } from '../data.js';

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const linkCls = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '');

  return (
    <nav className="nav" id="nav">
      <div className="container">
        <Link className="nav-brand" to="/"><img src="/logo.webp" alt="Nishant Patel logo" width="26" height="26" />Nishant Patel</Link>
        <div className="nav-right">
          <NavLink className={linkCls} to="/" end>
            Home
          </NavLink>
          <NavLink className={linkCls} to="/projects">
            Projects
          </NavLink>
          <NavLink className={linkCls} to="/oss">
            OSS
          </NavLink>
          <a className="nav-hire" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">Hire Me</a>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title="Toggle theme">
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="nav-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-menu">
          <NavLink className={linkCls} to="/" end>
            Home
          </NavLink>
          <NavLink className={linkCls} to="/projects">
            Projects
          </NavLink>
          <NavLink className={linkCls} to="/oss">
            OSS
          </NavLink>
          <a className="nav-hire" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">Hire Me</a>
        </div>
      )}
    </nav>
  );
}
