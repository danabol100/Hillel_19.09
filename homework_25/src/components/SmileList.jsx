import { Component } from "react";

import SmileItem from "./SmileItem";


class SmileList extends Component {
  
  

    render() {
      const {smiles, onVote}= this.props;
        return <ul className="list-group d-flex flex-row justify-content-between gap-3">
             {smiles.map(smile =>(
            <SmileItem 
            key= {smile.id}
            icon = {smile.icon}
            votes = {smile.votes} 
            onVote={() => onVote(smile.id)}/>
        ))}
        </ul>
    }
}
export default SmileList