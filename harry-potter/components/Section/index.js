import react from "react";
import styles from '../../styles/Home.module.css'

export default function Section () {
    return (
        <section>
            <div className={styles.divSection}>
                <div className={styles.container}>
                    <div><img alt="Hogwarts logo" src="/images/logo-hoghwarts.png" /></div>
                    <div className={styles.divSection_divTitle}><h3 className={styles.divSection_title}>Navegue pelas Casas</h3></div>
                    <div className={styles.divSection_titleLine} />
                </div>
                <ul className={styles.divSection_ul}>
                    <div className={styles.container}>
                        <li><a><img alt="Grifinória" src="/images/grifinoria.png"/></a></li>
                        <li><a><img alt="Sonserina" src="/images/sonserina.png"/></a></li>
                        <li><a><img alt="Lufa Lufa" src="/images/lufa-lufa.png"/></a></li>
                        <li><a><img alt="Corvinal" src="/images/corvinal.png"/></a></li>
                    </div>
                </ul>
            </div>
        </section>
    )
}