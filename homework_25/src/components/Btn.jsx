import { Component } from "react";

class Btn extends Component {
  render() {
    return (
      <button onClick={this.props.showResult} className=" btn btn-success mt-5">
        Show Result
      </button>
    );
  }
}
export default Btn;
