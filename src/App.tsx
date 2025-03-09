import { Route, Routes } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Home from './home/Home'
import Profile from './sender/page/Profile'
import SenderPage from './sender/page/SenderPage'
import { SenderProvider } from './sender/service/SenderService'

function App() {
    return (
        <div className="flex flex-col text-xl min-h-screen">
            <NavBar />
            <div className="flex grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/sender"
                        element={
                            <SenderProvider>
                                <SenderPage />
                            </SenderProvider>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <p className="mx-auto my-auto text-8xl font-extrabold">
                                404
                            </p>
                        }
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App
