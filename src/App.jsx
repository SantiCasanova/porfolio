import Header from './components/Header'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Presentation />
      <div className={styles.containers}>
        <Skills />
        <Certifications />
        <Experience />
      </div>
    </div>
  )
}

export default App
