'use client'
import React, { useRef, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useState } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'
import { TypewriterEffectHome } from '@/components/home/TypewritterEffectHome'
import { Vortex } from '@/components/ui/vortex'
import { ThreeDCardDemo } from '@/components/home/ThreeDCard'
import {RedesSociales} from '@/components/home/RedesSociales'
import Image from 'next/image'
// Little helpers ...
const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
    const parallax = useRef<IParallax>(null!)
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };


    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <button onClick={handlePlayPause} style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: '10000' }}>
                {isPlaying ? <FiPause /> : <FiPlay />}
            </button>
            <Parallax ref={parallax} pages={8}>
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={8}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundRepeat: 'repeat'
                    }}
                />
                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Vortex
                        backgroundColor='transparent'
                        rangeY={300}
                        particleCount={100}
                        baseHue={120}
                        rangeSpeed={0.3}
                        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
                        <Image src='/logo.png' alt='juan czrz logo' width={200} height={60} />
                        <button onClick={handlePlayPause} className='button-start'>Press to start</button>
                    </Vortex>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={-0.5}
                    sticky={{ start: 1, end: 2 }}
                    onClick={handlePlayPause}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div style={{ boxShadow: '0 0 100px 10px rgba(0, 191, 99, 0.3)', cursor: 'pointer', borderRadius: '15px', border: '5px solid #00bf63' }}>
                        <video ref={videoRef} loop style={{ maxWidth: '90vw', borderRadius: '10px' }} >
                            <source src="videin.mp4" type="video/mp4" />
                        </video>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={-0.5}
                    sticky={{ start: 3, end: 4 }}
                    onClick={() => parallax.current.scrollTo(4)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TypewriterEffectHome />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={5}
                    sticky={{ start: 5, end: 6 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div >
                            <ThreeDCardDemo />
                            <RedesSociales />
                        </div>
                    
                </ParallaxLayer>
                <ParallaxLayer
                    offset={7}
                    speed={0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image src={'/end.png'} width={1500} height={800} alt='end'/>
                </ParallaxLayer>
            </Parallax>
        </div>

    )
}