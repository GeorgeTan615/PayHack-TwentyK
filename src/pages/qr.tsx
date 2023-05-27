import React, { useRef, useEffect } from 'react';
import jsQR, { QRCode } from 'jsqr';

function WebcamComponent(): JSX.Element {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      const videoElement = videoRef.current;
      
// const videoElement = document.getElementById('video') as HTMLVideoElement;
const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const canvasContext = canvasElement.getContext('2d') as CanvasRenderingContext2D;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function(stream) {
            if (videoElement) {
              videoElement.srcObject = stream;
              decodeQRCode(videoElement, canvasElement, canvasContext);
            }
          })
          .catch(function(error) {
            console.error('Error accessing the webcam: ', error);
          });
      } else {
        console.error('getUserMedia is not supported by your browser');
      }
    }, []);
  
    function decodeQRCode(
        video: HTMLVideoElement,
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
      ): void {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode: QRCode | null = jsQR(imageData.data, imageData.width, imageData.height);
        
        if (qrCode) {
            console.log('QR Code:', qrCode.data);
            // wait(1) and route to pay1
        } else {
            console.log('NOQR')
        }
        
        requestAnimationFrame(() => decodeQRCode(video, canvas, context));
      }

    return  <div className="flex flex-col h-screen justify-center p-7">
    <div className="font-bold text-4xl text-center">
        QR Pay
    </div>
    <video ref={videoRef} autoPlay>
        <canvas id="canvas"></canvas>
    </video>
    </div>;
  }
  
  export default WebcamComponent;

  