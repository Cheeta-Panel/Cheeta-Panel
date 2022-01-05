import Head from 'next/head'
import React, {Component} from "react";
import styled from "styled-components";
import ProtectedRoute from "../../components/protected-route";
import SideBar from "../../components/SideBar";

export default class Dashboard_Edit extends Component {

    state = {

    }

    async componentDidMount() {

    }

    render() {
        return (
            <>
                <ProtectedRoute/>

                <Head>
                    <title>Cheetapanel | Dashboard - Edit</title>
                    <meta name="description" content="Cheetapanel - User Panel - Settings"/>
                    <link rel="icon" href="/favicon.ico"/>

                </Head>
                <HomePage>
                    <CubeContainer>

                    </CubeContainer>
                </HomePage>

                <SideBar/>

            </>
        )
    }
}

const HomePage = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 10rem;
`;

const CubeContainer = styled.div`
  background-color: #21517D;
  width: 50%;
  padding: 20rem;
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
