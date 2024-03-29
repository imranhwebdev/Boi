import React, { useRef, useEffect } from 'react';
import commentRight from "../assets/img/comment-right.png";

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startDrawing = (e) => {
      isDrawingRef.current = true;
      [lastXRef.current, lastYRef.current] = [e.clientX, e.clientY];
    };

    const draw = (e) => {
      if (!isDrawingRef.current) return;

      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#000';

      ctx.beginPath();
      ctx.moveTo(lastXRef.current, lastYRef.current);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      [lastXRef.current, lastYRef.current] = [e.clientX, e.clientY];
    };

    const stopDrawing = () => {
      isDrawingRef.current = false;
    };

    const toggleDrawing = (e) => {
      if (!isDrawingRef.current) {
        startDrawing(e);
      } else {
        stopDrawing();
      }
    };

    canvas.addEventListener('mousedown', toggleDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Resize canvas with window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', toggleDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        id="drawingCanvas"
        style={{ border: '1px solid black' }}
      />
      
      <figure className='commentRight' onClick={resetCanvas}>
          <img src={commentRight} alt="" />
        </figure>
    </>
  );
}

export default DrawingCanvas;
