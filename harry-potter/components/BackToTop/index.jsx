import React, { useEffect, useState } from "react";
import styles from '../../styles/BackToTop/BackToTop.module.css'

export default function BackToTop () {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = window.scrollY;
            setVisible(scrolled > 350);
            };
            window.addEventListener("scroll", toggleVisible);
            
            return () => {
            window.removeEventListener("scroll", toggleVisible);
            };
        }, []);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (visible && (
                <div className={styles.btn} onClick={scrollToTop}>
                    <i className={styles.arrow} />
                </div>
            )
    )
}