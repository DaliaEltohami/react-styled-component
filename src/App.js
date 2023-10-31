import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles></GlobalStyles>
        <Header></Header>
        <Container>
          {content.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </Container>
        <Footer></Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
