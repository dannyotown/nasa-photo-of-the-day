import React from "react";
import styled from 'styled-components';

const navBarDiv = styled.div`
    width: 98%;
    height: 100px;
    backgroundColor: 100px;
    padding: 1%;
`

const navText = styled.h1`
    position: absolute;
    right: 0;
    marginRight: 5%;
    color: white;
`

const rocketImg = styled.img`
    height: '100px';
    width: 'auto';
    position: 'absolute';
    left: '0';
    margin: '0% 0% 0% 2%;
`




export function Header() {
    return (
        <navBarDiv>
                <rocketImg src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png"></rocketImg>
                <navText>NASA Photo Of The Day</navText>
        </navBarDiv>
    );
}
