import styles from './Presentation.module.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

function Presentation() {
  const [t] = useTranslation('global')

  return (
    <div className={styles.container}>
      <img className={styles.photo} src='./lowPhotoPerfil.png' />
      <div className={styles.rightSide}>
        <span className={styles.title}>{t('presentation.title')}</span>
        <span className={styles.description}>
          {t('presentation.description')}
        </span>
        <div className={styles.socialMedia}>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/santiago-casanova-8b0a971a9/'
          >
            <FaLinkedinIn className={styles.linkedInLogo} />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/SantiCasanova'
          >
            <BsGithub className={styles.githubLogo} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Presentation
