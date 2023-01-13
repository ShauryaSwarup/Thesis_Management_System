import React, { useState } from "react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ChakraProvider>
        <Component {...pageProps} AuthContext={AuthContext} />
      </ChakraProvider>
    </AuthContext.Provider>
  );
}
