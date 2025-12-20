import { Component} from 'react'
import SmileList from './components/SmileList'
import Btn from './components/Btn'




class App extends Component {
     constructor(props){
        super(props);
    
        this.state = {
    smiles: [
      { id: 1, icon: "/src/assets/smile-1.png", votes: 0 },
      { id: 2, icon: "/src/assets/smile-2.jpg", votes: 0 },
      { id: 3, icon: "/src/assets/smile-3.jpg", votes: 0 },
      { id: 4, icon: "/src/assets/smile-4.jpg", votes: 0 },
      { id: 5, icon: "/src/assets/smile-5.png", votes: 0 },
    ],
    winner:null
  };
  this.showResult = this.showResult.bind(this);
   this.vote = this.vote.bind(this);
   this.resetVotes = this.resetVotes.bind(this);
  
   }
    vote(id){
    this.setState({
      smiles: this.state.smiles.map(smile=>{
        if (smile.id === id)
          return{
        ...smile, votes: smile.votes +1
      }
      else {return smile}
      
      } )
        })
    };
      showResult = ()=>{
        const winner = this.state.smiles.reduce((max, cur)=>
        cur.votes > max.votes ? cur : max);

        if (winner.votes === 0) return;

        this.setState({winner});
      }

      resetVotes = () =>{
        const resetSmiles = this.state.smiles.map(smile =>({
          ...smile,
          votes:0
        }));
        this.setState({
          smiles: resetSmiles,
          winner: null
        })
      };
     


render(){return (
  <div className='container text-center mt-5 mb-5'>
    <h1 className='mt-5 mb-5'>Голосування за найкращий смайлик</h1>
    <SmileList smiles={this.state.smiles} onVote={this.vote}/>
    <Btn showResult={this.showResult} />
    <h3 className='mt-4 mb-4'>Рузультати голосування</h3>

    {this.state.winner && (
      <div>
        <h4>Переможець</h4>
        <img src={this.state.winner.icon} width="60" />
        <p>Кількість голосів: {this.state.winner.votes}</p>
        <button className='btn btn-danger' onClick={this.resetVotes}>Очистити</button>
      </div>
    )}
     </div>

     
  )};


}

export default App
