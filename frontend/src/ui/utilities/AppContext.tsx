import { createContext, useContext, useState, type ReactNode } from 'react'

type AppContextType = {
    iban: string
    setIban: (msg: string) => void
    balance: string
    setBalance: (msg: string) => void
    username: string
    setUsername: (msg: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [balance, setBalance] = useState('0.0')
    const [username, setUsername] = useState('')
    const [iban, setIban] = useState('')

    return (
        <AppContext.Provider value={{ iban, setIban, balance, setBalance, username, setUsername }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context)
        throw new Error('useAppContext must be used within AppProvider')
    return context
}
