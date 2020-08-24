import React from 'react';
import Head from 'next/head';

import { Config, computeAndDraw, clearCanvas } from '../logic/main';

const Home = (): JSX.Element => {
  const mainRef = React.useRef<HTMLCanvasElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
  const [config, setConfig] = React.useState<Config | null>(null);

  const start = () => {
    clearCanvas(context, config);
    computeAndDraw(context, config);
  };

  React.useEffect(() => {
    if (canvasRef.current === null) { return; }
    const renderCtx = canvasRef.current.getContext('2d');

    renderCtx.fillStyle = 'rgb(107, 70, 193)';

    if (renderCtx === null) { return; }
    setContext(renderCtx);
  }, [context, config]);

  React.useEffect(() => {
    if (mainRef.current === null) { return; }

    if (config === null) {
      setConfig({
        width: mainRef.current.offsetWidth,
        height: mainRef.current.offsetHeight,
        rule: '30',
        pixelSize: 2,
        delay: 5,
      });
    }

    mainRef.current.scrollLeft = (mainRef.current.scrollWidth - mainRef.current.clientWidth) / 2;
  }, [config]);

  return (
    <div>
      <Head>
        <title>Patterns</title>
      </Head>

      <main ref={mainRef} className="w-screen h-screen relative flex items-center justify-center bg-purple-200 overflow-scroll">
        { config !== null && <canvas
          id="canvas"
          ref={canvasRef}
          className="absolute top-0 inset-x-0"
          width={config.width * config.pixelSize}
          height={config.height * config.pixelSize}
          style={{
            width: config.width * config.pixelSize,
            height: config.height * config.pixelSize,
          }}
        >
        </canvas> }
        { config !== null && <div className="fixed bottom-0">
          <div className="bg-purple-900 py-2 px-4 mb-4 rounded-md shadow-lg flex items-center">
            <div className="border-purple-300 mr-4">
              <button className="text-purple-300 hover:text-purple-200 font-bold rounded mr-4" onClick={start}>
                Start
              </button>
            </div>
            <label htmlFor="width" className="text-purple-300 text-sm mr-2">
              Width
            </label>
            <input
              className="bg-purple-200 text-purple-700 rounded text-center text-sm px-1 w-16 mr-4"
              name="width"
              id="width"
              type="number"
              min="0"
              step="1"
              value={config.width}
              onChange={(event) => setConfig({
                ...config,
                width: parseInt(event.target.value, 10),
              })}
            >
            </input>
            <label htmlFor="height" className="text-purple-300 text-sm mr-2">
              Height
            </label>
            <input
              className="bg-purple-200 text-purple-700 rounded text-center text-sm px-1 w-16 mr-4"
              name="height"
              id="height"
              type="number"
              min="0"
              step="1"
              value={config.height}
              onChange={(event) => setConfig({
                ...config,
                height: parseInt(event.target.value, 10),
              })}
            >
            </input>
            <label htmlFor="rule" className="text-purple-300 text-sm mr-2">
              Rule
            </label>
            <select
              className="bg-purple-200 text-purple-700 rounded text-center text-sm px-1 w-16 mr-4"
              name="rule"
              id="rule"
              onChange={(event) => setConfig({
                ...config,
                rule: event.currentTarget.value,
              })}
            >
              <option value="30">30</option>
              <option value="90">90</option>
            </select>
            <label htmlFor="pixel-size" className="text-purple-300 text-sm mr-2">
              Pixel size
            </label>
            <input
              className="bg-purple-200 text-purple-700 rounded text-center text-sm px-1 w-10 mr-4"
              name="pixel-size"
              id="pixel-size"
              type="number"
              min="0"
              step="1"
              value={config.pixelSize}
              onChange={(event) => setConfig({
                ...config,
                pixelSize: parseInt(event.target.value, 10),
              })}
            >
            </input>
            <label htmlFor="delay" className="text-purple-300 text-sm mr-2">
              Delay
            </label>
            <input
              className="bg-purple-200 text-purple-700 rounded text-center text-sm px-1 w-10"
              name="delay"
              id="delay"
              type="number"
              min="0"
              step="1"
              value={config.delay}
              onChange={(event) => setConfig({
                ...config,
                delay: parseInt(event.target.value, 10),
              })}
            >
            </input>
          </div>
        </div> }
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default Home;
