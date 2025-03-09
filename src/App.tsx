import { Route, Routes } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Home from './home/Home'
import Profile from './sender/page/Profile'

function App() {
    return (
        <div className="flex flex-col text-xl min-h-screen">
            <NavBar />
            <div className="flex grow">
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
