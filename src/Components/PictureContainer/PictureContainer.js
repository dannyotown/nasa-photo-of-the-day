import React from "react";
import styled from 'styled-components';

const BodyContain = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 50%;
    background: white;  
`;

const PicBox = styled.div`
    margin: 2% 0% 2% 0%; 
`;

const MainPic = styled.img`
    width: 60%;
    height: auto;
    border-radius: 5px;
`;

const InfoBox = styled.div`
    margin-left: 20%;
`;

const PictureTitle = styled.div`
    text-align: left;
`;

const Paragraph = styled.div`
    text-align: left;
    margin: 1.5% 25% 3% 0%;
    line-height: 25px;
`;

const HR = styled.hr`
    margin: 2% 25% 0% 0% ;
`;




export function Body(props) {
    return (
        <BodyContain>
            <PicBox>
                <MainPic src={props.pic} alt="Random Planet"></MainPic>
            </PicBox>
            <InfoBox>
                <PictureTitle>
                    <h2>{props.title}</h2>
                </PictureTitle>
                <HR></HR>
                <Paragraph>
                    {props.body}
                </Paragraph>
            </InfoBox>
        </BodyContain>
    );
}