import * as React from 'react';
import InitCanvasKit from 'canvaskit-wasm'; 
import './App.css';

function App() {
  React.useEffect(() => {
    InitCanvasKit({
      locateFile: (file) => '/node_modules/canvaskit-wasm/bin/'+file,
    }).then((CanvasKit) => {
      // Code goes here using CanvasKit
      const surface = CanvasKit.MakeCanvasSurface('foo');
      const paint = new CanvasKit.Paint();
      paint.setColor(CanvasKit.Color4f(0.9, 0, 0, 1.0));
      paint.setStyle(CanvasKit.PaintStyle.Stroke);
      paint.setAntiAlias(true);
      const rr = CanvasKit.RRectXY(CanvasKit.LTRBRect(10, 60, 210, 260), 25, 15);

      function draw(canvas) {
        canvas.clear(CanvasKit.WHITE);
        canvas.drawRRect(rr, paint);
      }
      surface.drawOnce(draw);
    });
  }, []);

  return (
    <div className="App">
      <canvas id="foo" width="300" height="300"></canvas>
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
