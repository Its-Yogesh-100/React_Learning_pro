import Video from './components/Video'
import './App.css'



function App(){

  // let obj={

  //   title:"MongoDB tutorial",
  //   channel:"coder dost",
  //   views:"999k",
  //   time:"1 year ago",
  //   verified:true

  // };

    let Videos=[{

    title:"Node js",
    channel:"coder dost",
    views:"9k",
    time:"1 year ago",
    verified:true

  },{

    title:"Mongo DB ",
    channel:"coder dost",
    views:"999k",
    time:"1 year ago",
    verified:false

  },{

    title:"TypeScript",
    channel:"coder dost",
    views:"1M",
    time:"2 year ago",
    verified:true

  }];

  

  // const c="coder dost";

  return(

    <div className="App">
      <div>
      {/* <Video  title="React Js" views="10k" time="1 year ago" channel={c} verified={false} ></Video>     */}
    
      {
        Videos.map(video=>
          <Video  title={video.title} views={video.views} time={video.time} channel={video.channel} verified={video.verified}></Video>

        )
      }
          
    
    
      {/* <Video {...obj}></Video>  */}
    </div>

  

    </div>
    
  );
}

export default App;