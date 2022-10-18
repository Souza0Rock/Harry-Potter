import Header from '../../components/Header'
import Section from '../../components/Section'
import styles from '../../styles/Characters/Characters.module.css'
import MainCharacters from '../../components/MainCharacters'

export default function Characters () {

    const logoHeader = true
    const characters = true

    return (
        <div className={styles.divBody}>
            <Header logoHeader={logoHeader} />
            <Section textSection={'personagens'} characters={characters} />
            <MainCharacters />
        </div>
    )
}