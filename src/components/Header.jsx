import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function Header() {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        rel='noopener noreferrer'
        target='_blank'
        href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
      >
        {props.children}
      </a>
    )
  }
  const [t, i18n] = useTranslation('global')
  const [defaultLanguage, setDefaultLanguage] = useState('es')

  const showLanguage = () => {
    if (defaultLanguage === 'es') {
      i18n.changeLanguage('en')
      setDefaultLanguage('en')
    } else {
      i18n.changeLanguage('es')
      setDefaultLanguage('es')
    }
  }

  return (
    <div className={styles.header}>
      <button onClick={showLanguage} className={styles.languageBtn}>
        {defaultLanguage === 'es' ? (
          <span>In english, please.</span>
        ) : (
          <span>En español, por favor.</span>
        )}
      </button>
      <Mailto email='santiagocasanova482@gmail.com' subject='Hey!'>
        <button className={styles.button}>
          <span>{t('header.contact-me')}</span>
          <div className={styles.liquid} />
        </button>
      </Mailto>
    </div>
  )
}

export default Header
