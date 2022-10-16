import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Section from '../components/Section'
import Footer from '../components/Footer'
import styles from '../styles/Home/Home.module.css'

const logoHeader = false

export default function Home() {
    return (
      <div className={styles.divBody}>
        <Header logoHeader={logoHeader} />
        <MainHome />
        <Section textSection={'Navegue pelas Casas'} />
        <Footer />
      </div>
    )
}