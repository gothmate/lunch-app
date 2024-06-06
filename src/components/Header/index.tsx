import Image from "next/image";
import style from './page.module.sass'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.display}>
                <Image 
                    width={100}
                    height={100}
                    src={'./logo.svg'}
                    alt="Logo"
                    priority
                />
                <nav className={style.nav}>
                    <Image
                        width={50}
                        height={50}
                        src={'./profile.svg'}
                        alt="Profile picture"
                        priority
                    />
                </nav>
            </div>
        </header>
    )
}