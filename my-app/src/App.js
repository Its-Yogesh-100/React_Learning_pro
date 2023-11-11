import Video from './components/Video'
import './App.css'



function App(){

  let obj={

    title:"MongoDB tutorial",
    channel:"coder dost",
    views:"999k",
    time:"1 year ago",
    verified:true

  };

  const c="coder dost";

  return(

    <div className="App">
      <div>
      <Video  title="React Js" views="10k" time="1 year ago" channel={c} verified={false} ></Video>    
      <Video  title="Nodee js" views="100k" time="2 year ago" channel={c} verified={true}></Video>    
      <Video {...obj}></Video> 
    </div>

  

    </div>
    
  );
}

export default App;