import type { CSSProperties } from 'react'
import styles from './ExperienceSection.module.css'
import { FaDatabase, FaFigma, FaFlutter, FaPython, FaReact } from 'react-icons/fa6'
import { BsTypescript } from 'react-icons/bs'
import { SiJson, SiNextdotjs } from 'react-icons/si'

const experienceCards = [
  {
    icon: <FaFlutter />,
    color: '#f9a8d4',
    title: 'Flutter',
  },
  {
    icon: <FaReact />,
    color: '#f472b6',
    title: 'React',
  },
  {
    icon: <BsTypescript />,
    color: '#c084fc',
    title: 'TypeScript',
  },
  {
    icon: <SiNextdotjs />,
    color: '#93c5fd',
    title: 'Next.js',
  },
  {
    icon: <FaDatabase />,
    color: '#a7f3d0',
    title: 'Banco de Dados',
  },
  {
    icon: <FaPython />,
    color: '#fef3c7',
    title: 'Python',
  },
  {
    icon: <SiJson />,
    color: '#fdba74',
    title: 'JSON',
  },
  {
    icon: <FaFigma />,
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
            key={card.title}
            className={styles.colorItem}
            style={{ '--color': card.color } as CSSProperties}
            aria-label={card.title}
            data-title={card.title}
            type="button"
          >
            <span>{card.icon}</span>
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
