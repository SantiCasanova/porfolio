import styles from './Experience.module.css'
import { useTranslation } from 'react-i18next'

function Experience() {
  const [t] = useTranslation('global')

  return (
    <div className={styles.container}>
      <span className={styles.title}>{t('experience.title')}</span>
      <div className={styles.content}>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Tanzee</span>
          <span className={styles.sectionInfo}>
            {t('experience.work.position')}
          </span>
          <span className={`${styles.sectionInfo} ${styles.timeWorked}`}>
            mar. 2021 - feb. 2022
          </span>
          <span className={styles.sectionDescription}>
            {t('experience.work.description')}
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>
            {t('experience.practice.title')}
          </span>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://clone-e4359.web.app/'
            className={styles.sectionUrl}
          >
            {t('experience.practice.urlTitle')}
          </a>
          <span className={styles.sectionDescription}>
            {t('experience.practice.description')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Experience
