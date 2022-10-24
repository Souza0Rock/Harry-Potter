import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Section from '../components/Section'
import Footer from '../components/Footer'
import styles from '../styles/Home/Home.module.css'

const logoHeader = false
const home = true

export default function Home() {

  if (typeof window !== 'undefined') {
    document.title= 'Harry Potter' 
  }

  return (
    <div className={styles.divBody}>
      <div className={styles.containerBody}>
        <Header logoHeader={logoHeader} />
        <MainHome />
        <Section home={home} textSection={'Navegue pelas Casas'} />
        <Footer />
      </div>
    </div>
  )
}