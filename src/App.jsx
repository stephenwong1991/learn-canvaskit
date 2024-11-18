import useInitCanvaskitConfig from './canvaskit';
import './App.css';

function App() {
  useInitCanvaskitConfig();

  return (
    <div className="container">
      <canvas id="canvas" width="800" height="500"></canvas>
    </div>
  );
}

export default App;
