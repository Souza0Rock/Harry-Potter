import Header from '../../components/Header'
import Section from '../../components/Section'
import BackToTop from '../../components/BackToTop'
import styles from '../../styles/Characters/Characters.module.css'
import MainCharacters from '../../components/MainCharacters'

export default function Characters () {

    const logoHeader = true
    const characters = true
    
    const url = window.location.href
    const splitGlobal = url.split('house=')[1]
    const splitHouse = splitGlobal.split('&')[0]
    console.log(splitHouse)

    return (
        <div className={styles.divBody}>
            <div className={styles.containerBody}>
                <Header logoHeader={logoHeader} />
                {splitHouse === 'all' && <Section characters={characters} textSection={'personagens'} />}
                {splitHouse === 'Gryffindor' && <Section characters={characters} textSection={'grifinória'} />}
                {splitHouse === 'Slytherin' && <Section characters={characters} textSection={'sonserina'} />}
                {splitHouse === 'Hufflepuff' && <Section characters={characters} textSection={'lufa-lufa'} />}
                {splitHouse === 'Ravenclaw' && <Section characters={characters} textSection={'corvinal'} />}
                <MainCharacters />
                <BackToTop />
            </div>
        </div>
    )
}