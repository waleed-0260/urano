import React, { useEffect, useState } from 'react';
import './OrbitSystem.css';
import useScreensize from '../../hook/useScreensize';

const OrbitSystem = ({
    activePlanet,
    setActivePlanet
}) => {
    const { width } = useScreensize();
    const [lineDashOffset, setLineDashOffset] = useState(0);
    const circleRadius = activePlanet === 'planet1' ? 40 : activePlanet === 'planet2' ? 40 : activePlanet === 'planet3' ? 32 : 25;
    const lineLength = Math.abs((activePlanet === 'planet1' ? -10 : activePlanet === 'planet2' ? -152 : activePlanet === 'planet3' ? -142 : -190) - (activePlanet === 'planet1' ? -120 : activePlanet === 'planet2' ? 52 : activePlanet === 'planet3' ? 112 : 170));

    const isMobile = width < 1024;

    const config = {
        "planet1": {
            rotation: {
                planet1: isMobile ? "0deg" : "270deg",
                planet2: "120deg",
                planet3: "20deg",
                planet4: "-170deg",
            }
        },
        "planet2": {
            rotation: {
                planet1: "120deg",
                planet2: isMobile ? "0deg" : "-90deg",
                planet3: "-170deg",
                planet4: "20deg",
            }
        },
        "planet3": {
            rotation: {
                planet1: "200deg",
                planet2: "30deg",
                planet3: isMobile ? "0deg" : "-90deg",
                planet4: "-230deg",
            }
        },
        "planet4": {
            rotation: {
                planet1: "40deg",
                planet2: "-130deg",
                // planet2: "230deg",
                planet3: "140deg",
                planet4: isMobile ? "0deg" : "-90deg",
            }
        },
    }

    // Reset dash offsets to their full lengths
    useEffect(() => {
        setLineDashOffset(lineLength);

        const lineAnimation = setTimeout(() => {
            setLineDashOffset(0);
        }, 600);

        return () => {
            clearTimeout(lineAnimation);
        };
    }, [activePlanet]);

    const handlePlanetClick = (planet) => {
        setActivePlanet(planet);
    };

    if (!activePlanet) return
    return (
        <div className="orbit-container lg:translate-x-0 translate-x-[-50px] lg:scale-[unset] scale-[1.5]">
            <svg width="100%" height="100%" viewBox="-50 0 800 800">
                <defs>
                    {/* Gradient Definitions */}
                    {Array(4).fill().map((_, i) => (
                        <linearGradient key={i} id={"gradient" + (i + 1)} gradientTransform="rotate(90)">
                            <stop offset="1%" stopColor="rgba(22, 234, 192, 0.3)" />
                            <stop offset="3%" stopColor="rgba(22, 234, 192, 0.1)" />
                            <stop offset="50%" stopColor="rgba(22, 234, 192, 0.06)" />
                            <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
                            <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
                            <stop offset="200%" stopColor="rgba(22, 234, 192, 0.2)" />
                        </linearGradient>
                    ))}
                </defs>
                {/* Image Patterns for Planets */}
                <pattern id="planet1Image"
                    width="62"
                    height="62"
                    x="59"
                    y="-37.6"
                    patternUnits="userSpaceOnUse"
                >
                    <image
                        href="/assets/planets/jupiter.png"
                        width="62"
                        height="62"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </pattern>
                <pattern id="planet2Image"
                    width="50" height="50"
                    x="25"
                    y="-25"
                    patternUnits="userSpaceOnUse">
                    <image href="/assets/planets/mars.png" width="50" height="50" preserveAspectRatio="xMidYMid slice" />
                </pattern>
                <pattern id="planet3Image"
                    x="11"
                    y="-13"
                    width="37" height="37" patternUnits="userSpaceOnUse">
                    <image href="/assets/planets/venus.png" width="37" height="37" preserveAspectRatio="xMidYMid slice" />
                </pattern>
                <pattern id="planet4Image" width="32" height="32"
                    patternUnits="userSpaceOnUse"
                    x="-0.2"
                    y="-16"
                >
                    <image href="/assets/planets/mercury.png" width="32" height="32" preserveAspectRatio="xMidYMid slice" />
                </pattern>

                {/* Orbit with planet1 (Jupiter) */}
                <g
                    className="orbit"
                    onClick={() => handlePlanetClick('planet1')}
                    style={{
                        transform: `rotate(${config[activePlanet]?.rotation?.planet1})`,
                        transitionDuration: '0.6s'
                    }}
                >
                    <circle cx="400" cy="400" r="220" fill="none" stroke="url(#gradient1)" strokeWidth="1" />
                    <circle
                        cx="400"
                        cy="180"
                        r="30"
                        fill="url(#planet1Image)"
                        className="planet"
                    />
                </g>

                {/* Orbit with planet2 (Mars) */}
                <g
                    className="orbit"
                    onClick={() => handlePlanetClick('planet2')}
                    style={{
                        transform: `rotate(${config[activePlanet]?.rotation?.planet2})`,
                        transitionDuration: '0.5s'
                    }}
                >
                    <circle cx="400" cy="400" r="150" fill="none" stroke="url(#gradient2)" strokeWidth="1" />
                    <circle cx="400" cy="250" r="25" fill="url(#planet2Image)" className="planet" />
                </g>

                {/* Orbit with planet3 (Venus) */}
                <g
                    className="orbit"
                    onClick={() => handlePlanetClick('planet3')}
                    style={{
                        transform: `rotate(${config[activePlanet]?.rotation?.planet3})`,
                        transitionDuration: '0.4s'
                    }}
                >
                    <circle cx="400" cy="400" r="100" fill="none" stroke="url(#gradient3)" strokeWidth="1" />
                    <circle cx="400" cy="302" r="18" fill="url(#planet3Image)" className="planet" />
                </g>

                {/* Orbit with planet4 (Mercury) */}
                <g
                    className="orbit"
                    onClick={() => handlePlanetClick('planet4')}
                    style={{
                        transform: `rotate(${config[activePlanet]?.rotation?.planet4})`,
                        // transitionDuration: '0.5s'
                    }}
                >
                    <circle cx="400" cy="400" r="50" fill="none" stroke="url(#gradient4)" strokeWidth="1" />
                    <circle cx="400" cy="352" r="16" fill="url(#planet4Image)" className="planet" />
                </g>

                {/* Highlight and Dashed lines code remains the same */}

                {activePlanet &&
                    (isMobile ?
                        (
                            <>
                                <circle
                                    cy={activePlanet === 'planet1' ? 180 : activePlanet === 'planet2' ? 250 : activePlanet === 'planet3' ? 302 : 352}
                                    cx="400"
                                    r={circleRadius}
                                    fill="none"
                                    stroke="rgba(22, 234, 192, 1)"
                                    strokeWidth="1"
                                    style={{
                                        transition: '0.3s ease-in-out',
                                    }}
                                    strokeDasharray="5,5"
                                />
                                <line
                                    x1="400"
                                    y1={activePlanet === 'planet1' ? 140 : activePlanet === 'planet2' ? 208 : activePlanet === 'planet3' ? 268 : 326}
                                    y2={activePlanet === 'planet1' ? -80 : activePlanet === 'planet2' ? -152 : activePlanet === 'planet3' ? -142 : -190}
                                    x2="400"
                                    stroke="rgba(22, 234, 192, 1)"
                                    strokeWidth="1"
                                    style={{
                                        transition: 'transform 0.3s ease-in-out',
                                        opacity: lineDashOffset === 0 ? 1 : 0
                                    }}
                                    strokeDasharray="5,5"
                                />
                            </>
                        )
                        :
                        (
                            <>
                                <circle
                                    cx={activePlanet === 'planet1' ? 180 : activePlanet === 'planet2' ? 250 : activePlanet === 'planet3' ? 302 : 352}
                                    cy="400"
                                    r={circleRadius}
                                    fill="none"
                                    stroke="rgba(22, 234, 192, 1)"
                                    strokeWidth="1"
                                    style={{
                                        transition: '0.3s ease-in-out',
                                    }}
                                    strokeDasharray="5,5"
                                />
                                <line
                                    x1={activePlanet === 'planet1' ? 140 : activePlanet === 'planet2' ? 208 : activePlanet === 'planet3' ? 268 : 326}
                                    y1="400"
                                    x2={activePlanet === 'planet1' ? -80 : activePlanet === 'planet2' ? -152 : activePlanet === 'planet3' ? -142 : -190}
                                    y2="400"
                                    stroke="rgba(22, 234, 192, 1)"
                                    strokeWidth="1"
                                    style={{
                                        transition: 'transform 0.3s ease-in-out',
                                        opacity: lineDashOffset === 0 ? 1 : 0
                                    }}
                                    strokeDasharray="5,5"
                                />
                            </>
                        ))}
            </svg>
            {/* Earth in the center */}
            <div className="uranus">
                {/* <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div className="dot dot4"></div>
                <div className="dot dot5"></div>
                <div className="dot dot6"></div>
                <div className="dot dot7"></div>
                <div className="dot dot8"></div>
                <div className="dot dot9"></div>
                <div className="dot dot10"></div> */}
            </div>
        </div>
    )
}

export default OrbitSystem