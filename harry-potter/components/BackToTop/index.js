import styles from '../../styles/BackToTop/BackToTop.module.css'

export default function BackToTop () {

    const btn = index.getElementById("btn")

    btn.addEventListener("click", function (){
        window.scrollTo(0, 0)
    })

    return (
        <div className={styles.btn}>
            <i className={styles.arrow}></i>
        </div>
    )
}