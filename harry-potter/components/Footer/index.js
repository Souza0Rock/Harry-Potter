import React from "react";
import Router from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function Footer () {

    return (
        <footer>
            <div className={styles.divFooter}>
                <ul className={styles.divFooter_ul}>
                    <div className={styles.container}>
                        <li><img alt="Grifinória" src="/images/grifinoria.png" onClick={() => Router.push('/Characters?house=gryffindor')} className={styles.divFooter_ul_imgLink} /></li>
                        <li><img alt="Sonserina" src="/images/sonserina.png" onClick={() => Router.push('/Characters')} className={styles.divFooter_ul_imgLink}/></li>
                        <li><img alt="Lufa Lufa" src="/images/lufa-lufa.png" onClick={() => Router.push('/Characters')} className={styles.divFooter_ul_imgLink}/></li>
                        <li><img alt="Corvinal" src="/images/corvinal.png" onClick={() => Router.push('/Characters')} className={styles.divFooter_ul_imgLink}/></li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}