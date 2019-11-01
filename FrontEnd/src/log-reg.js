import React from "react";
import "./LogReg.scss";
import Login from "./components/login/login";
import Register from "./components/login/register";

class LogReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // single state of true
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    // generate change on state to display right or left side
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="box" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login numero={this.props.numero} user_id={this.props.user_id} inputChange={this.props.inputChange} onSubmitClick={this.props.onSubmitClick} containerRef={ref => (this.current = ref)} errorMessage={this.props.errorMessage} redirect={this.props.redirect}/>
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} inputChange={this.props.inputChange}
              onClickRegister={this.props.onClickRegister} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  // props by button
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LogReg;
