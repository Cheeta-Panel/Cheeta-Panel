import React, {Component} from "react";

export default class ProtectedRoute extends Component {

    componentDidMount() {
        if (!localStorage.getItem("user")) {
            window.location.href = "/login?error=missing_token"
        }
    }

    render() {
        return (
            <>

            </>
        )
    }
}