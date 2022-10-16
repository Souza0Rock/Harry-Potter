import Header from '../../components/Header'
import Section from '../../components/Section'
import MainCharacters from '../../components/MainCharacters'
import styles from '../../styles/Characters/Characters.module.css'

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