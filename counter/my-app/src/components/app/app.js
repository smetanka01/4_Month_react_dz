import React from "react";

import Counter from "../counter/counter";

class App extends React.Component{
    state = {
        showCounter: true
    }
    onToggleCounter = () => {
        this.setState((oldState) => {
            return{
                showCounter: !oldState.showCounter
            }
        })
    }

    render() {
        const content = this.state.showCounter ? <Counter /> : null
        return (
            <>
                {content}
                <button onClick={this.onToggleCounter}>Toggle counter</button>
            </>
        )
    }

}

export default App