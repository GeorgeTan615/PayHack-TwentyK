import React, { useRef, useEffect } from 'react';
import jsQR, { QRCode } from 'jsqr';
import { useRouter } from 'next/router';

function WebcamComponent(): JSX.Element {
		const router = useRouter();
    	const videoRef = useRef<HTMLVideoElement>(null);
	 	const streamRef = useRef<MediaStream | null>(null);
  
    useEffect(() => {
      const videoElement = videoRef.current;
		const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
		const canvasContext = canvasElement.getContext('2d') as CanvasRenderingContext2D;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			let localStream: MediaStream | null = null;
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function(stream) {
            if (videoElement) {
              videoElement.srcObject = stream;
				  streamRef.current = stream;
              decodeQRCode(videoElement, canvasElement, canvasContext);
            }
          })
          .catch(function(error) {
            console.error('Error accessing the webcam: ', error);
          });

			 return () => {
				// Cleanup function to stop the camera stream
				if (localStream) {
					localStream.getTracks().forEach((track) => {
						track.stop();
					 });
      		} 
			};
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
				
				const rerouteAfterDelay = () => {
					setTimeout(() => {
						router.push('/pay1');
					}, 1000);
					setTimeout(() => {
						window.location.reload();
					}, 2000)
				 };
			  
				 // Call the function to initiate the delay and rerouting
				 rerouteAfterDelay();
        } else {
            console.log('NOQR')
        }
        
        requestAnimationFrame(() => decodeQRCode(video, canvas, context));
      }

    return  (
		<div className="flex flex-col h-screen p-7 pt-16">
			<div className="bold text-4xl text-center">
				QR Pay
			</div>
			<video ref={videoRef} autoPlay className="pt-20">
				<canvas id="canvas"></canvas>
			</video>
		</div>
	 )

	 
  }
  
  export default WebcamComponent;