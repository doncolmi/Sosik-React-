import React, { Component, ChangeEvent } from "react";
import { Hello } from "./Hello";
import "./Hello.css";

interface Props {
  name: string;
}

interface State {
  temp: string;
}

class Page extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state: State = {
    temp: "",
  };

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ temp: e.target.value });
  }

  componentDidMount() {
    console.log("did Mount!");
  }

  componentDidUpdate() {
    console.log("데이터 바꼇네 ㅋㅋ");
  }

  render() {
    const placeHolder: string = "숫자만 입력해주세요!";

    return (
      <div>
        <Hello name="HelloGuy" age={24} />
        <div>{this.state.temp}</div>
        <input
          type="text"
          value={this.state.temp}
          onChange={this.handleChange}
          placeholder={placeHolder}
        />
      </div>
    );
  }
}

export default Page;
