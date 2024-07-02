import { ThemeProvider } from "styled-components"
import GlobalStyles from "./assets/styles/global-styles"
import { UserContextProvider } from "./context/user"
import Router from "./routes";
import { light } from "./assets/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
