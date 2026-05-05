import Navbar from './components/Navbar'
import ExperienceSection from './components/ExperienceSection'
import './App.css'
import styles from './App.module.css'

const marqueeItems = [
  'Design UI/UX',
  'Aplicativos funcionais',
  'Prototipação',
  'Sites personalizados',
  'Identidade visual',
  'Sistemas exclusivos',
  'Design Systems',
]

export default function App() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section id="home" className={styles.hero}>
          <p className={styles.heroEyebrow}>Olá, seja bem-vindo</p>
          <h1 className={styles.heroTitle}>
            Eduarda <span className={styles.highlight}>Moretto</span>
          </h1>
          <p className={styles.heroSub}>
            Especializada 
em UI/UX Design e desenvolvimento 
front-End.
          </p>
          <div className={styles.heroActions}>
            <a href="#projetos" className={styles.btnPrimary}>Ver Projetos</a>
            <a href="#contato" className={styles.btnOutline}>Entre em Contato</a>
          </div>

          <div className={styles.marquee} aria-label="Serviços em destaque">
            <div className={styles.marqueeInner}>
              {[0, 1].map((group) => (
                <div className={styles.marqueeGroup} key={group}>
                  {marqueeItems.map((item) => (
                    <span className={styles.marqueeItem} key={`${group}-${item}`}>
                      <span>{item}</span>
                      <span className={styles.moonIcon} aria-hidden="true">☾</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>

        <ExperienceSection />

        <section id="contato" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contato</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>
      </main>
    </>
  )
}
