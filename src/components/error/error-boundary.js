import React from "react";
import Error from "./error";

export default class ErrorBoundary extends React.Component {
    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.error) {
            return <Error/>;
        }
        return this.props.children;
    }

}