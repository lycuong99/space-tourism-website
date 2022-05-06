import React, { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

const elementInViewport = el => {
  const rect = el.getBoundingClientRect()
  const imgElm = null
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  )
}
const LazyImage = ({
  src,
  placeHolder,
  alt = "",
  width = "100%",
  height = "100%",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const [placeHolderloaded, setPlaceHolderloaded] = useState(false)

  const handleScroll = () => {
    if (!loaded && elementInViewport() && elementInViewport(imgElm)) {
      //load real image
      const imgLoader = new Image()
      imgLoader.src = src
      imgLoader.onload = () => {
        imgElm.setAttribute("src", src)
        setLoaded(true)
      }
    }
  }
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll)
    }

    //load placeholder img
    const imgLoader = new Image()
    imgLoader.src = placeHolder
    imgLoader.onload = () => {
      imgElm.setAttribute("src", src)
      setPlaceHolderloaded(true)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <img
        ref={ref => {
          imgElm = ref
        }}
        style={{
          opacity: placeHolderloaded ? 1 : 0,
          filter: loaded ? blur("50px") : "none",
        }}
        src={placeHolder}
        height={height}
        width={width}
      />
    </>
  )
}

export default LazyImage
