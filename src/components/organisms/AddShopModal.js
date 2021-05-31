import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import ItemForm from "./ItemForm";

const ModalWrapper = styled.div`
    padding: 70px 80px 50px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 60vw;
    //height: 90vh;
    background-color: white;
    box-shadow: 0 20px 40px -5px rgba(#1e58ff, .3);
    position: fixed;

`

const AddShopModal = () => (
    <ModalWrapper>
        <ItemForm/>
    </ModalWrapper>
);

export default AddShopModal;