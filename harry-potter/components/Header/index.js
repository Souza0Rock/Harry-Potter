import React from "react";
import Router from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function Header ({logoHeader}) {
    return (
        <header id="header">
            <div className={styles.divHeader}>
                {logoHeader && (<div className={styles.divHeader_divImg} onClick={() => Router.push('../')}><img alt="header logo" src='/images/logo-harry-potter.png' className={styles.divHeader_img} /></div>)}
            </div>
        </header>
    )
}