
import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        with : undefined,
        height: undefined
    });
    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                with: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize();

        window.addEventListener("resize", handleResize); // activatiy handle resize

        return () => window.removeEventListener("resize", handleResize) // memory link
    }, []);

  return windowSize
    
  
}

export default useWindowSize




