import React from "react";
import styles from '../../styles/Home/Home.module.css'
// import stylesCharacters from '../../styles/Characters/Characters.module.css'

export default function Section ({textSection}) {

    return (
        <section>
            <div className={styles.divSection}>
                <div className={styles.container}>
                    <div><img alt="Hogwarts logo" src="/images/logo-hoghwarts.png" /></div>
                    <div className={styles.divSection_divTitle}><h3 className={styles.divSection_title}>{textSection}</h3></div>
                    <div className={styles.divSection_titleLine} /*id={stylesCharacters.divSection_titleLine__characters}*/ />
                </div>
            </div>
        </section>
    )
}