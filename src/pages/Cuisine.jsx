import { React, useEffect, useState  } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`
        );

        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])

    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <Link to={'/recipe/' + item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                );
            })}
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-grap: 3rem;
`;

const Card = styled.div`
    margin: 0.5rem;

    img {
        width: 100%;
        border-radius: 1rem;
    }

    a {
        text-decotarion: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;