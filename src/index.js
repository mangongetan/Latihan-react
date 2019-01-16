import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinnerJS";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error:{this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="PLease accept location request" />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
