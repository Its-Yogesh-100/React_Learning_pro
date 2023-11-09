import './Video.css';

function Video({title,bgColor}) {

    

   
    let bg='dark';

    return (
        <>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson" />

            <div className={bg} style={{backgroundColor:bgColor}}>{title}</div>


        </>

    );
}
export default Video;
