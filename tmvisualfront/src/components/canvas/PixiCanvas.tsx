// src/components/canvas/PixiCanvas.tsx
import { useEffect, useRef } from 'react';
import { Application, Assets, Sprite } from 'pixi.js';

export default function PixiCanvas() {
  const pixiContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a new PIXI application
    const app = new Application({
      backgroundColor: 0x1099bb, // Set background color
      resizeTo: window, // Automatically resize to the window
    });

    // Append the PIXI canvas to the container
    if (pixiContainer.current) {
      pixiContainer.current.appendChild(app.view);
    }

    // Load the bunny texture and add it to the stage
    Assets.load('https://pixijs.com/assets/bunny.png').then((texture) => {
      const bunny = new Sprite(texture);
      bunny.anchor.set(0.5);
      bunny.x = app.screen.width / 2;
      bunny.y = app.screen.height / 2;

      app.stage.addChild(bunny);

      // Rotate the bunny on each frame
      app.ticker.add(() => {
        bunny.rotation += 0.01;
      });
    });

    // Cleanup the PIXI application on component unmount
    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return <div ref={pixiContainer} style={{ width: '100vw', height: '100vh' }} />;
}
