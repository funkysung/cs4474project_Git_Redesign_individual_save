import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
  
    useEffect(() => {
        const handleResizeWidth = () => {
            setScreenSize(window.innerWidth);
        };
  
        window.addEventListener('resize', handleResizeWidth);
  
        return () => {
            window.removeEventListener('resize', handleResizeWidth);
        };
        
    }, []);
  
    return screenSize;
};

export default useScreenSize;