import Head from 'next/head'
import React, {Component} from "react";
import Wave from "react-wavify";
import styled from "styled-components";
import * as api from "../util/api";
import {toast} from "react-hot-toast";

export default class Home extends Component {

    async componentDidMount() {
        if (process.browser) {
            if (!localStorage.getItem("user")) {
                window.location.href = api.getOauth()
            } else {
                window.location.href = "/dashboard"
            }
        }
    }

    render() {

        return (
            <>
                <Head>
                    <title>Cheetapanel | Login</title>
                    <meta name="description" content="Astronomy File Host - Redirect to Discord"/>
                    <link rel="icon" href="/favicon.ico"/>

                </Head>


                <Nav>

                </Nav>

                <Content1>
                    <Title className={"title-plain"}>
                        Welcome to, Cheetapanel
                    </Title>

                    <Desc>
                        Simple Fast Panel for hosting discord bots and gameservers
                    </Desc>
                    <br/>
                    <center><Alert>
                        <AlertText>This site is in active development!</AlertText>
                    </Alert></center>

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

const Nav = styled.div``

const Content1 = styled.div`
  text-align: center;
  width: 100%;
  min-height: 40vh;
  background-color: #21517D;
  top: 0;
  position: absolute;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 45px;
  font-weight: lighter;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

const WaveContainer = styled.div`
  transform: scaleX(-1);
  bottom: 0;
  width: 100%;
  left: 0;
  position: absolute;
  height: 27%;
`

const Alert = styled.div`
  background-color: #073763;
  padding: 2em;
  width: 35%;
  align-items: center;
  position: inherit;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

const Desc = styled.p`
  font-size: 2rem;
  line-height: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 0.5rem;
  margin: 10px 0;
`

const AlertText = styled.h1`
  color: #ffffff;
  font-size: 20px;
`