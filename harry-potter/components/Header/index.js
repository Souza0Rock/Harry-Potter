import React from "react";
import styles from '../../styles/Home.module.css'

export default function Header ({header}) {
    return (
        <header>
            <div className={styles.divHeader}>
                {header && (<div className={styles.divHeader_divImg}><img alt="header logo" src='/images/logo-harry-potter.png' /></div>)}
            </div>
        </header>
    )
}