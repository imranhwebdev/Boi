import Header from './components/Header'
import Banner from './components/Banner'
import DrawingCanvas from './components/DrawingCanvas';

function App() {
  window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pencil cursor
    canvas.style.cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVR42u3WwQkCQRSG4c8dhmZQqLJNlyrIRF5A/QnKgiuoqCi5rXY3MEX3OedfSeh3fUxwj1nFL9w9w4zfsMw59P9BvAxOjNs6MDjOqMwcw/H2Qq/w3w81nWzAhwD/wPAu7ucBSuYDsA94TsnDzMS7gQ4bZrM3Ak4z/mFgAF/i3MjwNWBAPyMZ9GIOIAw5tY7zQMa4CFwmv14t+wDci8f6vW6c5AAAAAElFTkSuQmCC"), auto';

    // Event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Functions
    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    // Resize canvas with window
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};
  return (
    <>
    <DrawingCanvas />
      <Header />
      <Banner />
    </>
  )
}

export default App
