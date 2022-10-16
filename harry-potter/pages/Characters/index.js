import Header from '../../components/Header'
import Section from '../../components/Section'
import styles from '../../styles/Characters/Characters.module.css'

const logoHeader = true

export default function Home() {
    return (
        <div className={styles.divBody}>
            <Header logoHeader={logoHeader} />
            <Section textSection={'personagens'} />
        </div>
    )
}