import Header from '../../components/Header'
import Section from '../../components/Section'
import BackToTop from '../../components/BackToTop'
import styles from '../../styles/Characters/Characters.module.css'
import MainCharacters from '../../components/MainCharacters'

export default function Characters () {

    const logoHeader = true
    const characters = true
    const houseAll = true
    const houseGryffindor = false

    return (
        <div className={styles.divBody}>
            <div className={styles.containerBody}>
                <Header logoHeader={logoHeader} />
                {houseAll && <Section characters={characters} textSection={'personagens'}/>}
                {houseGryffindor && <Section characters={characters} textSection={'lufa-lufa'}/>}
                <MainCharacters />
                <BackToTop />
            </div>
        </div>
    )
}