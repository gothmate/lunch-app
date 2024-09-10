export interface isLoggedIn {
	isLogged: boolean
	name: string
	username: string
	email: string
	admin: boolean
	funcionario: boolean
}

export interface IPratos {
  idprato: number
  name: string
  description: string
  price: number
  promo: boolean
  promoprice: number
  image?: string
}

export interface IIngredients {
  idingredient: number
  name_ingredient: string
}

export interface ITicket {
  id_ticket?: number
  value: number
  date: Date
  items: string
}