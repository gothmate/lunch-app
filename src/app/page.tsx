'use client'

import { useContext } from "react";
import styles from "./page.module.sass";
import Login from "./login/page";
import SessionContext from "../contexts/sessionContext";

export default function Home() {
  const session = useContext(SessionContext)
  
  return (
    <SessionContext.Provider value={session}>
      {session.isLogged ?
        <main className={styles.main}>
          <h1>Teste</h1>
        </main> :
        <Login />
      }
    </SessionContext.Provider>
  );
}
