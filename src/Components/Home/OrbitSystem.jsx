import React, { useEffect, useState } from 'react';
import './OrbitSystem.css';
import useScreensize from '../../hook/useScreensize';

;

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
        <div className="orbit-container lg:translate-x-0 translate-x-[-50px] lg:scale-[unset] scale-[1.4]">
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
                <pattern id="planet1Image" width="40" height="40" patternUnits="userSpaceOnUse">
                    <image href="/assets/planets/2k_jupiter.jpg" width="40" height="40" preserveAspectRatio="xMidYMid slice" />
                </pattern>
                <pattern id="planet2Image" width="40" height="40" patternUnits="userSpaceOnUse">
                    <image href="/assets/planets/2k_mars.jpg" width="40" height="40" preserveAspectRatio="xMidYMid slice" />
                </pattern>
                <pattern id="planet3Image" width="40" height="40" patternUnits="userSpaceOnUse">
                    <image href="/assets/planets/2k_venus_surface.jpg" width="40" height="40" preserveAspectRatio="xMidYMid slice" />
                </pattern>
                <pattern id="planet4Image" width="40" height="40" patternUnits="userSpaceOnUse">
                    <image href="/assets/planets/2k_mercury.jpg" width="40" height="40" preserveAspectRatio="xMidYMid slice" />
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
                    <circle cx="400" cy="180" r="30" fill="url(#planet1Image)" className="planet" />
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
            <div className="earth">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div className="dot dot4"></div>
                <div className="dot dot5"></div>
                <div className="dot dot6"></div>
                <div className="dot dot7"></div>
                <div className="dot dot8"></div>
                <div className="dot dot9"></div>
                <div className="dot dot10"></div>
            </div>
        </div>
    )
}

export default OrbitSystem

// return (
//     <div className="orbit-container">
//         <svg width="100%" height="100%" viewBox="0 0 500 500">
//             <defs>
//                 {/* Gradient Definitions */}
//                 <linearGradient id="gradient1" gradientTransform="rotate(90)">
//                     <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
//                     <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
//                     <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
//                     <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" gradientTransform="rotate(90)">
//                     <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
//                     <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
//                     <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
//                     <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" gradientTransform="rotate(90)">
//                     <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
//                     <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
//                     <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
//                     <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" gradientTransform="rotate(90)">
//                     <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
//                     <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
//                     <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
//                     <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
//                 </linearGradient>
//             </defs>
//             {/* Image Patterns for Planets */}
//             <pattern id="planet1Image" x="0" y="0" width="1" height="1" patternUnits="objectBoundingBox">
//                 <image href="/assets/planets/2k_jupiter.jpg" width="40" height="40" />
//             </pattern>
//             <pattern id="planet2Image" x="0" y="0" width="1" height="1" patternUnits="objectBoundingBox">
//                 <image href="/assets/planets/2k_mars.jpg" width="40" height="40" />
//             </pattern>
//             <pattern id="planet3Image" x="0" y="0" width="1" height="1" patternUnits="objectBoundingBox">
//                 <image href="/assets/planets/2k_venus_surface.jpg" width="40" height="40" />
//             </pattern>
//             <pattern id="planet4Image" x="0" y="0" width="1" height="1" patternUnits="objectBoundingBox">
//                 <image href="/assets/planets/2k_mercury.jpg" width="40" height="40" />
//             </pattern>

//             {/* Orbit with planet1 */}
//             <g
//                 className={`orbit ${activePlanet === 'planet1' ? 'active-orbit' : ''}`}
//                 onClick={() => handlePlanetClick('planet1')}
//                 style={{ transform: `rotate(${activePlanet === 'planet1' ? '-90deg' : '0deg'})`, transformOrigin: 'center' }}
//             >
//                 <circle cx="250" cy="250" r="200" fill="none" stroke="url(#gradient1)" strokeWidth="2" />
//                 {/* <circle cx="250" cy="50" r="20" fill="#ff5733" className="planet" /> */}
//                 <circle cx="250" cy="50" r="20" fill="url(#planet1Image)" className="planet" />
//             </g>

//             {/* Orbit with planet2 */}
//             <g
//                 className={`orbit ${activePlanet === 'planet2' ? 'active-orbit' : ''}`}
//                 onClick={() => handlePlanetClick('planet2')}
//                 style={{ transform: `rotate(${activePlanet === 'planet2' ? '-90deg' : '0deg'})`, transformOrigin: 'center' }}
//             >
//                 <circle cx="250" cy="250" r="160" fill="none" stroke="url(#gradient2)" strokeWidth="2" />
//                 {/* <circle cx="250" cy="90" r="20" fill="#ff5733" className="planet" /> */}
//                 <circle cx="250" cy="90" r="20" fill="url(#planet2Image)" className="planet" />
//             </g>

