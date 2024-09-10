'use server'
import Connections, { config } from "@/contexts/connection"


const con = new Connections(config)

export async function getPratos() {
	try {
		const query = 'SELECT * FROM pratos;'
		const results = await con.query(query, [])
		return JSON.stringify(results)
	} catch (err) {
		console.log('Erro:', err)
		return {msg: 'Erro no servidor'}
	} 
}

export async function openTicket(value: number, items: any) {
	try {
		const date = new Date().toISOString().slice(0, 19).replace('T', ' ')
		console.log("date:", date)
		const itemsJson = JSON.stringify(items)

		const query = 'INSERT INTO restaurante.tickets (value, date, items) VALUES (?, ?, ?);'
		const results = await con.query(query, [value, date, itemsJson])

		const id_ticket = results.insertId
		console.log("Novo ticket ID:", id_ticket)

		return { id_ticket }
	} catch(err) {
		console.log("Erro:", err)
		return { msg: "Erro na criação do Ticket." }
	}
}



export async function getPrato(id: number) {
	try {
		const query = 'SELECT * FROM restaurante.pratos WHERE idprato=?;'
		const results = await con.query(query, [id])
		console.log(results)
		return results
	} catch(err) {
		console.log("Erro:", err)
		return {msg: "Erro na verificação do prato."}
	}
}

export async function getTicket(id: number) {
	try {
		const query = 'SELECT * FROM restaurante.tickets WHERE id_ticket=?;'
		const results = await con.query(query, [id])
		console.log("res:", results)
		return results
	} catch(err) {
		console.log("Erro:", err)
		return {msg: "Ticket não encontrado."}
	}
}

export async function updateTicket(ticketId: number, items: string, value: number) {
	try {
		const query = 'UPDATE restaurante.tickets SET value=?, items=? WHERE id_ticket=?'
		const results = await con.query(query, [value, items, ticketId])
		console.log('res:', results)
		return {msg: "Ticket atualizado", res: JSON.stringify(results)}
	} catch(err) {
		console.log("Erro:", err)
		return {msg: "Ticket não pôde ser atualizado."}
	}
}