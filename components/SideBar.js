import React, {Component} from "react";
import styled from "styled-components";
import {FaCog, FaHome, FaUserCog} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi"
import TK from "./TokenCheck";
import crypto from "crypto";

export default class Panel_SideBar extends Component {
    state = {
        loggedIn: false,
        page: null,
        admin: false,
        staff: false
    }

    componentDidMount() {
        this.setState({page: window.location.pathname});

        var mykey = crypto.createDecipher('aes-128-cbc', '4448748718787187187231721g71e7v1df8gd1g7dgdf1gd7g1dfg1dfg71dffg1dg1d8fg1d71');
        var mystr = mykey.update(localStorage.getItem("user"), 'hex', 'utf8')
        mystr += mykey.final('utf8');

        let info = JSON.parse(mystr);

        if (info.admin) {
            this.setState({admin: true});
        }

        if (info.staff) {
            this.setState({staff: true});
        }

    }

    render() {
        const {page, admin} = this.state;
        return (
            <>
                <TK/>
                <Container>
                    <br/><br/>
                    <NavItems>

                        {page === "/dashboard" ? (
                            <>
                                <a href={"#"} data-tip="Home Page" className={"NavItem-Active"}> <FaHome
                                    className={"NavIcon-Active"}/> </a>
                            </>
                        ) : (
                            <>
                                <a href={"/dashboard"} data-tip="Home Page" className={"NavItem"}> <FaHome
                                    className={"NavIcon"}/> </a>
                            </>
                        )}

                        {page === "/dashboard/edit" ? (
                            <>
                                <a href={"#"} data-tip="Home Page" className={"NavItem-Active"}> <FaCog
                                    className={"NavIcon-Active"}/> </a>
                            </>
                        ) : (
                            <>
                                <a href={"/dashboard/edit"} data-tip="Home Page" className={"NavItem"}> <FaCog
                                    className={"NavIcon"}/> </a>
                            </>
                        )}

                        {admin && <>
                            <a href={"/admin"} data-tip="Home Page" className={"NavItem"}> <FaUserCog
                                className={"NavIcon"}/> </a>
                        </>}

                        <br/>
                        <hr/>
                        <br/>

                        <a onClick={e => {
                            e.preventDefault();
                            localStorage.clear();
                            window.location.href = "/?success=logged_out";
                        }} data-tip="Logout" className={"NavItem"}> <BiLogOut
                            className={"NavIcon"}/> </a>

                    </NavItems>

                </Container>
            </>
        )
    }
}

const Container = styled.div`
  background-color: #073763;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  z-index: 1000;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  border-radius: 5px;
  transition: background-color 0.2s;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 253, 253, 0.1);
    color: #ffff !important;
  }
`

const NavHr = styled.hr`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: 0;
  border-top: 2px solid rgb(116, 116, 117);
  padding: 0;
`