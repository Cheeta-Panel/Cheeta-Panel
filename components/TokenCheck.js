import {Component} from "react";
import crypto from "crypto";
import * as api from "../util/api";
import toast from 'react-hot-toast';

export default class TokenChecker extends Component {
    state = {
        user: null
    }

    async componentDidMount() {
        if (localStorage.getItem("user")) {
            try {
                this.setState({loggedIn: true});

                var mykey = crypto.createDecipher('aes-128-cbc', '4448748718787187187231721g71e7v1df8gd1g7dgdf1gd7g1dfg1dfg71dffg1dg1d8fg1d71');
                var mystr = mykey.update(localStorage.getItem("user"), 'hex', 'utf8')
                mystr += mykey.final('utf8');

                let info = JSON.parse(mystr);

                if (!info.token) {
                    localStorage.clear()
                    toast.error("You need to login again")
                    window.location.href = '/?error=no_token'
                }
                let res = await api.tokenCheck(info.email, info.token);
                if (res.error) {
                    if (res.message === "expired token" || "missing required headers auth") {
                        localStorage.clear()
                        toast.error("You need to login again");
                        window.location.href = '/?error=token_expired'
                    }
                }
            } catch (e) {
                toast.error(`${e}`);
                window.location.href = '/'
                localStorage.clear()
            }

        } else {
            window.location.href = '/'
        }
    }

    render() {
        return (
            <>
            </>
        )
    }

}