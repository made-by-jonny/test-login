import styles from "./Pod.module.scss"

const Pod = ({children}) => 
    <article className={`pod ${styles.pod}`}>
        {children}
    </article>

export default Pod