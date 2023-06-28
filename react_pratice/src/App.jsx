
import Video from './components/video';
import videos from './data/data';
import Counter from './components/counter';
import "./App.css";
function App() {

  return (
    <div className="App">
      <div>
        <Counter />
      </div>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>)
      }



    </div>
  );
}

export default App;
