import './Video.css';

function Video() {

    let topic="React JS"
    let bg='dark';

    return (
        <>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson" />

            <div className={bg}>{topic} Tutorial</div>


        </>

    );
}
export default Video;
