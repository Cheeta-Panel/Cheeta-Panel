import React from "react";
import crypto from "crypto";
import toast from 'react-hot-toast';

export default class Button extends React.Component {
    state = {
        loggedIn: false
    }

    componentDidMount() {
        try {
            if (localStorage.getItem("user")) {
                this.setState({loggedIn: true});

                var mykey = crypto.createDecipher(
                    "aes-128-cbc",
                    '4448748718787187187231721g71e7v1df8gd1g7dgdf1gd7g1dfg1dfg71dffg1dg1d8fg1d71'
                );
                var mystr = mykey.update(localStorage.getItem("user"), "hex", "utf8");
                mystr += mykey.final("utf8");
                console.log(mykey)

                let info = JSON.parse(mystr);
                if (info) {
                    this.setState({loggedIn: true})
                }
            }
        } catch (e) {
            console.log(e);
            localStorage.removeItem("user");
            toast.error("You need to login again")
        }
    }

    render() {
        const {loggedIn} = this.state;
        return (
            <>
                {loggedIn ? (
                    <>
                        <a href={"/dashboard"}>
                            <button className="btn navbar-btn">
                                <i className="fas fa-sign-in-alt"/> panel
                            </button>
                        </a>
                    </>
                ) : (
                    <>
                        <a href={"/login"}>
                            <button className="btn navbar-btn">
                                <i className="fas fa-sign-in-alt"/> Sign In
                            </button>
                        </a>
                    </>
                )}
            </>
        );

    }
}