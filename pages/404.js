import Head from 'next/head'
import React, {Component} from "react";
import Wave from "react-wavify";
import styled from "styled-components";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default class Home extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Cheetapanel | 404</title>
                    <meta name="description" content="Astronomy File Host - Page not found"/>
                    <link rel="icon" href="/favicon.ico"/>

                </Head>


                <NavBar/>

                <Content1>
                    <Title className={"title-plain"}>
                        The page you are looking for could not be found
                    </Title>

                    <center>
                        <BackHome href={"/"}>
                            <BackHomeTxT>Go back</BackHomeTxT>
                        </BackHome>
                    </center>

                </Content1>


                <WaveContainer>
                    <Wave
                        fill="#21517D"
                        paused={false}
                        style={{height: 250}}
                        options={{
                            height: 20,
                            amplitude: 45,
                            speed: 0.15,
                            points: 4,
                        }}
                    />
                </WaveContainer>

            </>
        )
    }
}

const Content1 = styled.div`
  text-align: center;
  width: 100%;
  min-height: 35vh;
  background-color: #21517D;
  // top: 0;
  position: absolute;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 45px;
  font-weight: lighter;
  margin-top: 5%;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

const WaveContainer = styled.div`
  margin-top: 15%;
  transform: rotate(180deg) scaleX(-1);
`
const BackHome = styled(Link)``

const BackHomeTxT = styled.div`
  padding: 15px;
  display: block;
  background-color: #073763;
  color: white;
  text-align: center;
  position: static;
  border-radius: 15px;
  z-index: 100;
  width: 10%;
  margin: 15px;
  margin-bottom: 15px;

  :hover {
    background-color: #093e70;
    cursor: pointer;
  }`
