import styles from './ContactSection.module.css'

const email = 'eduardamoretto10@gmail.com'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/M0rett0',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.17 10.17 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eduardamorett0/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.37 7.75a2.37 2.37 0 1 1 0-4.74 2.37 2.37 0 0 1 0 4.74ZM7.38 21H3.35V9.11h4.03V21Zm13.27 0h-4.02v-6.23c0-1.55-.56-2.6-1.96-2.6-1.07 0-1.7.72-1.98 1.42-.1.25-.13.59-.13.93V21H8.54s.05-10.51 0-11.89h4.02v1.69c.53-.82 1.48-1.99 3.62-1.99 2.64 0 4.47 1.72 4.47 5.42V21Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eduardaa_mtt/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.05-2.36a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24Z" />
      </svg>
    ),
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
