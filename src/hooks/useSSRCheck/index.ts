import { useState, useEffect } from "react"

const useSSRCheck = () => {
  const [isSSR, setSSR] = useState( true )
  useEffect( () => {
    setSSR( false )
  }, [] )
  return { isSSR }
}

export default useSSRCheck