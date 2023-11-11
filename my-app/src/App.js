import Video from './components/Video'
import './App.css'
import Pk from './ik/pk'


function App(){

  let obj={
    title:"MongoDB tutorial",
    channel:"coder dost",
    views:"999k",
    time:"1 year ago"

  };

  const c="coder dost";

  return(
    <div className="App">
      <div>
      <Video  title="React Js" views="10k" time="1 year ago" channel={c} ></Video>    
      <Video  title="Nodee js" views="100k" time="2 year ago" channel={c}></Video>    
      <Video {...obj}></Video> 
    </div>

    

    <Pk kite="firangi"></Pk>
      

    </div>
    
  );
}

export default App;