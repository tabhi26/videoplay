const PlayVideo = ({video}) => {
    return (
        <>
        {video.length && 
        
            video[0].videos.map((video) => {
            return (
                <video
                key={video}
                preload="auto"
                width="320"
                height="240"
                controls
                >
                <source src={`${process.env.REACT_APP_BASE_URL}${video}`} />
                ;Your browser does not support the video tag.
                </video>
            );
            })}
        </>
    )
}

export default PlayVideo;