import { createContext } from 'react';

interface isLoggedIn {
	isLogged: boolean;
	name: string;
    username: string;
	email: string;
	admin: boolean;
}

const initialSession: isLoggedIn = {
	isLogged: false,
	name: '',
	username: '',
	email: '',
	admin: false
};

const SessionContext = createContext<isLoggedIn>(initialSession);

export default SessionContext;