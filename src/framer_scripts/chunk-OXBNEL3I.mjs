function t(n, e) {
  return {
    customHTMLBodyStart: `<!-- <script> 
const lenis = new Lenis({
  lerp: 0.6,
  // duration: 1.2,
  // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 1,
  gestureOrientation: "both"
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

<\/script>  -->

<style>
::selection {
    background-color: #F06449;
    color: #fff;
}
    html, body, #main {
        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
</style>`,
    customHTMLHeadStart:
      '<!-- <script src="https://unpkg.com/lenis@1.0.45/dist/lenis.min.js"><\/script>  -->',
    description: "The site about Jay Ji.",
    favicon:
      "https://framerusercontent.com/assets/tIk1MIT301r2X443JOkSdieG378.png",
    robots: "max-image-preview:large",
    socialImage:
      "https://framerusercontent.com/assets/9MtDLTCnQjAWsabvMo5bSOdRH8.png",
    title: "Jay Ji",
  };
}
export { t as a };
//# sourceMappingURL=chunk-OXBNEL3I.mjs.map
