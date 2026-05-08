import { useState } from 'react'
import styles from './AcademicCarousel.module.css'
import proVolei from '../assets/provolei.jpg';
import grupoArandu from '../assets/arandu.jpg';
import robotica from '../assets/robotica.jpg';
import atletica from '../assets/atletica.jpg';
import mega from '../assets/mega.jpg';

const items = [
  {
    image: proVolei,
    title: 'Pró-Vôlei',
    description: 'Projeto de extensão, cujo o objetivo é fomentar a prática esportiva, na perspectiva do esporte de rendimento, da modalidade de voleibol entre estudantes de graduação e pós-graduação na Cidade Universitária da UFMS.',
  },
  {
    image: mega,
    title: 'Empresa Junior',
    description: 'Empresa júnior de computação da Universidade Federal de Mato Grosso do Sul.',
  },
  {
    image: grupoArandu,
    title: 'Grupo Arandú',
    description: 'O Grupo Arandú de Tecnologia e Ensino de Ciências do Instituto de Química visa desenvolver atividades científicas na educação básica e demais pilares.',
  },
  {
    image: robotica,
    title: 'Competiçoes de Robótica',
    description: 'Eventos, que ofertam modalidades de cunho educativo-científico-tecnológico que objetiva preparar crianças, jovens e adultos para atuarem de diferentes modos na pluralidade científica e tecnológica do mundo do trabalho.',
  },
  {
    image: atletica,
    title: 'Atlética de Computaçao',
    description: 'Associação Atlética Acadêmica de Computação da Universidade Federal de Mato Grosso do Sul denominada como  A. A. A. COMP UFMS.',
  },
]

export default function AcademicCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)
  const next = () => setCurrent((c) => (c + 1) % items.length)

  return (
    <section id="desenvolvimento-academico" className={styles.section}>
      <h2 className={styles.sectionTitle}>Desenvolvimento acadêmico</h2>
      <p className={styles.sectionIntro}>
        Minha jornada academica se estende para fora da sala de aula. Ao longo da minha trajetória
        pelo curso, participei de diversos projetos, que me ajudaram a desenvolver soft skills e
        habilidades relacionadas a trabalho em equipe, organização pessoal, gestão de pessoas e de projetos,
        impulsionando meu desenvolvimento pessoal e profissional.
      </p>

      <div className={styles.root}>
        <div className={styles.carousel}>
          <button className={styles.navBtn} onClick={prev} aria-label="Anterior" type="button">
            ‹
          </button>

          <div className={styles.track}>
            {items.map((item, i) => (
              <div
                key={i}
                className={`${styles.slide} ${i === current ? styles.active : ''}`}
                aria-hidden={i !== current}
              >
                <div className={styles.card}>
                  <img src={item.image} alt={item.title} className={styles.img} />

                  <div className={styles.titleBar}>
                    <p className={styles.titleBarText}>{item.title}</p>
                  </div>

                  <div className={styles.content}>
                    <p className={styles.contentTitle}>{item.title}</p>
                    <p className={styles.contentDesc}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Próximo" type="button">
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Item ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
