import type { CSSProperties } from 'react'
import styles from './ExperienceSection.module.css'

const experienceCards = [
  {
    label: 'FL',
    color: '#f9a8d4',
    title: 'Flutter',
  },
  {
    label: 'RE',
    color: '#f472b6',
    title: 'React',
  },
  {
    label: 'TS',
    color: '#c084fc',
    title: 'TypeScript',
  },
  {
    label: 'NX',
    color: '#93c5fd',
    title: 'Next.js',
  },
  {
    label: 'BD',
    color: '#a7f3d0',
    title: 'Banco de Dados',
  },
  {
    label: 'PY',
    color: '#fef3c7',
    title: 'Python',
  },
  {
    label: 'APIs',
    color: '#fdba74',
    title: 'JSON',
  },
  {
    label: 'FG',
    color: '#f87171',
    title: 'Figma',
  },
]

const experienceColumns = [
  {
    heading: 'Desenvolvimento',
    items: ['React Router', 'Next.js', 'Flutter', 'TypeScript', 'JavaScript'],
  },
  {
    heading: 'Banco de Dados',
    items: ['MySQL', 'PostgreSQL', 'Modelagem de Dados'],
  },
  /*{
    heading: 'Design',
    items: ['Wireframes', 'Design UI/UX', 'Identidade visual', 'Fluxos de usuário'],
  },*/
  {
    heading: 'Ferramentas',
    items: ['Figma', 'Git e github', 'Metodologias ágeis', 'Pacote Office', 'Engenharia de prompt'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="conhecimentos-tecnicos" className={styles.section}>
      <h2 className={styles.sectionTitle}>Conhecimentos técnicos</h2>

      <div className={styles.colorShelf} aria-label="Areas de experiencia">
        {experienceCards.map((card) => (
          <button
            key={card.label}
            className={styles.colorItem}
            style={{ '--color': card.color } as CSSProperties}
            aria-label={card.title}
            data-title={card.title}
            type="button"
          >
            <span>{card.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.panel}>
        {experienceColumns.map((column) => (
          <div className={styles.column} key={column.heading}>
            <h3>{column.heading}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
