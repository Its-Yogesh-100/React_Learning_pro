import './Video.css';

function Video(props) {

    

   
    let bg='dark';

    return (
        <>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson" />

            <div className={bg}>{props.title}</div>


        </>

    );
}
export default Video;
