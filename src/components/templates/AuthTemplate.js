import React from 'react';
import styled from "styled-components";

const SecurityContainer = styled.div`
        align-items: center;
        margin: 0 auto;
        width: 60vw;ó
        text-align: center;
        background-color: ${({theme}) => theme.colors.yellow};
        border-radius: 10px;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: ${({theme}) => theme.mobile}) {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
        }
`;

const AuthTemplate = ({children}) => (
    <SecurityContainer>
        {children}
    </SecurityContainer>
);

export default AuthTemplate;