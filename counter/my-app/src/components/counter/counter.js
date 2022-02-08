import React from 'react';

import ErrorCounter from "./ErrorCounter";
import Num from "../num/num";

class Counter extends React.Component {
    //Зарождение----------
    UNSAFE_componentWillMount() {
        console.log('WILL MOUNT')
    }

    componentDidMount() {
        // this.my_interval = setInterval(() => {
        //     console.log('>>>>>> :)')
        // }, 2000)

        console.log('DID MOUNT')
    }


    //Обновление------------
    UNSAFE_componentWillUpdate() {
        console.log('WILL UPDATE')
    }

    shouldComponentUpdate(newProps, newState) {
        return newState.count !== this.state.count;
    }

    componentDidUpdate() {
        console.log('DID UPDATE')
    }


    //Удаление----------
    componentWillUnmount() {
        // clearInterval(this.my_interval)

        console.log('WILL UNMOUNT')
    }

    state = {
        count: 0
    }

    onIncrement = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count + 1
            }
        })
    }
    onDecrement = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count - 1
            }
        })
    }
    reset = () => {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    // num = () => {
    //     if (this.state.count < 0) {
    //         throw new Error('неккоректный счет :/')
    //     } else {
    //         return this.state.count
    //     }
    // }

    render() {
        console.log('RENDER')
        return (
            <div className='container my-4'>
                <div className="card text-center my-5">
                    <div className="card-body">
                        <h1>Counter App</h1>

                        <ErrorCounter state={this.state.count}>
                            <Num state={this.state.count}/>
                        </ErrorCounter>

                        <button className="btn btn-success mx-3" onClick={this.onIncrement}>Increment</button>
                        <button className="btn btn-danger mx-3" onClick={this.onDecrement}>Decrement</button>
                        <button className="btn btn-secondary mx-3" onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;