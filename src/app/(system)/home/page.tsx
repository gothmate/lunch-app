'use client'
import Login from "@/app/login/page"
import SessionContext from "@/contexts/sessionContext"
import { useContext, useEffect, useState } from "react"
import styles from '@/app/page.module.sass'
import Cart from "@/components/Cart"
import { IPratos } from "@/types/types"
import { getPratos } from "@/api/gets"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
    const session = useContext(SessionContext)

		const [pratos, setPratos] = useState<IPratos[]>([] as any)

		async function fetchPratos() {
			try {
				const data: any = await getPratos()
				if(!data.msg) {
					setPratos(JSON.parse(data))
					return
				}
				alert(data.msg)
			} catch (error) {
				console.error('Erro ao buscar pratos:', error)
			}
		}

		useEffect(() => {
			fetchPratos()
		}, [])

  
  return (
		<SessionContext.Provider value={session}>
			{!session.isLogged ? (
				<>
					<div className={styles.content}>
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
								alt='Carrinho'
							/>
						</div>
						<div className={styles.cardsGroup}>
							{pratos.length === 0 ? <div className={styles.loading}>Loading ...</div> 
								: (pratos.map((el) => (
									<div key={el.idprato} className={styles.cards}>
										<Image
											className={styles.img}
											width={300}
											height={130}
											src={'/img.png'}
											alt={el.name}
											priority
										/>
										<div className={styles.infoGroup}>
											<h3>{el.name}</h3>
											<p>{el.description}</p>
										</div>
									</div>
								)))
							}
							<div className={styles.curtains}>.</div>
						</div>
					</div>
					<aside className={styles.aside} id={styles.asideHome}>
						<Cart />
					</aside>
				</>
			) : (
				<Login />
			)}
		</SessionContext.Provider>
	);
}