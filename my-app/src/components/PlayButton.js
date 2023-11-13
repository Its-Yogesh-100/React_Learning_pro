import './PlayButton.css'

function PlayButton({message,children,onPlay,onPause}){

    let status=true;
    function handleClick(){

        if(status)onPause();
        else onPlay();
  
        status=!status;
    }

    return(

        <>
        <button onClick={handleClick}>{children} :{status?'>':'||'}</button>
       
        </>


    )
}

export default PlayButton;