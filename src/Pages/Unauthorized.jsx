import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnauthorizedContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
    text-align: center;
`;

const Content = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h1 {
        color: #e74c3c;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    }

    a {
        color: #0984e3;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Unauthorized = () => {
    return (
        <UnauthorizedContainer>
            <Content>
                <h1>401 - Unauthorized</h1>
                <p>Sorry, you don't have permission to access this page.</p>
                <Link to="/">Return to Home</Link>
            </Content>
        </UnauthorizedContainer>
    );
};

export default Unauthorized; 