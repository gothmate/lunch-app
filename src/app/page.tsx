'use client'

import { useContext } from "react";
import styles from "./page.module.sass";
import Login from "./login/page";
import SessionContext from "../contexts/sessionContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const session = useContext(SessionContext)
  
  return (
    <SessionContext.Provider value={session}>
      {!session.isLogged ?
        <>
          <Header />
          <div className={styles.main}>
            <main className={styles.content}>
                <nav>
                  <ul className={styles.list}>
                    <li>
                      <Link href={'/'}>Pratos</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Bebidas</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Sobremesas</Link>
                    </li>
                  </ul>
                </nav>
                <div className={styles.cardsGroup}>
                  <div className={styles.cards}>
                    <Image 
                      className={styles.img}
                      width={300}
                      height={130}
                      src={'/img.png'}
                      alt='comida'
                      priority
                    />
                    <div className={styles.infoGroup}>
                      <h3>Nome do Prato</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam illum reprehenderit nesciunt facere beatae blanditiis quos distinctio sint?</p>
                    </div>
                  </div>
                  <div className={styles.cards}>
                    <Image 
                      className={styles.img}
                      width={300}
                      height={130}
                      src={'/img.png'}
                      alt='comida'
                      priority
                    />
                    <div className={styles.infoGroup}>
                      <h3>Nome do Prato</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam illum reprehenderit nesciunt facere beatae blanditiis quos distinctio sint?</p>
                    </div>
                  </div>
                  <div className={styles.cards}>
                    <Image 
                      className={styles.img}
                      width={300}
                      height={130}
                      src={'/img.png'}
                      alt='comida'
                      priority
                    />
                    <div className={styles.infoGroup}>
                      <h3>Nome do Prato</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam illum reprehenderit nesciunt facere beatae blanditiis quos distinctio sint?</p>
                    </div>
                  </div>
                  <div className={styles.cards}>
                    <Image 
                      className={styles.img}
                      width={300}
                      height={130}
                      src={'/img.png'}
                      alt='comida'
                      priority
                    />
                    <div className={styles.infoGroup}>
                      <h3>Nome do Prato</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam illum reprehenderit nesciunt facere beatae blanditiis quos distinctio sint?</p>
                    </div>
                  </div>
                </div>
            </main> 
            <aside className={styles.aside}>
              <h1>Teste</h1>
            </aside>
          </div>
          <Footer />
        </>
        :
        <Login />
      }
    </SessionContext.Provider>
  );
}
