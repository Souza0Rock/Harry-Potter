import React from "react";
import styles from '../../styles/Home/Home.module.css'
import stylesCharacters from '../../styles/Characters/Characters.module.css'

export default function Section ({textSection, home, characters}) {

    return (
        <section>
            <div className={styles.divSection}>
                <div className={styles.container}>
                    <div><img alt="Hogwarts logo" src="/images/logo-hoghwarts.png" /></div>
                    <div className={styles.divSection_divTitle}>
                        {home &&(<h3 className={styles.divSection_title__home}>{textSection}</h3>)}
                        {characters &&(<h3 className={stylesCharacters.divSection_title__characters}>{textSection}</h3>)}
                    </div>
                    {home && (<div className={styles.divSection_titleLine__home} />)}
                    {characters && (<div className={stylesCharacters.divSection_titleLine__characters} />)}
                </div>
            </div>
        </section>
    )
}