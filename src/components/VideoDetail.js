import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return "Loading!";
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	const videoSnippet = video.snippet;
	const videoTitle = videoSnippet.title;
	const videoDescription = videoSnippet.description;

	return (
		<div>
			<div className="ui embed">
				<iframe title={videoTitle} src={videoSrc}></iframe>
			</div>
			<div className={"ui segment"}>
				<h4 className="ui header">{videoTitle}</h4>
				<p>{videoDescription}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
