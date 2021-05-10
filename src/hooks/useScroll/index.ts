import { useState, useEffect } from "react"
import useSSRCheck from "../useSSRCheck"
const useScroll = () => {
  const { isSSR } = useSSRCheck()
  const [offsetLeft, setLeft] = useState<number>( 0 )
  const [offsetTop, setTop] = useState<number>( 0 );

  useEffect( () => {
    const handleScroll = () => {
      setLeft( window.pageXOffset )
      setTop( window.pageYOffset )
    }
    if ( !isSSR ) {
      window.addEventListener( "wheel", handleScroll, { passive: true } )
    }
    return () => window.removeEventListener( "wheel", handleScroll )

  }, [isSSR] )
  return { offsetLeft, offsetTop }
}

export default useScroll