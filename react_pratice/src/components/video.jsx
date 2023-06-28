import './Video.css';

function Video({ title, id, channel = "Coder Dost", views, time, verified }) {


    return (
        <>
            <div className='container'>
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel} {verified && '✅'} </div>
                {/* verified wala aage tabhi jayega if it is true */}
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
            </div>
        </>
    );
}

export default Video;