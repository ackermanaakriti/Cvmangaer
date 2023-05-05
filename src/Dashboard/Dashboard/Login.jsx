import {React,useRef, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect , isAuthenticated, logout, user} = useAuth0();

   
  return (
    <>
    <div>
      <button  onClick={() => loginWithRedirect() }>Get Started</button> 

    </div>
    

  

    {/* <div>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div> */}
    </>
  )
}

export default Login;
