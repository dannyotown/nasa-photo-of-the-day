import React from "react";
import styled from 'styled-components';

const NavDiv = styled.div`
    width: 98%;
    height: 100px;
    background-color: #0B3D91;
    padding: 1%;
`;

const NavText = styled.h1`
    position: absolute;
    right: 0;
    margin-right: 5%;
    color: white;
`;

const RocketImg = styled.img`
    height: 100px;
    width: auto;
    position: absolute;
    left: 0;
    margin: 0% 0% 0% 2%;
`;




export function Header() {
    return (
        <NavDiv>
                <RocketImg src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png"></RocketImg>
                <NavText>NASA Photo Of The Day</NavText>
        </NavDiv>
    );
}
