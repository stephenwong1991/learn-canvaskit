import { useEffect } from 'react';
import InitCanvasKit from 'canvaskit-wasm';

export default function useInitCanvaskitConfig() {
  useEffect(() => {
    console.log('>>>>render');
    console.time('>>>>load canvaskit');
    InitCanvasKit({
      locateFile: (file) => '/node_modules/canvaskit-wasm/bin/' + file,
    }).then((CanvasKit) => {
      console.timeEnd('>>>>load canvaskit');
      console.time('>>>>draw canvas');
      const surface = CanvasKit.MakeCanvasSurface('canvas');
      const paint = new CanvasKit.Paint();
      paint.setColor(CanvasKit.Color4f(0.9, 0, 0, 1.0));
      // paint.setStyle(CanvasKit.PaintStyle.Stroke);
      console.log(">>>>>>>");
      console.log(paint);
      console.log(CanvasKit);
      paint.setAntiAlias(true);
      //                                              x   y   endX endY  yr  xr
      const rr = CanvasKit.RRectXY(CanvasKit.LTRBRect(50, 50, 200, 200), 25, 50);

      function draw(canvas) {
        canvas.clear(CanvasKit.WHITE);
        canvas.drawRRect(rr, paint);
        console.timeEnd('>>>>draw canvas');
      }

      surface.drawOnce(draw);
    });
  }, []);
}