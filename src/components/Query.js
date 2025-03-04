import * as React from "react"; // export function useObserver(ref, margin, threshold) {
//     const [inView, setInView] = React.useState(false)
//     const part1Callback = (entries) => {
//         const [entry] = entries
//         setInView(entry.isIntersecting)
//     }
//     React.useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: margin || "0px",
//             threshold: threshold || 0,
//         }
//         const observer = new IntersectionObserver(part1Callback, options)
//         const current = ref.current
//         if (current) observer.observe(current)
//         return () => {
//             if (current) observer.unobserve(current)
//         }
//     }, [ref, margin])
//     return inView
// }
export function useObserver(ref, margin = "0px", threshold = 0) {
  const [inView, setInView] = React.useState(false);
  const callback = React.useCallback((entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  }, []);
  React.useEffect(() => {
    const options = { root: null, rootMargin: margin, threshold: threshold };
    const observer = new IntersectionObserver(callback, options);
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, margin, threshold, callback]);
  return inView;
}
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState({
    viewW: undefined,
    viewH: undefined,
  });
  React.useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: viewW, innerHeight: viewH } = window;
      return { viewW, viewH };
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    } // 初始化尺寸
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
} // export function useMediaQuery(query) {
//     const [matches, setMatches] = React.useState(false)
//     React.useEffect(() => {
//         const media = window.matchMedia(query)
//         if (media.matches !== matches) {
//             setMatches(media.matches)
//         }
//         const listener = () => {
//             setMatches(media.matches)
//         }
//         media.addListener(listener)
//         return () => media.removeListener(listener)
//     }, [matches, query])
//     return matches
// }
export function useMediaQuery(query) {
  // 初始状态设为 false
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    // 确保代码运行在浏览器环境
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query); // 设置初始值
      if (media.matches !== matches) {
        setMatches(media.matches);
      } // 使用更现代的事件监听方式
      const listener = (event) => {
        setMatches(event.matches);
      }; // 现代浏览器使用 addEventListener
      media.addEventListener("change", listener); // 清理函数
      return () => {
        media.removeEventListener("change", listener);
      };
    }
  }, [query]); // 删除了 matches 依赖项，因为它可能导致不必要的重新订阅
  return matches;
}
export const __FramerMetadata__ = {
  exports: {
    useMediaQuery: {
      type: "function",
      annotations: { framerContractVersion: "1" },
    },
    useWindowDimensions: {
      type: "function",
      annotations: { framerContractVersion: "1" },
    },
    useObserver: {
      type: "function",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Query.map
