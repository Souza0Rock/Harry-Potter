import React from "react";
import styles from '../../styles/Home.module.css'

export default function Main () {
    return (
        <main>
            <div className={styles.divMain}>
                <article>
                    <img alt="logo Harry Potter" src='/images/logo-home.png' />
                </article>
                <div className={styles.divButton}>
                    <button className={styles.button}><a><p className={styles.buttonP}>veja todos<br />os personagens</p></a></button>
                </div>
            </div>
        </main>
    )
}