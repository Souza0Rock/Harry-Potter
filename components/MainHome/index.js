import React, { useState } from "react";
import Router from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function MainHome () {

    const [houseAll, setHouseAll] = useState(false)

    return (
        <main className={styles.main__mobile}>
            <div className={styles.divMain}>
                <article >
                    <img alt="logo Harry Potter" src='/images/logo-home.png' className={styles.imgMainHome__mobile} />
                </article>              
                <div className={styles.divButton}>
                    <button type="button" onClick={() => {Router.push('/Characters?house=all'); setHouseAll(true)}} className={styles.button}><p className={styles.buttonP}>veja todos<br />os personagens</p></button>
                </div>
            </div>
        </main>
    )
}