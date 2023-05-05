import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import { ProSidebarProvider } from "react-pro-sidebar";


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider>
  <ProSidebarProvider>  <App /> </ProSidebarProvider>
  </ChakraProvider>
  
   
   {/* <Auth0Provider
   domain="dev-1yl6t7s7zngznlnv.us.auth0.com"
   clientId="4CQDz5ROoRmAt0WqYwU6p9kIRL1abwtG"
   authorizationParams={{
     redirect_uri: 'http://localhost:5175'
   }}
 >
  
 </Auth0Provider> */}

       

  

 

 
   

    

  </>

)
