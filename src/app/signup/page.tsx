'use client'

import LogoFrame from "@/components/LogoFrame"
import styles from '@/app/page.module.sass'
import { ChangeEvent, useState } from "react";

export default function SignUp() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [show, setShow] = useState('password')
    const [showPwd, setShowPwd] = useState(false)
    const [admin, setAdmin] = useState(false)

    function handleAdmin() {
        !admin ? setAdmin(true) : setAdmin(false)
        console.log(admin)
    }

    function handleName(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    
    function handleEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handleUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
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
                    <input type="text" className={styles.input} placeholder='Nome Completo' name='name' onChange={e => handleName(e)} />
                    <div className={styles.doubleInput}>
                        <input type="text" className={styles.input} placeholder='Usuário' name='username' onChange={e => handleUsername(e)} />
                        <input type="text" className={styles.input} placeholder='E-Mail' name='email' onChange={e => handleEmail(e)} />
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