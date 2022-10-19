import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Section from '../components/Section'
import Footer from '../components/Footer'
import styles from '../styles/Home/Home.module.css'

const logoHeader = false
const home = true

export default function Home() {
    return (
      <div className={styles.divBody}>
        <div className={styles.containerBody}>
          <Header logoHeader={logoHeader} />
          <MainHome />
          <Section textSection={'Navegue pelas Casas'} home={home} />
          <Footer />
        </div>
      </div>
    )
}