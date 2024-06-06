import styles from '@/app/page.module.sass'
import LogoFrame from '@/components/LogoFrame'
import Link from 'next/link'

export default function Remember() {
    return (
        <div className={styles.main}>
            <LogoFrame />
            <aside className={styles.aside}>
                <form action="submit" className={styles.formGroup}>
                    <input type="text" className={styles.input} placeholder='E-mail' name='email' />
                    <input type="button" className={styles.btn} value='Enviar' name='submit' />
                    <div className={styles.linkGroup}>
                        <Link className={`${styles.link} ${styles.label}`} href='/login'>Voltar</Link>
                    </div>
                </form>
            </aside>
        </div>
    )
}