
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Define the initial state based on current window width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check immediately
    checkMobile()
    
    // Set up event listener for window resize
    window.addEventListener("resize", checkMobile)
    
    // Also use matchMedia for better responsiveness
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener("change", checkMobile)
    
    // Cleanup both event listeners
    return () => {
      window.removeEventListener("resize", checkMobile)
      mql.removeEventListener("change", checkMobile)
    }
  }, [])

  return isMobile
}
