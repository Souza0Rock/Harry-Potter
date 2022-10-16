import React from "react";
import Router from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function MainHome () {
    return (
        <main>
            <div className={styles.divMain}>
                <article>
                    <img alt="logo Harry Potter" src='/images/logo-home.png' />
                </article>
                <div className={styles.divButton}>
                    <button type="button" onClick={() => Router.push('/Characters')} className={styles.button}><p className={styles.buttonP}>veja todos<br />os personagens</p></button>
                </div>
            </div>
        </main>
    )
}