//             {/* Orbit with planet3 */}
//             <g
//                 className={`orbit ${activePlanet === 'planet3' ? 'active-orbit' : ''}`}
//                 onClick={() => handlePlanetClick('planet3')}
//                 style={{ transform: `rotate(${activePlanet === 'planet3' ? '-90deg' : '0deg'})`, transformOrigin: 'center' }}
//             >
//                 <circle cx="250" cy="250" r="120" fill="none" stroke="url(#gradient3)" strokeWidth="2" />
//                 {/* <circle cx="250" cy="130" r="20" fill="#ff5733" className="planet" /> */}
//                 <circle cx="250" cy="130" r="20" fill="url(#planet3Image)" className="planet" />
//             </g>

//             {/* Orbit with planet4 */}
//             <g
//                 className={`orbit ${activePlanet === 'planet4' ? 'active-orbit' : ''}`}
//                 onClick={() => handlePlanetClick('planet4')}
//                 style={{ transform: `rotate(${activePlanet === 'planet4' ? '-90deg' : '0deg'})`, transformOrigin: 'center' }}
//             >
//                 <circle cx="250" cy="250" r="80" fill="none" stroke="url(#gradient4)" strokeWidth="2" />
//                 {/* <circle cx="250" cy="170" r="20" fill="#ff5733" className="planet" /> */}
//                 <circle cx="250" cy="170" r="20" fill="url(#planet2Image)" className="planet" />
//             </g>
//             {activePlanet && (
//                 <>
//                     {/* Highlight circle around active planet */}
//                     <circle
//                         cx={activePlanet === 'planet1' ? 50 : activePlanet === 'planet2' ? 90 : activePlanet === 'planet3' ? 130 : 170}
//                         cy="250"
//                         r="30"
//                         fill="none"
//                         stroke="rgba(22, 234, 192, 1)"
//                         strokeWidth="2"
//                         strokeDasharray="5,5"
//                     />

//                     {/* Dashed line extending to the left */}
//                     <line
//                         x1={activePlanet === 'planet1' ? 20 : activePlanet === 'planet2' ? 60 : activePlanet === 'planet3' ? 100 : 140}
//                         y1="250"
//                         x2="0" // Left edge of the SVG
//                         y2="250"
//                         stroke="rgba(22, 234, 192, 1)"
//                         strokeWidth="2"
//                         strokeDasharray="5,5"
//                     />
//                 </>
//             )}
//         </svg>

//         {/* Earth in the center */}
//         <div className="earth"></div>
//     </div>
// );


{/* <linearGradient id="gradient2" gradientTransform="rotate(90)">
                        <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
                        <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
                        <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
                        <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient3" gradientTransform="rotate(90)">
                        <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
                        <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
                        <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
                        <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient4" gradientTransform="rotate(90)">
                        <stop offset="2%" stopColor="rgba(22, 234, 192, 0.3)" />
                        <stop offset="5%" stopColor="rgba(22, 234, 192, 0.2)" />
                        <stop offset="90%" stopColor="rgba(22, 234, 192, 0.01)" />
                        <stop offset="150%" stopColor="rgba(22, 234, 192, 0.2)" />
                    </linearGradient> */}


{/* {activePlanet && (
                    <>
                        <circle
                            cx={activePlanet === 'planet1' ? 30 : activePlanet === 'planet2' ? 97 : activePlanet === 'planet3' ? 150 : 200}
                            cy="250"
                            r={activePlanet === 'planet1' ? 40 : activePlanet === 'planet2' ? 40 : activePlanet === 'planet3' ? 32 : 25}
                            fill="none"
                            stroke="rgba(22, 234, 192, 1)"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                        />
                        <line
                            x1={activePlanet === 'planet1' ? -120 : activePlanet === 'planet2' ? 52 : activePlanet === 'planet3' ? 112 : 170}
                            y1="250"
                            // x2="-10"
                            x2={activePlanet === 'planet1' ? -10 : activePlanet === 'planet2' ? -152 : activePlanet === 'planet3' ? -142 : -190}
                            y2="250"
                            stroke="rgba(22, 234, 192, 1)"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                        />
                    </>
                )} */}