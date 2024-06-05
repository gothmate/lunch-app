'use client'

import LogoFrame from "@/components/LogoFrame"
import styles from '@/app/page.module.sass'
import { useState } from "react";

export default function SignUp() {

    const [show, setShow] = useState('password')
    const [showPwd, setShowPwd] = useState(false)

    function handleAdmin() {

    }

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
            <aside className={styles.aside}>
                <form action="submit" className={styles.formGroup}>
                    <input type="text" className={styles.input} placeholder='Nome Completo' name='name' />
                    <div className={styles.doubleInput}>
                        <input type="text" className={styles.input} placeholder='Usuário' name='username' />
                        <input type="text" className={styles.input} placeholder='E-Mail' name='email' />
                    </div>
                    <div className={styles.doubleInput}>
                        <input type={show} className={styles.input} placeholder='Senha' name='password' />
                        <input type={show} className={styles.input} placeholder='Repetir Senha' name='repeat' />
                    </div>
                    <input type="button" className={styles.btn} value='Criar' name='submit' />
                    <div>
                        <input type="checkbox" onClick={handleShow} /><label className={styles.label}> Mostrar senha</label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleAdmin} /><label className={styles.label}> Marcar se o Usuário for um admin</label>
                    </div>
                </form>
            </aside>
            <LogoFrame />
        </div>
    )
}