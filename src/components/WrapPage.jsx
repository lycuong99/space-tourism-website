import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
              duration: 3,
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
          <motion.div
            style={{
              border: "16px solid #f3f3f3",
              borderTop: "16px solid #3498db",
              borderRadius: "50%",
              height: 200,
              width: 200,
            }}
            animate={{
              rotate: ["0deg", "360deg"],

              transition: {
                repeat: Infinity,
                yoyo: Infinity,
              },
            }}
          ></motion.div>
        </motion.div>
      )}
      {!isLoading && children}
    </>
  )
}
