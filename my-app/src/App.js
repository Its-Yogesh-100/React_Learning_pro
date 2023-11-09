import Video from './components/Video'
import './App.css'

function App(){

  return(
    <div className="App">
      <div>
      <Video  title="React Js" views="10k" time="1 year ago" ></Video>    
      <Video  title="Nodee js" views="100k" time="2 year ago"></Video>    
    </div>
    </div>
  );
}

export default App;