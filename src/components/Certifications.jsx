import styles from './Certifications.module.css'
import { useTranslation } from 'react-i18next'

function Certifications() {
  const [t] = useTranslation('global')

  return (
    <div className={styles.container}>
      <span className={styles.title}>{t('certifications.title')}</span>
      <div className={styles.certifications}>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.coderhouse.com/certificados/61c8f7e50bffd4003e7cfe2d'
          className={styles.certification}
        >
          {t('certifications.reactJS')}
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://platzi.com/p/santiagocasanova482/curso/2878-typescript/diploma/detalle/'
          className={styles.certification}
        >
          {t('certifications.typescript-first')}
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://platzi.com/p/santiagocasanova482/curso/2880-typescript-poo/diploma/detalle/'
          className={styles.certification}
        >
          {t('certifications.typescript-second')}
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://platzi.com/p/santiagocasanova482/curso/2879-typescript-tipos-avanzados/diploma/detalle/'
          className={styles.certification}
        >
          {t('certifications.typescript-third')}
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://platzi.com/p/santiagocasanova482/course/2242-webpack/diploma/detalle/'
          className={styles.certification}
        >
          Webpack
        </a>
      </div>
    </div>
  )
}

export default Certifications
