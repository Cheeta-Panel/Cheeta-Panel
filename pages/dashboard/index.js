import Head from 'next/head'
import React, {Component} from "react";
import styled from "styled-components";
import ProtectedRoute from "../../components/protected-route";
import SideBar from "../../components/SideBar";
import toast from "react-hot-toast";
import * as api from "../../util/api";
import crypto from "crypto";

export default class Home extends Component {

    state = {
        user: null,
        twofa: false
    }

    async componentDidMount() {
        const url = new URLSearchParams(window.location.search);
        const code = url.get("success");
        const {history} = this.props;

        if (code === "created_monitor_dash") {
            setTimeout(() => {
                toast.success(`Successfully created a new Dashboard, enjoy!`);
                window.history.replaceState(null, '', '/panel/')
            }, 300)
        }

        this.handleEmail = this.handleEmail.bind(this);
        if (localStorage.getItem("user")) {
            try {
                var mykey = crypto.createDecipher(
                    "aes-128-cbc",
                    '4448748718787187187231721g71e7v1df8gd1g7dgdf1gd7g1dfg1dfg71dffg1dg1d8fg1d71'
                );
                var mystr = mykey.update(localStorage.getItem("user"), "hex", "utf8");
                mystr += mykey.final("utf8");
                let user = JSON.parse(mystr);
                console.log(user)
                let twofa = user['2fa'];

                this.setState({user: user, twofa: twofa});
            } catch (e) {
                console.log(e)
                toast.error(`${e}`)
            }
        }
    }

    async handleEmail() {
        const toastId = toast.loading('Sending request...');
        try {
            let res = await api.sendEmail(this.state.user.email);
            if (res.message === "OK") {
                toast.success("Email has been sent, check your inbox!", {
                    id: toastId,
                })
            }

            if (res.message === "already done") {
                toast.error("You are already verified, please refresh.", {
                    id: toastId,
                })
            }

            if (res.error) {
                toast.error("API Error: " + res.message, {
                    id: toastId,
                })
            }
        } catch (e) {
            console.log(e)
            toast.error("API Error", {
                id: toastId,
            })
        }
    }


    render() {
        const {user, twofa} = this.state;
        return (
            <>
                <ProtectedRoute/>

                <Head>
                    <title>Cheetapanel | Panel</title>
                    <meta name="description" content="Cheetapanel File Host - User Dashboard"/>
                    <link rel="icon" href="/favicon.ico"/>

                </Head>

                <SideBar/>

                {user && user.isEmailVerified ? (
                    <>
                        {user && twofa ? (
                            <></>
                        ) : (
                            <Alert>
                                <center>
                                    <AlertText>You still need add 2FA to your account before you can access more
                                        options. <AlertEmailSend onClick={() => {
                                            window.location.href = "/dashboard/setup-2fa"
                                        }}>Click here to add 2FA</AlertEmailSend> </AlertText>
                                </center>
                            </Alert>
                        )}
                    </>
                ) : (
                    <Alert>
                        <center>
                            <AlertText>You still need to verify your email address. Please check your
                                inbox. <AlertEmailSend onClick={() => {
                                    this.handleEmail()
                                }}>Click here to send again</AlertEmailSend> </AlertText>
                        </center>
                    </Alert>
                )}

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

const AlertEmailSend = styled.h1`
  color: #ffffff;
  font-size: 20px;
  display: inline;
  cursor: pointer;
  :hover {
    color: #cee;
  }`