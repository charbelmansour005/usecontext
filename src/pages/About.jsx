import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { ShowUserContext } from "../context/ShowUserContext"

const About = () => {
  const setUsername = useContext(UserContext)
  const username = useContext(ShowUserContext)

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = () => {
    alert(username)
  }

  return (
    <div>
      About ... <input onChange={handleChange} />
      <h1>Live Change: {username}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default About
