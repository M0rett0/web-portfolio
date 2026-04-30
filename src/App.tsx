import Navbar from './components/Navbar'
import './App.css'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Hero */}
        <section id="home" className={styles.hero}>
          <p className={styles.heroEyebrow}>Olá, seja bem-vindo</p>
          <h1 className={styles.heroTitle}>
            Eu sou <span className={styles.highlight}>Eduarda Moretto</span>
          </h1>
          <p className={styles.heroSub}>
            Desenvolvedora apaixonada por criar experiências digitais únicas e elegantes.
          </p>
          <div className={styles.heroActions}>
            <a href="#projetos" className={styles.btnPrimary}>Ver Projetos</a>
            <a href="#contato" className={styles.btnOutline}>Entre em Contato</a>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>

        {/* Experiências */}
        <section id="experiencias" className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiências</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>

        {/* Contato */}
        <section id="contato" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contato</h2>
          <p className={styles.sectionSub}>Em breve...</p>
        </section>
      </main>
    </>
  )
}
