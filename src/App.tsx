import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
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
        <HomeSection />

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
