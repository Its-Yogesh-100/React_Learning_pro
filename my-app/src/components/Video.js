import './Video.css';

function Video({ title, channel, views, time ,likes="1k"}) {

    let verified=true;
    let channeljsk;

    if(verified)
    {
        channeljsk = <div className="channel">  {channel} ✅</div>;
    }
    else
    {
        channeljsk= <div className="channel">{channel} </div>
    } 

    return (
        <>
            <div className="container">

                <div className="pic">
                    <img
                        src="https://i.imgur.com/MK3eW3As.jpg"
                        alt="Katherine Johnson" />
                </div>

                <div className="title">
                    {title}
                </div>

               {channeljsk}

                <div className="views">
                    {views} views<span>.</span>{time}
                </div>

                <div className="channel">
                    likes {likes}
                </div>

            </div>
        </>
    );
}
export default Video;
