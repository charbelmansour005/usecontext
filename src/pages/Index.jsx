import React, { useContext } from "react"
import { SecureContext } from "../context/SecureContext"

const Index = () => {
  const user = useContext(SecureContext)
  return <div>Index{user && <h1>Secure!!! this will only show when there is an accessToken from Login API response</h1>}</div>
}

export default Index
