import { useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#conhecimentos-tecnicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>E.M</span>

        <button
          className={styles.menu}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          type="button"
        >
          <span className={`${styles.bar} ${isOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.bar3Open : ''}`} />
        </button>

        <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
