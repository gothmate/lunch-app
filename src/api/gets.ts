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
	} finally {
    await con.close()
  }
}