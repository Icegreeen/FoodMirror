import React, { useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe(){
    const [ details, setDetails ] = useState({});
    const [ activeTab, setActiveTab] = useState("instructions");
    let params = useParams();

    const fetchDetails = useCallback(async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
    }, [params.name]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails])

    return(
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button 
                    className={activeTab === 'instructions' ? 'active' : ''} 
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </Button>

                <Button  
                    className={activeTab === 'ingredients' ? 'active' : ''}  
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>

                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}

                {activeTab === 'ingredients' && (
                    <ul>
                        {details?.extendedIngredients && details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;

  img {
    border-radius: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    margin-top: 1rem;

    img {
      width: 100%;
      max-width: 300px;
      margin-bottom: 2rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  border-radius: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Info = styled.div`
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Recipe;
