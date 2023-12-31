import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        try {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`
            );
            const recipes = await api.json();
            setSearchedRecipes(recipes.results);
        } catch {
            console.log('Error data');
        }
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>  
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-grap: 3rem;
`;

const Card = styled.div`
    margin: 0.5rem;

    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decotarion: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched;