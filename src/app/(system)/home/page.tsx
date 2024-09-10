'use client'
import Login from "@/app/login/page"
import SessionContext from "@/contexts/sessionContext"
import { FormEvent, useContext, useEffect, useState } from "react"
import styles from '@/app/page.module.sass'
import Cart from "@/components/Cart"
import { IPratos, ITicket } from "@/types/types"
import { getPrato, getPratos, getTicket, openTicket, updateTicket } from "@/api/gets"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
    const session = useContext(SessionContext)

		const [pratos, setPratos] = useState<IPratos[]>([] as any)
		const [ticket, setTicket] = useState<ITicket>(null as any)
		const [ticketId, setTicketId] = useState(0)
		const [items, setItems] = useState([] as any)

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

		function handleSubmit(e: FormEvent<HTMLFormElement>) {
			e.preventDefault()
		}

		async function handleTicket(idprato: number) {
			const prato = await getPrato(idprato)
			let total = 0
			if (ticketId === 0) {
				setItems([...items, prato[0]])
				const newTicket = await openTicket(prato[0].price, [prato[0]])
				setTicketId(newTicket.id_ticket)
				return
			} 
			
			console.log("prato no else: ", prato)
			setItems([...items, prato[0]])
			items.forEach((item:IPratos) => {
				total += item.price
			});
			const updatedTicket = await updateTicket(ticketId, JSON.stringify(items), total)
			console.log(updatedTicket.msg)
		}

		async function handleTicketId() {
			if(ticketId != 0) {
				const data = await getTicket(ticketId)
				let it = JSON.parse(data[0].items)
				console.log("data:", it)
			}
		}

		useEffect(() => {
			fetchPratos()
		}, [])
		
		useEffect(() => {
			handleTicketId()
		}, [handleTicket])

  
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
							<form onSubmit={handleSubmit} >
								{pratos.length === 0 ? <div className={styles.loading}>Loading ...</div> 
									: (pratos.map((el) => (
									<div key={el.idprato} className={styles.cards}>
										<Image
											className={styles.img}
											width={100}
											height={100}
											src={el.image != null ? el.image : '/img.png'}
											alt={el.name}
											priority
										/>
										<div className={styles.infoGroup}>
											<h3>{el.name}</h3>
											<p>{el.description}</p>
										</div>
										<button className={styles.btn} onClick={() => handleTicket(el.idprato)}>Adicionar</button>
									</div>))
								)}
							</form>
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