import Video from './components/Video'
import './App.css'
import videos  from './data/data';
import PlayButton from './components/PlayButton';


function App(){

  // let obj={

  //   title:"MongoDB tutorial",
  //   channel:"coder dost",
  //   views:"999k",
  //   time:"1 year ago",
  //   verified:true

  // };


  // const c="coder dost";

  return(

    <div className="App">
      <div>
      {/* <Video  title="React Js" views="10k" time="1 year ago" channel={c} verified={false} ></Video>     */}
    
      {
        videos.map(video=>
          <Video  title={video.title} views={video.views} time={video.time} channel={video.channel} verified={video.verified}></Video>

        )
      }
      {/* <Video {...obj}></Video>  */}
    </div>

    <div style={{clear:'both'}}>
    <PlayButton message="play re" onPlay={()=>console.log("play")} onPause={()=>console.log("Pause")}> play </PlayButton>
    {/* <PlayButton  message="pause re" onPlay={()=>alert("paused ")}>pause</PlayButton> */}
    </div>
        
    </div>
    
  );
}

export default App;