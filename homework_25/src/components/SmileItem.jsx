import { Component } from "react";

class SmileItem extends Component {
  render() {
    const { icon, votes, onVote } = this.props;

    return (
      <li className=" align-items-center d-flex gap-1" onClick={onVote}>
        <img src={icon} alt="smile" width="60" />

        <p className=" align-content-center">{votes}</p>
      </li>
    );
  }
}

export default SmileItem;
