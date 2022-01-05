import Head from 'next/head'
import React, {Component} from "react";
import Wave from "react-wavify";
import styled from "styled-components";
import {toast} from "react-hot-toast";
import NavBar from "../components/NavBar";

export default class Home extends Component {
    state = {
        loggedIn: false
    }

    async componentDidMount() {
        const {history} = this.props;
        const url = new URLSearchParams(window.location.search);
        const success = url.get("success");
        if (success === "logged_out") {
            setTimeout(() => {
                window.history.replaceState(null, '', '/')
                toast.success("You have been logged out!")
            }, 300)
        }

        const error = url.get("error");
        if(error === "token_expired") {
            setTimeout(() => {
                window.history.replaceState(null, '', '/')
                toast.error("You need to login again")
            }, 300)
        }


        if(localStorage.getItem("user")) {
            this.setState({loggedIn: true})
        }

    }

    render() {
        const {loggedIn} = this.state;
        return (
            <>
                <Head>
                    <title>Cheetapanel | Home</title>
                    <meta name="description" content="Astronomy File Host"/>
                    <link rel="icon" href="/favicon.ico"/>

                </Head>

                <NavBar/>

                <Content1>
                    <Title className={"title-plain"}>
                        Cheetapanel
                    </Title>
                    <Desc>
                        Simple Fast Panel
                    </Desc>
                        <Cube>
                            <Desc1>This site is in active development!</Desc1>
                        </Cube>
                </Content1>

                <WaveContainer>
                    <Wave
                        fill="#073763"
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
  background-color: #093053;
 // top: 0;
  position: absolute;
`;

const Cube = styled.div`
  background-color: #073763;
  width: 35%;
  padding: 2rem;
  --tw-bg-opacity: 1;
  border-radius: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-align: center;
  position: absolute;
  right: 840px;
  top: 170px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Desc = styled.p`
  font-size: 2rem;
  line-height: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 0.5rem;
`

const Desc1 = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 0.5rem;
`


const Title = styled.h1`
  color: #fff;
  font-size: 50px;
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