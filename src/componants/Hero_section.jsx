import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"
import Button from "./Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const Hero_section = () => {
    
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasclicked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [laodedVideos, setLoadedVideos] = useState(0)
    
    const totalVideos = 4
    const nextVideoRef = useRef(null)
    
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1


    const handleMiniVidClicked = () => {
        setHasclicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }
    
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1)
    }

    useGSAP(()=>{
    if(hasClicked) {
        gsap.set('#next-video', {visibility: 'visible'})

        gsap.to("#next-video", {
            transformOrigin: "center",
            scale:1,
            width:'100%',
            height:'100%',
            duration:1,
            ease: "power1.inOut",
            onStart: () => nextVideoRef.current.play()
        })

        gsap.from('#current-video', {
            transformOrigin: 'center center',
            scale:1,
            duration: 1.5,
            ease:'power1.inOut'
        })
    }
    }, {dependencies: [currentIndex], revertOnUpdate: true})

    useGSAP(()=>{
        gsap.set("#video-frame", {
    clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
      trigger: "#video-frame",
      start: "center center",
      end: "bottom center",
      scrub: true,
      },
      });
    })

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <div onClick={handleMiniVidClicked} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100" >
                        <video 
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id="current-video"
                        className="origin-center size-64 scale-150 object-cover object-center"
                        />
                    </div>
                </div>
                <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                id="next-video"
                className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] invisible absolute z-20 size-64 object-cover object-center"
                onLoadedData={handleVideoLoad}
                />

                <video
                src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                loop
                muted
                className="top-0 left-0 absolute size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
                />
            </div>
            <h1 className="uppercase font-[zentry] font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] absolute bottom-5 right-5 z-40 text-blue-75">
                GAMING
            </h1>
            <div className="absolute left-0 top-0 right-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className=" text-blue-100 font-[zentry] uppercase font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem];">REDEFINE</h1>
                    <p className="mb-5 max-w-64 text-blue-100 font-[robert-regular]">Enter the Metagame layer <br /> Unleash the Play Economy</p>
                    <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>} containerClass='!bg-yellow-300 flex-center gap-1 '></Button>
                </div>
            </div>
        </div>
        <h1 className="uppercase font-[zentry] -z-40 text-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] absolute bottom-5 right-5 ">
                GAMING
        </h1>
    </div>
  )
}

export default Hero_section