'use client'

import styles from '@/app/page.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {

    const [show, setShow] = useState('password')
    const [showPwd, setShowPwd] = useState(false)

    function handleShow() {
        showPwd ? setShowPwd(false) : setShowPwd(true)
        if(showPwd) {
            setShow('password')
        } else {
            setShow('text')
        }
        return
    }

    return (
        <div className={styles.main}>
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
            <aside className={styles.aside}>
                <form action="submit" className={styles.formGroup}>
                    <input type="text" className={styles.input} placeholder='Usuário' name='username' />
                    <input type={show} className={styles.input} placeholder='Senha' name='password' />
                    <input type="button" className={styles.btn} value='Entrar' name='submit' />
                    <div className={styles.linkGroup}>
                        <Link className={styles.link} href='/'>Criar uma conta</Link>
                        <Link className={styles.link} href='/'>Esqueci minha senha</Link>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleShow} /><label> Mostrar senha</label>
                    </div>
                </form>
            </aside>
        </div>
    )
}