import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
          <BrowserRouter>
            <Nav>
              <GiKnifeFork />
              <Logo to={"/"}></Logo>
              <h4 to={"/"}>FoodMirror</h4>
            </Nav>
            <Search />
            <Category />
            <Pages />
            <Footer />
          </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
    
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h4 {
    margin-left: 1rem;
    cursor: pointer;
  }

  svg {
    font-size: 3rem;
  }
`;

export default App;
