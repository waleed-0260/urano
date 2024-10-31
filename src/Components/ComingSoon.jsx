import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const ComingSoon = ({
    totalFrames = 360,
    width = 1400,
    height = 1400,
    framePath = "/assets/globe"
}) => {

    const canvasRef = useRef(null);
    const containerRef = useRef(null);


    const getFramePath = (index) => {
        const frameNumber = String(index).padStart(4, '0');
        return `${framePath}/${frameNumber}.webp`;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const images = [];

        // Preload images
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            images.push(img);
        }

        // Render initial frame on mount to prevent blank canvas
        images[0].onload = () => {
            context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        };

        const renderFrame = (index) => {
            if (images[index]) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
            }
        };

        // GSAP ScrollTrigger setup for smoother frame progression and pinning
        gsap.to({}, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                // pinSpacing: "margin",
                scrub: 1,
                pin: containerRef.current, // Pin the container for the animation
                onUpdate: (self) => {
                    const frameIndex = Math.min(totalFrames - 1, Math.floor(self.progress * totalFrames));
                    renderFrame(frameIndex);
                },
            },
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, [totalFrames]);

  return (
    <div className='flex flex-col items-center justify-center sm:mt-[200px] mt-[150px]' data-aos="fade-up">
        <h1 className='text-2xl mb-7 bg-gradient-to-b from-[#2DBDC5] to-[#16EAC0] text-transparent bg-clip-text font-conthrax' data-aos="fade-up">Coming Soon</h1>

        <div className='absolute pointer-events-none top-[50px] left-1/2 -translate-x-1/2 w-[67%] -translate-y-1/2 h-[70%] bg-gradient-to-b from-[#74eef466] to-[#2DBDC5] opacity-15 blur-3xl rounded-full'></div>
                    <div className='z-20 sm:mt-[-250px] mt-[-100px]'
                    // style={{ height: "100vh" }}
                    >
                        <canvas ref={canvasRef} width={width} height={height} style={{ width: "100%", height: "100%" }} />
                    </div>
    </div>
  )
}

export default ComingSoon