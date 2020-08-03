import React, { Component, ChangeEvent } from "react";
import { Hello } from './Hello';
import "./Hello.css";

interface Props {
    name: string;
}

interface State {
    value: string;
}

class Page extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state: State = {
        value: '',
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({value: e.target.value});
    }

    componentDidMount() {
        console.log("did Mount!");
    }

    componentDidUpdate() {
        console.log("데이터 바꼇네 ㅋㅋ");
    }

    render() {
        const placeHolder: string = "Hello!";

        return (
            <div>
                <Hello name="HelloGuy" age={24} />
                <div>{this.state.value}</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={placeHolder} />
            </div>
        );
    }
}

export default Page