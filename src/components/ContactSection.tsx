import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './ContactSection.module.css'

const email = 'eduardamoretto10@gmail.com'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/M0rett0',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eduardamorett0/',
    icon: <FaLinkedin />
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eduardaa_mtt/',
    icon: <FaInstagram />,
  },
]

export default function ContactSection() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.kicker}>
          Vamos <span>construir</span> juntos!
        </p>

        <a className={styles.email} href={`mailto:${email}`}>
          {email}
        </a>

        <div className={styles.footerRow}>
          <div className={styles.socials} aria-label="Redes sociais">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className={styles.socialLink}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className={styles.copyright}>
            Eduarda Moretto © 2026 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
