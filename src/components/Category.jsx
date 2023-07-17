import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Category() {
    return(
        <List>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>

            <SLink  to={'/cuisine/American'}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>

            <SLink  to={'/cuisine/Thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>

            <SLink  to={'/cuisine/Japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </SLink>

            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>

            <SLink  to={'/cuisine/Thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover  {
    background: linear-gradient(to right, #f27121, #e94057);
    transform: scale(1);
  }

  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.3rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export default Category;