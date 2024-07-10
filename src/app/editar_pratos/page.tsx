'use client'

import React, { FormEvent, useContext } from "react"
import SessionContext from '../../contexts/sessionContext'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from '../page.module.sass'
import style from './page.module.sass'


export default function EditarPratos() {
    
    const session = useContext(SessionContext)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <SessionContext.Provider value={session}>
                <>
                    <Header />
                    <main className={styles.main}>
                        <div className={`${styles.content} ${styles.contentFull}`}>
                        {!session.isLogged ?
                            <form onSubmit={e => handleSubmit(e)}>
                                <h2>Criação de Novos Pratos</h2>
                                <div className={style.inputGroup}>
                                    <input type="text" placeholder="Nome do prato" className={styles.input} />
                                    <textarea placeholder="descrição do prato" className={styles.input} />
                                    <input type="text" placeholder="Preço" className={styles.input} />
                                    <div>
                                        <input type="checkbox" /> <label>Tem promoção?</label>
                                    </div>
                                    <input type="promo" placeholder="Preço promocional" className={styles.input} />
                                    <input type="submit" className={styles.btn} value={"Criar"} />
                                </div>
                            </form> :
                            <h3>Somente para Admins</h3>
                        }
                        </div>
                    </main> 
                    <Footer />
                </> 
        </SessionContext.Provider>
    )
}