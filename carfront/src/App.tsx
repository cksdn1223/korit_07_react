import { AppBar, Toolbar, Typography, Container, CssBaseline } from "@mui/material"
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Carlist from "./components/Carlist";
import AuthContext from "./AuthContext";
import { useContext, useState } from "react";
import Login from "./Login";
const queryClient = new QueryClient();

function App() {
  const [ isAuthenticated, setAuth ] = useState(false)
  const value = {
    isAuthenticated: isAuthenticated,
    setAuth: setAuth
  }
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={value}>
          {isAuthenticated ? <Carlist /> : <Login />}
        </AuthContext.Provider>
      </QueryClientProvider>
    </Container>
  );
}

export default App;