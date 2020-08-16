import React from 'react';
import Head from 'next/head';

const Home = (): JSX.Element => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    if (canvasRef.current === null) { return; }
    const renderCtx = canvasRef.current.getContext('2d');

    if (renderCtx === null) { return; }
    setContext(renderCtx);

    // if (context) context.fillRect(5, 5, 2, 2);
  }, [context]);

  return (
    <div>
      <Head>
        <title>Patterns</title>
      </Head>

      <main className="w-screen h-screen flex items-center justify-center bg-purple-200">
        <canvas
          id="canvas"
          ref={canvasRef}
          className="bg-purple-100"
          width={500}
          height={500}
        >
        </canvas>
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default Home;
