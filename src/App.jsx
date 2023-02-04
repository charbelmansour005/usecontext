import React, { useState } from "react"
import Index from "./pages/Index"
import About from "./pages/About"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { UserContext } from "./context/UserContext"
import { ShowUserContext } from "./context/ShowUserContext"
import { SecureContext } from "./context/SecureContext"
import { loginUser } from "./services/loginUser"
import Secure from "./pages/Secure"

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const userLogin = () => {
    loginUser({ username, password })
      .then((response) => {
        localStorage.setItem("token", response.accessToken)
        setUser(response.accessToken)
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {user ? (
          <li>
            <Link to="/secure">Secure</Link>
          </li>
        ) : (
          <>
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={userLogin}>Submit</button>
          </>
        )}
      </ul>
      <SecureContext.Provider value={user}>
        <UserContext.Provider value={username}>
          <ShowUserContext.Provider value={username}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              {user && <Route path="/secure" element={<Secure />} />}
            </Routes>
          </ShowUserContext.Provider>
        </UserContext.Provider>
      </SecureContext.Provider>
    </BrowserRouter>
  )
}

export default App
