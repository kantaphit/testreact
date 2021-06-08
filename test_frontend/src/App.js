import React from "react";

class App extends React.Component {
  state = {
    txt: "Click Button",
  };

  onClickButton = (e) => {
    const textGreeting = e.target.innerText;
    this.setState({ txt: textGreeting });
  };

  render() {
    return (
      <div style={{ textAlign: "center", margin: "8px" }}>
        <h1>{this.state.txt}</h1>
        <button className="greeting-button" onClick={this.onClickButton}>
          Good Morning
        </button>
        <button className="greeting-button" onClick={this.onClickButton}>
          Good Afternoon
        </button>
        <button className="greeting-button" onClick={this.onClickButton}>
          Good Night
        </button>
        <button className="dont-click-me">Don’t Click Me</button>
      </div>
    );
  }
}
export default App;
