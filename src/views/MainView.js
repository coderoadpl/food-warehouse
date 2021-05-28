import React from 'react';
import AppContext from "../context/context";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import List from "../components/organisms/List";
import MainTemplate from "../components/templates/MainTemplate";

// const ViewWrapper = styled.div`
//      //width: 400px;
//      height: 600px;
//      margin: 0 auto;
//      display: flex;
//      flex-direction: column;
//
//      @media (max-width: ${({theme}) => theme.mobile}) {
//         width: 100vw;
//      }
// `;

const Heading = styled.h1`
     padding: 10px;
     color: ${({theme}) => theme.colors.blue};
     text-align: center;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     margin: 0 auto;
     width: 75vw;
     @media (max-width: ${({theme}) => theme.mobile}) {
        padding: 9rem 0 1rem;
        font-size: 26px;
        width: 100vw;
     }
`;

const MainView = ({match}) => {
    const parameter = match.params.parameter;
    return (<AppContext.Consumer>
            {(context) => {
                let newFoodList = []
                if (parameter === "all") {
                    newFoodList = context.foodList
                } else {
                    newFoodList = context.foodList.filter(item => item.category === parameter);
                }
                return (
                    <MainTemplate>
                        <Heading>
                            <FormattedMessage id="what in inventory"/>
                        </Heading>
                        <List
                            items={newFoodList}
                            deleteItem={context.deleteItem}
                            decreaseQuantity={context.decreaseQuantity}
                            increaseQuantity={context.increaseQuantity}
                            editName={context.editName}
                            editItem={context.editItem}
                            toEdit={true}
                            shop={true}
                            parameter={parameter}
                        />
                    </MainTemplate>
                )
            }
            }
        </AppContext.Consumer>
    )
};

export default MainView