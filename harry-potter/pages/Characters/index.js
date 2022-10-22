import Header from '../../components/Header'
import Section from '../../components/Section'
import BackToTop from '../../components/BackToTop'
import styles from '../../styles/Characters/Characters.module.css'
import MainCharacters from '../../components/MainCharacters'

export default function Characters () {

    const logoHeader = true
    const characters = true

    return (
        <div className={styles.divBody}>
            <div className={styles.containerBody}>
                <Header logoHeader={logoHeader} />
                <Section characters={characters} textSection={'personagens'} />
                <MainCharacters />
                <BackToTop />
            </div>
        </div>
    )
}