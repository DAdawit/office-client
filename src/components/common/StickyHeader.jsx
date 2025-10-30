import { useEffect, useState, useRef } from "react";

const StickyHeader = ({ children, top = "63px", className = "", ...props }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [dimensions, setDimensions] = useState({
    left: "",
    width: "",
  });

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById("sticky_container");
      if (container) {
        const rect = container.getBoundingClientRect();
        setDimensions({
          left: `${rect.left}px`,
          width: `${rect.width}px`,
        });
      }
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > 2) {
        if (!isSticky) setIsSticky(true);
      } else {
        if (isSticky) setIsSticky(false);
      }
    };

    // Initial dimensions
    updateDimensions();

    // Update dimensions on resize
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div
      className={`flex items-center justify-between rounded-lg custom-px-20 custom-py-14 bg-white custom-gap-32
        ${
          isSticky
            ? "fixed z-40 shadow-[0_8px_20px_rgba(0,0,0,0.08)] rounded-none"
            : "relative"
        } ${className}`}
      style={
        isSticky
          ? {
              top,
              left: dimensions.left,
              width: dimensions.width,
              ...props.style,
            }
          : { ...props.style }
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default StickyHeader;
// import { useEffect, useState } from "react"

// const StickyHeader = ({
//     children,
//     top = "63px",
//     left = "302px",
//     right = "14px",
//     width = "calc(100vw - 288px - 52px)",
//     className = "",
//     ...props
// }) => {
//     const [scrollY, setScrollY] = useState(0)
//     const [isSticky, setIsSticky] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentY = window.scrollY
//             setScrollY(currentY)

//             if (currentY > 2) {
//                 if (!isSticky) setIsSticky(true)
//             } else {
//                 if (isSticky) setIsSticky(false)
//             }
//         }

//         window.addEventListener("scroll", handleScroll, { passive: true })
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [isSticky])

//     return (
//         <div
//             className={`flex items-center justify-between rounded-lg px-5 py-3.5 bg-white gap-8
//         ${isSticky
//                     ? "fixed z-40 shadow-[0_8px_20px_rgba(0,0,0,0.08)] rounded-none"
//                     : "relative"
//                 } ${className}`}
//             style={
//                 isSticky
//                     ? { top, left, right, width, ...props.style }
//                     : { ...props.style }
//             }
//             {...props}
//         >
//             {children}
//         </div>
//     )
// }

// export default StickyHeader
