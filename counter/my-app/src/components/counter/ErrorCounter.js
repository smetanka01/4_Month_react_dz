import React from 'react';

class ErrorCounter extends React.Component{
    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>{this.props.state}</h2>
                    <p>{this.state.error && this.state.error.toString()}</p>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorCounter