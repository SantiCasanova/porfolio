import styles from './Skills.module.css'
import { useTranslation } from 'react-i18next'

function Skills() {
  const [t] = useTranslation('global')

  return (
    <div className={styles.container}>
      <span className={styles.title}>{t('skills.title')}</span>
      <div className={styles.skills}>
        <span className={styles.skill}>JavaScript</span>
        <span className={styles.skill}>HTML5</span>
        <span className={styles.skill}>CSS3</span>
        <span className={styles.skill}>React</span>
        <span className={styles.skill}>NextJS</span>
        <span className={styles.skill}>Redux</span>
        <span className={styles.skill}>React Router</span>
        <span className={styles.skill}>Axios</span>
        <span className={styles.skill}>NodeJS</span>
        <span className={styles.skill}>TypeScript</span>
        <span className={styles.skill}>Webpack</span>
        <span className={styles.skill}>GraphQL</span>
        <span className={styles.skill}>Git</span>
      </div>
    </div>
  )
}

export default Skills
