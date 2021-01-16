import React from 'react';
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.onTermSubmit('Tallinn')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search/', {
            params: {
                q: term,
            }
        });

        this.setState({
            selectedVideo: response.data.items[0],
            videos: response.data.items,
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className={"youtube-test ui container"}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className={"ui grid"}>
                    <div className="ui row">
                        <div className={"eleven wide column"}>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className={"five wide column"}>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
