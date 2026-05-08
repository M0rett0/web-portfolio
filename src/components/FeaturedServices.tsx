import styles from './FeaturedServices.module.css'
import { IoMoonSharp } from 'react-icons/io5'

const services = [
  'Design UI/UX',
  'Aplicativos funcionais',
  'Prototipação',
  'Sites personalizados',
  'Identidade visual',
  'Sistemas exclusivos',
  'Design Systems',
]

export default function FeaturedServices() {
  return (
    <section className={styles.featuredServices} aria-label="Serviços em destaque">
      <div className={styles.marqueeInner}>
        {[0, 1].map((group) => (
          <div className={styles.marqueeGroup} key={group}>
            {services.map((service) => (
              <span className={styles.marqueeItem} key={`${group}-${service}`}>
                <span>{service}</span>
                <span className={styles.moonIcon} aria-hidden="true"> <IoMoonSharp /> </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
