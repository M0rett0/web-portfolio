import styles from './HomeSection.module.css'

export default function HomeSection() {
  return (
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
  )
}
