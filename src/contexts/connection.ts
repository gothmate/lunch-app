import mysql, { Pool, PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

interface PoolConfigExtended extends PoolOptions {
	host: string;
	user: string;
	password: string;
	database: string;
}

export default class Connections {
	private pool: Pool;

	constructor(config: PoolConfigExtended) {
		this.pool = mysql.createPool(config);
	}

	async query(sql: string, values: any[] = []): Promise<any> {
		try {
			const [results] = await this.pool.query(sql, values);
			return results;
		} catch (error) {
			throw error;
		}
	}

	async close(): Promise<void> {
		await this.pool.end();
	}
}

export const config: PoolConfigExtended = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'restaurante',
};
