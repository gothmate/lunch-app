'use client'
import { isLoggedIn } from '@/types/types'
import { createContext } from 'react'

const initialSession: isLoggedIn = {
	isLogged: false,
	name: '',
	username: '',
	email: '',
	admin: false,
	funcionario: true
}

const SessionContext = createContext<isLoggedIn>(initialSession)

export default SessionContext