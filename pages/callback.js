import React, {Component} from "react";
import styled from "styled-components";
import * as api from "../util/api";
import crypto from "crypto";
import Head from "next/head";
import Wave from "react-wavify";
import Link from "next/link";

class Callback extends Component {
    state = {
        msg: "Awaiting Code...",
        to: "/dashboard",
        redirect: false,
        error: false
    }

    async componentDidMount() {

        let {to} = this.state;
        const url = new URLSearchParams(window.location.search);
        const code = url.get("code");
        if (!code) return window.location.href = "/?error=no_oauth_code";

        const state = url.get("state");
        if (state) {
            to = state;
        }

        if (code) {
            this.setState({msg: "Contacting Discord...", to});
        }

        await this.fetch()

        setInterval(async () => {

            if (localStorage.getItem("userAuthenticated")) {
                window.location.href = this.state.to;
                this.setState({redirect: true, msg: "Successfully logged in!"});
            } else {
                await this.fetch()
            }

        }, 2500);

    }

    async fetch() {
        const url = new URLSearchParams(window.location.search);
        const code = url.get("code");
        if (!code) return window.location.href = "/?error=no_oauth_code";

        try {
            let info = await api.user(code);
            if (info.error) {
                this.setState({msg: "An error Occurred", error: true});
            } else {

                var mykey = crypto.createCipher('aes-128-cbc', "4448748718787187187231721g71e7v1df8gd1g7dgdf1gd7g1dfg1dfg71dffg1dg1d8fg1d71");
                var mystr = mykey.update(JSON.stringify(info.data), 'utf8', 'hex')
                mystr += mykey.final('hex');

                localStorage.setItem("user", mystr);
                window.location.href = this.state.to;
                this.setState({msg: "Redirecting...", error: false});
            }
        } catch (e) {
            console.log(e)
            this.setState({msg: "An error Occurred", error: true});
        }

    }

    render() {
        const {msg, error} = this.state;
        return (
            <>
                <Head>
                    <title> Cheetapanel | Callback </title>
                </Head>

                <Content1>
                    <Title className={"title-plain"}>
                        Cheetapanel - Login
                    </Title>

                    <center>

                        <MSG>{msg}</MSG>


                        {error ? (
                            <>
                                <BackHome href={"/login"}>
                                    <BackHomeTxT>Try again</BackHomeTxT>
                                </BackHome></>
                        ) : (
                            <></>
                        )}

                    </center>

                </Content1>
                <br/>
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

export default Callback;

const Page = styled.div`

`


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
  width: 5%;
  margin: 5px;

  :hover {
    background-color: #093e70;
    cursor: pointer;
  }`

const MSG = styled(BackHomeTxT)`width: 15%`