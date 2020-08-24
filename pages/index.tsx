import React from 'react';
import Head from 'next/head';

import { Config, computeAndDraw, clearCanvas } from '../logic/main';
import MenuButton from '../components/menu-button';
import Menu from '../components/menu';

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
        <MenuButton />
        { config !== null && <Menu config={config} setConfig={setConfig} start={start} /> }
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
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default Home;
