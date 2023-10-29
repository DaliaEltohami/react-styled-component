import Body from "./components/Body";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles></GlobalStyles>
        <Header></Header>
        <Body></Body>
      </>
    </ThemeProvider>
  );
}

export default App;
