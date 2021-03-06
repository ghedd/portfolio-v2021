import { useState, useEffect } from "react"
import useSSRCheck from "../useSSRCheck"
const useScroll = () => {
  const { isSSR } = useSSRCheck()
  const [left, setLeft] = useState<number>( 0 )
  const [top, setTop] = useState<number>( 0 );

  useEffect( () => {
    const handleScroll = () => {
      setLeft( window.pageXOffset )
      setTop( window.pageYOffset )
    }
    if ( !isSSR ) {
      window.addEventListener( "scroll", handleScroll )
    }
    return () => {
      window.removeEventListener( "scroll", handleScroll )
    }
  }, [isSSR] )
  return { left, top }
}

export default useScroll