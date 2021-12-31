import React from "react";
import styled from "styled-components";
import ErrorSVG from "../../../../OneDrive/Documents/Bot Hosting Panel/src/icons/Error.svg";
import Helmet from "react-helmet";

export default function login() {
        return (
            <>
                <Helmet>
                    <title> Cheeta Panel | Login </title>
                </Helmet>

                <HomePage>
                    <Cube>
                        <center><Img alt={"could not load"} src={ErrorSVG} draggable={false}/></center>

                        <Title>Login Below</Title>
                        <button>You are not authorized to use this site.</button>
                    </Cube>
                </HomePage>

            </>
        )
}



const HomePage = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 10rem;
`;

const Cube = styled.div`
  background-color: rgb(47, 49, 54);
  width: 50%;
  padding: 3rem;
  --tw-bg-opacity: 1;
  border-radius: 0.5rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-align: center;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`

const Title = styled.h2`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-top: -15px;
`

const Desc = styled.p`
  font-size: 1.5rem;
  line-height: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`

const Img = styled.img`
  width: 25%;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`