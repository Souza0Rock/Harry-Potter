import React, { useEffect, useState } from "react";
import styles from '../../styles/BackToTop/BackToTop.module.css'

export default function BackToTop () {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = window.scrollY;
        if (scrolled > 300) {
        setVisible(true)
        }

        window.addEventListener('scroll', toggleVisible);
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.btn} onClick={scrollToTop}>
            {visible ?<i className={styles.arrow} /> :<></>}
        </div>
    )
}