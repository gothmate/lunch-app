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
          <main className={styles.main}>
            <div className={styles.content}>
                <h5>Chamado #0001452</h5>
                <div className={styles.navCart}>
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
                  <Image
                    className={styles.cart} 
                    width={30}
                    height={30}
                    src={'/cart.svg'}
                    alt="Carrinho"
                  />
                </div>
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
                  <div className={styles.curtains}>.</div>
                </div>
            </div> 
            <aside className={styles.aside} id={styles.asideHome}>
              <div className={styles.math}>
                <div>
                  <h1>Total</h1>
                  <div>
                    <h4>Frango Xadrez</h4>
                    <ul>
                      <li>Arroz</li>
                      <li>Feijão</li>
                      <li>Farofa</li>
                      <li>Fritas</li>
                      <li>Salada de Alface</li>
                    </ul>
                    <p>Valor R$16,00</p>
                  </div>
                  <div>
                    <h4>Filé de Alcatra</h4>
                    <ul>
                      <li>Arroz</li>
                      <li>Feijão</li>
                      <li>Farofa</li>
                      <li>Fritas</li>
                      <li>Salada de Legumes</li>
                    </ul>
                    <p>Valor R$18,00</p>
                  </div>
                </div>
                <div className={styles.valorFinal}>
                  <Image
                    width={30}
                    height={30}
                    src={'/cart.svg'}
                    alt="Carrinho"
                  /> 
                  Valor: R$34,00
                </div>
              </div>
            </aside>
          </main>
          <Footer />
        </>
        :
        <Login />
      }
    </SessionContext.Provider>
  );
}
