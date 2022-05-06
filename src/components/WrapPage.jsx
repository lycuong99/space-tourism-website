import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "../styles/loader.scss"

export const WrapPage = ({ children }) => {
  useEffect(() => {
    console.log("First loading")
  }, [])
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      {isLoading && (
        <motion.div
          className="loading-page"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          initial={{
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          onAnimationComplete={() => {
            setIsLoading(false)
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          exit={{ opacity: 0 }}
        >
          <div className="loader">
            <div className="circle"></div>
          </div>
        </motion.div>
      )}
      {!isLoading && children}
    </>
  )
}
