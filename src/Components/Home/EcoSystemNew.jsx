import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import stars from '../../assets/stars.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import useScreensize from '../../hook/useScreensize';

const EcoSystem = ({
    activePlanet,
    setActivePlanet
}) => {
    const { width } = useScreensize();

    const isMobile = width < 1024;

    const config = {
        "planet1": {
            rotation: {
                // planet1: "",
                planet1: isMobile ? "0" : "-30",
                planet2: "0",
                planet3: "-30",
                planet4: "-20",
            }
        },
        "planet2": {
            rotation: {
                planet1: "-190",
                planet2: isMobile ? "0" : "140",
                planet3: "160",
                planet4: "180",
            }
        },
        "planet3": {
            rotation: {
                planet1: "-95",
                planet2: "-100",
                planet3: isMobile ? "0" : "-110",
                planet4: "-80",
            }
        },
        "planet4": {
            rotation: {
                planet1: "95",
                planet2: "100",
                // planet2: "230",
                planet3: "110",
                planet4: isMobile ? "0" : "55",
            }
        },
    }

    const content = {
        "planet1": {
            name: "planet1",
            title: "Discover the Ecosystem",
            description: "Take your first steps into the world of Real World Assets (RWA) with uNFTs and the $URANO token. Explore the possibilities of tokenized assets and their impact on traditional finance.",
            progress: 25,
            image: "/assets/planets/jupiterFull.png",
            sectionHeight: "20vh"
        },
        "planet2": {
            name: "planet2",
            title: "Tokenize Your Assets",
            description: "The Urano Ecosystem empowers you to bring Real World Assets (RWA) on-chain, unlocking innovative pathways to generate value and increase liquidity.",
            progress: 50,
            image: "/assets/planets/marsFull.png",
            sectionHeight: "60vh"
        },
        "planet3": {
            name: "planet3",
            title: "European Tokenization License",
            description: "Invest in tokenized assets securely, ensuring compliance with European regulations while benefiting from new investment opportunities.",
            progress: 75,
            image: "/assets/planets/venusFull.png",
            sectionHeight: "60vh"
        },
        "planet4": {
            name: "planet4",
            title: "Faster, Cheaper, Safer",
            description: "The Urano Ecosystem utilizes blockchain technology to provide a transparent platform with minimal intermediary fees and accelerated settlement times.",
            progress: 100,
            image: "/assets/planets/mercuryFull.png",
            sectionHeight: "80vh"
        },
    };    

    useEffect(() => {
        if (isMobile) {
            ScrollTrigger?.getAll().forEach(trigger => trigger?.kill());
            return
        };
        gsap.registerPlugin(ScrollTrigger);

        const pinContainer = document.querySelector('.eco-system-pin');

        // Adjust `end` value to limit scroll range
        ScrollTrigger.create({
            trigger: pinContainer,
            start: "top top",
            end: "bottom bottom",
            // end: () => `+=${Object.keys(content).length * window.innerHeight}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,  // Enables smooth scrolling
            // markers: true,
        });

        // Set ScrollTrigger for each section to control active state
        Object.keys(content).forEach((key, index) => {
            const element = document.querySelector(`.section-${index + 1}`);

            ScrollTrigger.create({
                trigger: element,
                start: "top center",
                end: "bottom center",
                pin: true,
                pinSpacing: false,
                // markers: true,
                onEnter: () => setActivePlanet(key),
                onLeaveBack: () => {
                    const prevIndex = index > 0 ? index - 1 : 0;
                    setActivePlanet(Object.keys(content)[prevIndex]);
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]);

    if(isMobile) return
    return (
        <section className="eco-system-pin w-full overflow-hidden">
            <div className="lg:max-w-[1200px] sm:w-[90%] overflow- w-full mx-auto text-white flex lg:flex-nowrap flex-wrap">
                <div className="lg:max-w-[35%] lg:min-w-[35%] w-full p-5">
                    <div className={`h-screen overflow-hidden flex flex-col justify-center items-start`}>
                        <div >
                            <h1 data-aos="fade-up" className="heading lg:w-[360px] font-conthrax">{content[activePlanet]?.title}</h1>
                            <p data-aos="fade-up" className="lg:w-[280px] textColor mt-6 lg:px-0 px-5">{content[activePlanet]?.description}</p>
                            <div data-aos="fade-up" className="flex flex-row items-center lg:justify-start justify-center gap-2">
                                <Link to="#contact" className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2DBDC5] to-[#16EAC0] flex gap-2">
                                    Contact Us
                                    <MdKeyboardArrowRight className="text-[#16EAC0]" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-[6px] bg-[#212121] rounded-full mt-9">
                            <div
                                className="h-full bg-[#16EAC0] rounded-full"
                                style={{
                                    width: `${content[activePlanet]?.progress}%`,
                                    transition: "width 0.6s linear"
                                }}
                            ></div>
                        </div>
                    </div>
                    {Object.values(content).map((item, index) => (
                        <div
                            style={{
                                height: item?.sectionHeight
                            }}
                            key={index}
                            className={`section-${index + 1} pointer-events-none opacity-0 invisible`}></div>
                    ))}
                </div>
                <div className="lg:pt-10 pt-2 overflow-hidden lg:flex-grow w-full sticky top-0 right-0">
                    <div className="relative scale-[1.5] h-screen lg:min-h-[600px] md:min-h-[300px] min-h-[270px] flex justify-center items-center w-full">
                        <video poster={stars} className="absolute opacity-30 top-0 left-0 w-full h-full object-cover" src="/assets/stars.webm" autoPlay loop muted playsInline></video>
                        <img className='max-w-full z-[2] max-h-full' src="/assets/planets/uranusFull.png" alt="" />
                        {Object.values(content).map((item, index) => {
                            const rotationValue = `${config[activePlanet]?.rotation[item?.name] || "0"}deg`;
                            const transformStyle = `rotate(${rotationValue})`;
                            return (
                            <div key={index}
                                className={`planet-${index + 1} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}

                            >
                                <img
                                    style={{
                                        willChange: "transform",
                                        transformOrigin: "center",
                                        transition: "transform 1s linear",
                                        WebkitTransform: transformStyle,
                                        transform: transformStyle
                                    }}
                                    className='max-w-full max-h-full'
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcoSystem;
