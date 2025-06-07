import { useRef, useState } from "react"

const Hero_section = () => {
    
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasclicked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [laodedVideos, setLoadedVideos] = useState(0)
    
    const totalVideos = 3
    const nextVideoRef = useRef(null)
    
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1


    const handleMiniVidClicked = () => {
        setHasclicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }
    
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1)
    }

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
                autoPlay
                loop
                muted
                id="next-video"
                className="top-0 left-0 absolute size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
                />
            </div>
            <h1 className="uppercase font-[zentry] font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem]">
                GAMING
            </h1>

        </div>
    </div>
  )
}

export default Hero_section