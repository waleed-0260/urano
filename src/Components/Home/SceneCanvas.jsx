import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = ({
    totalFrames = 360,
    width = 1400,
    height = 1400,
    framePath = "/assets/globe"
}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const headingRef = useRef(null);


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

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(
            headingRef.current, 
            { opacity: 0, y: 160 }, // Starting state
            { opacity: 0.5, y: 80, duration: 0.5, ease: "power4.out" } // Middle state
        )
        .to(headingRef.current, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" } // Ending state
        );
        const dl = gsap.timeline();
        
        dl.fromTo(
            textRef.current, 
            { opacity: 0, y: 160 }, // Starting state
            { opacity: 0.5, y: 80, duration: 0.5, ease: "power4.out" } // Middle state
        )
        .to(textRef.current, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" } // Ending state
        );
    }, []);

    
    

    return (
        <div className='w-full'>
            <div ref={containerRef} className='flex lg:flex-row flex-col items-center justify-around w-[90%] lg:max-w-[1200px] text-white lg:pt-[20px] pt-[120px] mx-auto'>
                <div className='flex flex-col lg:min-w-[30%]'>
                    <h1 ref={headingRef} className='heading lg:w-[350px] font-conthrax'>Unlocking the power of <span className='text-[#2DBDC5]'>on-chain</span> tokenization</h1>
                    <p ref={textRef} className='textColor lg:w-[270px]'>Urano Ecosystem is a decentralized tokenization platform, serving as a safe path for off-chain and Real World Asset (RWA) opportunities.</p>
                    <Link data-aos="fade-up" data-aos-delay={300} to="#ecosystem" className='px-2 py-2 rounded-lg btnColor flex items-center justify-center w-[110px] mt-[30px] font-[500]'>Discover <MdKeyboardArrowRight /> </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay={300} className='relative lg:min-w-[60%] flex-grow'>
                    <div className='absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 w-[67%] -translate-y-1/2 h-[70%] bg-gradient-to-b from-[#74eef466] to-[#2DBDC5] opacity-15 blur-3xl rounded-full'></div>
                    <div className='z-20'
                    // style={{ height: "100vh" }}
                    >
                        <canvas ref={canvasRef} width={width} height={height} style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SceneCanvas;
