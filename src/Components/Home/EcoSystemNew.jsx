import { useEffect, useRef } from 'react';
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
    // let activePlanet = "planet4"
     
    const { width } = useScreensize();
    const pinContainerRef = useRef(null);
    const sectionsRefs = useRef([]);

    const isMobile = width < 1024;

    const config = {
        "planet1": {
            rotation: {
                planet1: isMobile ? "0" : "-30",
                planet2: "0",
                planet3: "-30",
                planet4: "-20",
            },
            highlightBox: {
                x: "343",
                y: "-64",
                width: "62px",
                height: "62px",
            },
            highlightLine: {
                x: "107",
                y: "-280",
                width: "102px",
            }
        },
        "planet2": {
            rotation: {
                planet1: "-190",
                planet2: isMobile ? "0" : "140",
                planet3: "160",
                planet4: "180",
            },
            highlightBox: {
                x: "529",
                y: "-58",
                width: "48px",
                height: "48px",
            },
            highlightLine: {
                x: "75",
                y: "-200",
                width: "144px",
            },
        },
        "planet3": {
            rotation: {
                planet1: "-95",
                planet2: "-100",
                planet3: isMobile ? "0" : "-128",
                planet4: "-80",
            },
            highlightBox: {
                x: "644",
                y: "-57",
                width: "46px",
                height: "46px",
            },
            highlightLine: {
                x: "56.6",
                y: "-100",
                width: "188px",
            },
        },
        "planet4": {
            rotation: {
                planet1: "95",
                planet2: "100",
                planet3: "110",
                planet4: isMobile ? "0" : "55",
            },
            highlightBox: {
                x: "1155",
                y: "-52",
                width: "29px",
                height: "29px",
            },
            highlightLine: {
                x: "46.8",
                y: "-80",
                width: "227px",
            },
        },
    };

    const content = {
        "planet1": {
            name: "planet1",
            title: "Discover the Ecosystem",
            description: "Take your first steps into the world of Real World Assets (RWA) with uNFTs and the $URANO token. Explore the possibilities of tokenized assets and their impact on traditional finance.",
            progress: 25,
            image: "/assets/planets/jupiterFull.png",
            sectionHeight: "80vh"
        },
        "planet2": {
            name: "planet2",
            title: "Tokenize Your Assets",
            description: "The Urano Ecosystem empowers you to bring Real World Assets (RWA) on-chain, unlocking innovative pathways to generate value and increase liquidity.",
            progress: 50,
            image: "/assets/planets/marsFull.png",
            sectionHeight: "80vh"
        },
        "planet3": {
            name: "planet3",
            title: "European Tokenization License",
            description: "Invest in tokenized assets securely, ensuring compliance with European regulations while benefiting from new investment opportunities.",
            progress: 75,
            image: "/assets/planets/venusFull.png",
            sectionHeight: "80vh"
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
        // return
        // Pin the container
        const pinContainer = pinContainerRef.current;
        if (!pinContainer) return
        if (isMobile) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);


        ScrollTrigger.create({
            trigger: pinContainer,
            start: "top top",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: 1,
        });

        // Set ScrollTrigger for each section
        sectionsRefs.current.forEach((element, index) => {
            ScrollTrigger.create({
                trigger: element,
                start: "top center",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                onEnter: () => setActivePlanet(Object.keys(content)[index]),
                onLeaveBack: () => {
                    const prevIndex = index > 0 ? index - 1 : 0;
                    setActivePlanet(Object.keys(content)[prevIndex]);
                },
            });
        });

        return () => {

            // Cleanup all ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]);

    // if (isMobile) return null;

    return (
        <div className='w-full'>
            <section ref={pinContainerRef} className="eco-system-pin w-full overflow-hidden">
                <div className="lg:max-w-[1200px] sm:w-[90%] w-full mx-auto text-white flex lg:flex-nowrap flex-wrap">
                    <div className="lg:max-w-[35%] lg:min-w-[35%] w-full p-5">
                        <div className={`h-screen overflow-hidden flex flex-col justify-center items-start`}>
                            <div>
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
                                ref={el => sectionsRefs.current[index] = el}
                                style={{
                                    height: item?.sectionHeight
                                }}
                                key={index}
                                className={`section-${index + 1} pointer-events-none opacity-0 invisible`}>
                            </div>
                        ))}
                    </div>
                    <div className="lg:pt-10 pt-2 overflow-hisdden lg:flex-grow w-full sticky top-0 right-0">
                        <div className="relative scale-[1.5] z-[222] h-screen lg:min-h-[600px] md:min-h-[300px] min-h-[270px] flex justify-center items-center w-full">
                            <video poster={stars} className="absolute opacity-30 top-0 left-0 w-full h-full object-cover" src="/assets/stars.webm" autoPlay loop muted playsInline></video>
                            <img className='max-w-full z-[2] max-h-full' src="/assets/planets/uranusFull.png" alt="" />
                            {Object.values(content).map((item, index) => {
                                const rotationValue = `${config[activePlanet]?.rotation[item?.name] || "0"}deg`;
                                const transformStyle = `rotate(${rotationValue})`;
                                return (
                                    <div key={index}
                                        className={`planet-${index + 1} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
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
                                )
                            })}
                            {console.log(config[activePlanet]?.highlightBox?.x)}
                            <div className="border absolute top-1/2 -translate-y-0 left-0 border-dashed border-[#16EAC0] rounded-full"
                                style={{
                                    transformOrigin: "left",
                                    transform: `translateX(${config[activePlanet]?.highlightBox?.x || "0"}%) translateY(${config[activePlanet]?.highlightBox?.y || "-50%"}%)`,
                                    width: config[activePlanet]?.highlightBox?.width || "",
                                    height: config[activePlanet]?.highlightBox?.height || "",
                                    transition: "transform 1.1s ease-in-out"
                                }}
                            ></div>
                            <div className="border absolute top-1/2 -translate-y-0 left-0 h-[2px] border-dashed border-[#16EAC0]"
                                style={{
                                    transformOrigin: "left",
                                    transform: `translateX(${config[activePlanet]?.highlightLine?.x || "0"}%) translateY(${config[activePlanet]?.highlightLine?.y || "-50%"}%)`,
                                    width: config[activePlanet]?.highlightLine?.width || "",
                                    transition: "transform 1.1s ease-in-out"
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcoSystem;
