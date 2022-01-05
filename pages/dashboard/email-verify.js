import Head from 'next/head'
import React, {Component} from "react";
import ProtectedRoute from "../../components/protected-route";
import SideBar from "../../components/SideBar";
import styled from "styled-components";

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

                <SideBar/>

                <Alert>
                    <center>
                        <AlertText>This page is not done yet </AlertText>
                    </center>
                </Alert>

            </>
        )
    }
}

const Alert = styled.div`
  top: 0;
  background-color: #21517D;
  padding: 2em;
  position: fixed;
  width: 100%;
  align-items: center;
`

const AlertText = styled.h1`
  color: #ffffff;
  font-size: 20px;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    margin-left: 25%;
  }
`