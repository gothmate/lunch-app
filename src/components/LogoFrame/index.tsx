import Image from "next/image";
import styles from '@/app/page.module.sass'

export default function LogoFrame() {
    return (
        <div className={styles.logoContent}>
            <Image
                id={styles.logo}
                width={500}
                height={500}
                src={'./logo.svg'}
                alt='Logo'
                priority
            />
        </div>
    )
}