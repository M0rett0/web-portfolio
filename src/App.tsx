import Navbar from './components/Navbar'
import AcademicCarousel from './components/AcademicCarousel'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import FeaturedServices from './components/FeaturedServices'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}> 
            <h1 className={styles.heroTitle}>
              <span className={styles.firstName}>Eduarda</span>
              <span className={styles.lastName}>Moretto</span>
            </h1>

            <p className={styles.heroSub}>
              Designer UI/UX e desenvolvedora Front-End
            </p>

            <div className={styles.heroActions}>
              <a href="#projetos" className={styles.btnPrimary}>Ver projetos</a>
              <a href="#contato" className={styles.btnOutline}>Entre em contato</a>
            </div>
          </div>
        </section>

        <FeaturedServices />

        <AcademicCarousel />

        <section id="projetos" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>

        <ExperienceSection />

        <section id="experiencias" className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiências</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>

        <ContactSection />
      </main>
    </>
  )
}
