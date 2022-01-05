import Head from 'next/head'
import React, {Component} from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Discord from '../public/imgs/discord.png'


export default class pricing extends Component {

    state = {}

    async componentDidMount() {

    }

    render() {
        return (
            <>

                <NavBar/>

                <Head>
                    <title>AstroFiles | Dashboard - Edit</title>
                    <meta name="description" content="Astronomy File Host - User Dashboard - Settings"/>
                    <link rel="icon" href="/favicon.ico"/>

                </Head>
                <HomePage>
                    <CubeContainer>

                    </CubeContainer>
                </HomePage>


            </>
        )
    }
}

const HomePage = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 6rem;
`;

const CubeContainer = styled.div`
  background-color: #21517D;
  width: 50%;
  padding: 15rem;
  --tw-bg-opacity: 1;
  border-radius: 0.5rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-align: center;
  position: center;
  bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`

const Desc = styled.p`
  font-size: 2rem;
  line-height: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 0.5rem;
`