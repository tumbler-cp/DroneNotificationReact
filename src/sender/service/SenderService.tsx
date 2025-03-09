import { createContext, ReactNode, useContext, useState } from 'react'
import { BindRequest, Sender } from '../../auth/types/All'
import axios from 'axios'
import { AuthContext } from '../../auth/service/AuthService'

interface SenderContextType {
    sender: Sender | null
    me: () => Promise<void>
    subscribe: (token: string) => Promise<void>
}

export const SenderContext = createContext<SenderContextType | undefined>(
    undefined
)

export const SenderProvider = ({ children }: { children: ReactNode }) => {
    const [sender, setSender] = useState<Sender | null>(null)

    const authContext = useContext(AuthContext)

    if (!authContext) return null

    const { user } = authContext

    if (!user) return null

    const me = async () => {
        await axios
            .get('/sender/current')
            .then((r) => setSender(r.data))
            .catch(() => setSender(null))
    }

    const subscribe = async (token: string) => {
        const req: BindRequest = {
            userID: user?.id,
            token: { token: token },
        }
        await axios.post('/station/bind/request', {
            userID: user?.id,
            token: { token: token },
        })
        await me()
    }

    return (
        <SenderContext.Provider value={{ sender, me, subscribe }}>
            {children}
        </SenderContext.Provider>
    )
}
