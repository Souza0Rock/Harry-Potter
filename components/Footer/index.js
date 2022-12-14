import React, { useEffect, useState } from "react";
import Router from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function Footer () {

    return (
        <footer className={styles.footer__mobile}>
            <div className={styles.divFooter}>
                <ul className={styles.divFooter_ul}>
                    <div className={styles.container}>
                        <li className={styles.divFooter_ul_li}><img alt="Grifinória" src="/images/grifinoria.png" onClick={() => {Router.push('/Characters?house=Gryffindor')}} className={styles.divFooter_ul_imgLink} /></li>
                        <li className={styles.divFooter_ul_li}><img alt="Sonserina" src="/images/sonserina.png" onClick={() => {Router.push('/Characters?house=Slytherin')}} className={styles.divFooter_ul_imgLink}/></li>
                        <li className={styles.divFooter_ul_li}><img alt="Lufa Lufa" src="/images/lufa-lufa.png" onClick={() => {Router.push('/Characters?house=Hufflepuff')}} className={styles.divFooter_ul_imgLink}/></li>
                        <li className={styles.divFooter_ul_li}><img alt="Corvinal" src="/images/corvinal.png" onClick={() => {Router.push('/Characters?house=Ravenclaw')}} className={styles.divFooter_ul_imgLink}/></li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}