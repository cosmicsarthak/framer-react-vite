import { Da as n, c as r, u as e, v as t } from "./chunk-NAESFJNX.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-Y5FTINFI.mjs";
var p = t(r, {
    children: [
      t("p", {
        children: [
          "This post is used to share a few examples of components I used while building ",
          e(n, {
            href: "https://framer.com/projects/Jayzhushi.com",
            nodeId: "TYK5zFM4J",
            openInNewTab: !1,
            smoothScroll: !1,
            children: e("a", { children: "jayzhushi.com" }),
          }),
          ", they are:",
        ],
      }),
      t("ul", {
        children: [
          e("li", {
            "data-preset-tag": "p",
            children: e("p", { children: "Sound Button\xA0" }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", { children: "Magic Hover" }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", { children: "Layout Switch" }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", { children: "Horizontal Scroll (Responsive)" }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", { children: "Back to top (with delay)" }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", { children: "Page Transition (deprecated)" }),
          }),
        ],
      }),
      e("p", { children: "See the Demo and Remix:" }),
      t("p", {
        children: [
          e(n, {
            href: "https://jayzhushisutilities.framer.website",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "See the Demo Site " }),
          }),
          "\uFF5C ",
          e(n, {
            href: "https://framer.com/projects/new?duplicate=aL0im3RM5LZlo5bImq6g",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "Remix Link" }),
          }),
        ],
      }),
      e("h3", { children: "Sound Button" }),
      e("p", {
        children:
          "This case shows playing a sound for any button on hover or click, in addition to providing a switch to control whether the sound is enabled or not.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,oqsvc76iWMeIDiKAOR5ScaMLg.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png",
        srcSet:
          "https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png?scale-down-to=512 512w,https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "Actions are assigned in the Overrider according to the specific use case.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,13bn2VPCBzf7BAGKbZBktArtU.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png",
        srcSet:
          "https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png?scale-down-to=512 512w,https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "In the Sound.tsx file, you can modify the audio file by editing the contents of the sound. In general, you can either get the download link directly from the audio website and copy it here, or you can upload the audio file to Github or cloud storage and get the link to the resource.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,jks3d0zFxqYQZ7H0548URSL7usM.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png",
        srcSet:
          "https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png?scale-down-to=512 512w,https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", { children: "Magic Hover" }),
      e("p", {
        children:
          "The magnetic effect on pointer hover is very popular, and this Override code automatically gets the dimensions of the element being used and adds the effect.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,peFoXxlgPUYFYn5syWypSmhooWY.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png",
        srcSet:
          "https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png?scale-down-to=512 512w,https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "In the Override file Effect - MagicHover, find the line with offsetX and offsetY. Where [-8, 8] means the element can move 8 pixels (up, down, left, right) when hovering.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,QdTAsvRn9hcoZkRUDpfuv5PLmkc.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png",
        srcSet:
          "https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png?scale-down-to=512 512w,https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", { children: "Layout Switch" }),
      t("p", {
        children: [
          "When building ",
          e(n, {
            href: "https://framer.com/projects/jayzhushi.com",
            nodeId: "TYK5zFM4J",
            openInNewTab: !1,
            smoothScroll: !1,
            children: e("a", { children: "jayzhushi.com" }),
          }),
          ", I particularly liked the horizontal scrolling. However, in order to make the site more inclusive, I offered the solution of layout switching.",
        ],
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,uPqvIRsD3yXjFZkZoCFKnaVD5Y.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png",
        srcSet:
          "https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png?scale-down-to=512 512w,https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "In Override, I use Layout for the elements within the grid to make sure they animate when switching layouts, Layout_Frame for the grid itself, and Layout_Viewport for the grid's parent layer, which controls the grid's transition from left to center. Finally, Layout_Toogle is used for the buttons that control the grid transition.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        srcSet:
          "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=512 512w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "When using this Override file, you can still adjust the properties in the Layout panel of the Framer (row and column properties will not take effect). In Advanced, use Width and Height to control the size of your content.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,bjeBl7PCE2TcZbgDlnJgVZ84qBY.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png",
        srcSet:
          "https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png?scale-down-to=512 512w,https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "If you want to adjust the number of columns in the grid, modify the Layout_Frame component in Layout.tsx. Find the gridTemplateColumns in the grid and change the number after repeat(.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,d7WDqupwFvjs7XIoefqozfsdQ.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png",
        srcSet:
          "https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", { children: "Horizontal Scroll (with wheel)" }),
      e("p", {
        children:
          "This case allows you to control the horizontal scrolling layout using only the mouse wheel. Please note that this effect is still experimental.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,vTfiM9UtZjuNnHuNRrDKmlvJY.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png",
        srcSet:
          "https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png?scale-down-to=512 512w,https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "Add Override - Layout_Wheel_Control to any layer that needs to use this effect, usually this layer will also have an Overflow: Scroll attribute, and Layout_Wheel_Toggle will be used to toggle this on and off.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        srcSet:
          "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=512 512w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "Note that if you use this case with layout switching, then you need to deactivate this feature when switching to normal vertical layout, otherwise it may affect the normal scrolling effect.",
      }),
      t("p", {
        children: [
          "Also, while it is possible to use a Scroll Transform in Framer to achieve the same effect (use the wheel to control the x value of the layer), this may result in ineffective finger swipes on a trackpad or touchscreen, so I chose to use Overflow-X: Scroll, and optimize for scroll wheels.My idea is providing a responsive interaction solution that automatically selects the scrolling controls based on the input device. In the latest version of ",
          e(n, {
            href: "https://framer.com/projects/jayzhushi.com",
            nodeId: "TYK5zFM4J",
            openInNewTab: !1,
            smoothScroll: !1,
            children: e("a", { children: "jayzhushi.com" }),
          }),
          ", this solution will be enabled by default on Windows.",
        ],
      }),
      e("h3", { children: "Back to top (with soomth delay)" }),
      e("p", {
        children:
          "The case provides a button component that smoothly scrolls the page to the top when clicked. And the button can be set with a delay time to play an animation. The case provides Code Component and Override.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,frmy9AMWcPI4rScs8pBSkQ8ZNm4.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png",
        srcSet:
          "https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png?scale-down-to=512 512w,https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "If the button component is responsive, then using Override (Effect-Toggle_BackTop) would be a better choice. Just change the number 200 in the code to the number you want, in milliseconds.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,0Ijxf1MESNISbfHHTs6MHC5EDys.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png",
        srcSet:
          "https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png?scale-down-to=512 512w,https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", { children: "Page Transition (deprecated)" }),
      e("p", {
        children:
          "The last case is about page transitions. I used an old Framer feature to add a delay before jumping to another page, during this time some exit animations can be added to the element.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,fID4psnuFY6FUGganf7UddKuBs.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png",
        srcSet:
          "https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png?scale-down-to=512 512w,https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "In older versions of Framer, Frames were able to add a delay time when adding an interaction event, but this feature is now deprecated. By placing a button or link in this Frame and adding a delay time, all we need to do is add an animation that plays within that time.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,avC6kGY5uZgHkINCZAWQTXkM1w.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png",
        srcSet:
          "https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png?scale-down-to=512 512w,https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "In Override, we apply Transition_Elements to elements that need to play an exit animation and Transition_Toggle to links or buttons.",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,gBLxVgt9GV6kWycm6wWiCiZfV3E.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png",
        srcSet:
          "https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png?scale-down-to=512 512w,https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "In Page_Transition.tsx, you need to make sure that the delay time in setTimeout is close to the time of the link (usually a bit longer), which ensures that the elements on the next page are displayed properly (if the exit animation is used).",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,fYZvauvYvJHdvoBe2JLZpxQxko.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png",
        srcSet:
          "https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png?scale-down-to=512 512w,https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "Framer updated the page transition feature when I built the site, so I don't recommend adding an exit effect this way anymore, as it's troublesome and leads to errors.",
      }),
      e("h2", { children: "At the end" }),
      e("p", {
        children:
          "I used to research many conceptual effects in my daily work, which were filtered and used in my personal website. However, these effects are realized in an unprofessional way, which may cause you to encounter some errors when using the above examples. If you are a React expert and have a better approach, please feel free to talk to me.",
      }),
    ],
  }),
  d = t(r, {
    children: [
      t("p", {
        children: [
          "\u8FD9\u7BC7\u6587\u7AE0\u7528\u6765\u5206\u4EAB\u51E0\u4E2A\u6211\u5728\u6784\u5EFA ",
          e(n, {
            href: "jayzhushi.com",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "jayzhushi.com" }),
          }),
          " \u65F6\u7528\u5230\u7684\u7EC4\u4EF6\u6848\u4F8B\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1A",
        ],
      }),
      t("ul", {
        children: [
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children: "Sound Button\xA0 - \u6309\u94AE\u97F3\u6548 ",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children: "Magic Hover - \u78C1\u6027\u60AC\u6D6E",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children: "Layout Switch - \u5E03\u5C40\u5207\u6362",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children:
                "Horizontal Scroll - \u54CD\u5E94\u5F0F\u6C34\u5E73\u6EDA\u52A8",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children: "Back to top - \u5EF6\u8FDF\u56DE\u5230\u9876\u90E8",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children:
                "Page Transition - \u9875\u9762\u8FC7\u6E21\uFF08\u5DF2\u5E9F\u5F03\uFF09",
            }),
          }),
        ],
      }),
      e("p", {
        children:
          "\u8BBF\u95EE Demo \u5E76\u83B7\u53D6\u9879\u76EE\u6587\u4EF6\uFF1A",
      }),
      t("p", {
        children: [
          e(n, {
            href: "https://jayzhushisutilities.framer.website",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "\u8BBF\u95EE Demo  " }),
          }),
          "\uFF5C ",
          e(n, {
            href: "https://framer.com/projects/new?duplicate=aL0im3RM5LZlo5bImq6g",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "Remix Link" }),
          }),
        ],
      }),
      e("h3", { children: "Sound Button\xA0 - \u6309\u94AE\u97F3\u6548 " }),
      e("p", {
        children:
          "\u8FD9\u4E2A\u6848\u4F8B\u5C55\u793A\u4E3A\u4EFB\u610F\u6309\u94AE\u6DFB\u52A0\u60AC\u6D6E\u6216\u70B9\u51FB\u65F6\u64AD\u653E\u58F0\u97F3\u7684\u6548\u679C\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u6848\u4F8B\u4E2D\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F00\u5173\u6765\u51B3\u5B9A\u662F\u5426\u542F\u7528\u97F3\u6548\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,oqsvc76iWMeIDiKAOR5ScaMLg.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png",
        srcSet:
          "https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png?scale-down-to=512 512w,https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/oqsvc76iWMeIDiKAOR5ScaMLg.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u5728 Overrider \u4E2D\u6839\u636E\u5177\u4F53\u7684\u4F7F\u7528\u60C5\u51B5\u6765\u5206\u914D\u52A8\u4F5C\uFF0C\u6BCF\u4E2A\u6761\u76EE\u5BF9\u5E94\u7684\u529F\u80FD\u5982\u4E0B\uFF1A",
      }),
      t("ul", {
        children: [
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children: "Sound_Click\uFF1A\u70B9\u51FB\u97F3\u6548",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children: "Sound_Hover\uFF1A\u60AC\u6D6E\u97F3\u6548",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children:
                "Sound_Hover_Click\uFF1A\u60AC\u6D6E\u4E0E\u70B9\u51FB\u97F3\u6548 ",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children:
                "Switch_SoundoOff\uFF1A\u5F00\u5173\u7684\u9759\u97F3\u6309\u94AE",
            }),
          }),
          e("li", {
            "data-preset-tag": "p",
            children: e("p", {
              children:
                "Switch_SoundOn\uFF1A\u5F00\u5173\u7684\u53D6\u6D88\u9759\u97F3\u6309\u94AE",
            }),
          }),
        ],
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,13bn2VPCBzf7BAGKbZBktArtU.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png",
        srcSet:
          "https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png?scale-down-to=512 512w,https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/13bn2VPCBzf7BAGKbZBktArtU.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u5728 Code \u7684 Sound.tsx \u6587\u4EF6\u4E2D\uFF0C\u7F16\u8F91 sound \u4E2D\u7684\u5185\u5BB9\u53EF\u4FEE\u6539\u97F3\u9891\u6587\u4EF6\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4ECE\u97F3\u9891\u7F51\u7AD9\u83B7\u53D6\u4E0B\u8F7D\u94FE\u63A5\u62F7\u8D1D\u4E8E\u6B64\uFF0C\u6216\u5C06\u97F3\u9891\u6587\u4EF6\u4E0A\u4F20\u5230 Github \u6216\u4E91\u7AEF\u5B58\u50A8\u518D\u83B7\u53D6\u8D44\u6E90\u94FE\u63A5\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,jks3d0zFxqYQZ7H0548URSL7usM.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png",
        srcSet:
          "https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png?scale-down-to=512 512w,https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/jks3d0zFxqYQZ7H0548URSL7usM.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", { children: "Magic Hover - \u78C1\u6027\u60AC\u6D6E" }),
      e("p", {
        children:
          "\u8FD9\u4E2A\u6307\u9488\u60AC\u505C\u65F6\u7684\u78C1\u6027\u6548\u679C\u4E00\u76F4\u4EE5\u6765\u90FD\u975E\u5E38\u53D7\u6B22\u8FCE\uFF0C\u8FD9\u6BB5 Override \u4EE3\u7801\u80FD\u591F\u81EA\u52A8\u83B7\u53D6\u4F7F\u7528\u5143\u7D20\u7684\u5C3A\u5BF8\u5E76\u6DFB\u52A0\u76F8\u5173\u6548\u679C\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,peFoXxlgPUYFYn5syWypSmhooWY.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png",
        srcSet:
          "https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png?scale-down-to=512 512w,https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/peFoXxlgPUYFYn5syWypSmhooWY.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "\u5728 Override \u6587\u4EF6 Effect - MagicHover \u4E2D\uFF0C\u627E\u5230 offsetX \u4E0E offsetY \u6240\u5728\u884C\u3002\u5176\u4E2D\uFF0C [-8, 8] \u4EE3\u8868\u5143\u7D20\u5728\u9F20\u6807\u60AC\u6D6E\u65F6\u80FD\u591F\u79FB\u52A8\u7684\u8303\u56F4\u662F 8 \u50CF\u7D20\uFF08\u4E0A\u4E0B\u5DE6\u53F3\uFF09\uFF0C\u4FEE\u6539\u8FD9\u4E2A\u503C\u80FD\u591F\u6539\u53D8\u9F20\u6807\u60AC\u6D6E\u65F6\u5143\u7D20\u7684\u79FB\u52A8\u8303\u56F4\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,QdTAsvRn9hcoZkRUDpfuv5PLmkc.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png",
        srcSet:
          "https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png?scale-down-to=512 512w,https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/QdTAsvRn9hcoZkRUDpfuv5PLmkc.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", { children: "Layout Switch - \u5E03\u5C40\u5207\u6362" }),
      t("p", {
        children: [
          "\u5728\u6784\u5EFA ",
          e(n, {
            href: "jayzhushi.com",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "jayzhushi.com" }),
          }),
          " \u65F6\uFF0C\u6211\u7279\u522B\u559C\u6B22\u6A2A\u5411\u6EDA\u52A8\u7684\u6982\u5FF5\u3002\u4F46\u4E3A\u4E86\u4F7F\u7F51\u7AD9\u66F4\u5177\u5305\u5BB9\u6027\uFF0C\u6211\u63D0\u4F9B\u4E86\u4E24\u79CD\u5E03\u5C40\u5207\u6362\u7684\u89E3\u51B3\u65B9\u6848\u3002",
        ],
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,uPqvIRsD3yXjFZkZoCFKnaVD5Y.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png",
        srcSet:
          "https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png?scale-down-to=512 512w,https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/uPqvIRsD3yXjFZkZoCFKnaVD5Y.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "\u5728 Override \u4E2D\uFF0C\u6211\u5C06 Layout \u7528\u4E8E\u7F51\u683C\u5185\u7684\u5143\u7D20\uFF0C\u4EE5\u4FDD\u8BC1\u5B83\u4EEC\u5728\u5207\u6362\u5E03\u5C40\u65F6\u6709\u52A8\u753B\uFF0CLayout_Frame \u7528\u4E8E\u7F51\u683C\u672C\u8EAB\u3002Layout_Viewport \u7528\u4E8E\u7F51\u683C\u7684\u7236\u7EA7\u56FE\u5C42\uFF0C\u5B83\u63A7\u5236\u7F51\u683C\u5728\u4ECE\u6A2A\u5411\u8F6C\u53D8\u4E3A\u7EB5\u5411\u65F6\uFF0C\u5C06\u7F51\u683C\u4ECE\u9760\u5DE6\u8F6C\u6362\u4E3A\u5C45\u4E2D\u3002\u6700\u540E\uFF0C\u5C06 Layout_Toogle \u7528\u4E8E\u63A7\u5236\u7F51\u683C\u53D8\u5316\u7684\u6309\u94AE\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        srcSet:
          "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=512 512w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u53E6\u5916\uFF0C\u5728\u4F7F\u7528\u8FD9\u4E2A Override \u6587\u4EF6\u65F6\uFF0C\u6211\u4ECD\u7136\u53EF\u4EE5\u5229\u7528 Framer \u7684 Layout \u9762\u677F\u6765\u8C03\u6574\u5C5E\u6027\uFF08\u884C\u548C\u5217\u5C5E\u6027\u4E0D\u4F1A\u751F\u6548\uFF09\u3002\u5728 Advanced \u4E2D\uFF0C\u4F7F\u7528 Width \u4E0E Height \u6765\u63A7\u5236\u5185\u5BB9\u7684\u5C3A\u5BF8\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,bjeBl7PCE2TcZbgDlnJgVZ84qBY.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png",
        srcSet:
          "https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png?scale-down-to=512 512w,https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/bjeBl7PCE2TcZbgDlnJgVZ84qBY.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u5982\u679C\u4F60\u60F3\u8981\u8C03\u6574\u7F51\u683C\u7684\u5217\u6570\uFF0C\u8BF7\u4FEE\u6539 Layout.tsx \u4E2D\u7684 Layout_Frame \u7EC4\u4EF6\u3002\u627E\u5230 grid \u4E2D\u7684 gridTemplateColumns\uFF0C\u4FEE\u6539 repeat( \u540E\u7684\u6570\u5B57\u5373\u53EF\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,d7WDqupwFvjs7XIoefqozfsdQ.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png",
        srcSet:
          "https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/d7WDqupwFvjs7XIoefqozfsdQ.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", {
        children:
          "Horizontal Scroll - \u54CD\u5E94\u5F0F\u6C34\u5E73\u6EDA\u52A8",
      }),
      e("p", {
        children:
          "\u8FD9\u4E2A\u6848\u4F8B\u5141\u8BB8\u6211\u4EEC\u4EC5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u6765\u63A7\u5236\u6C34\u5E73\u6EDA\u52A8\u5E03\u5C40\uFF0C\u4F46\u8FD9\u4E2A\u6548\u679C\u4ECD\u7136\u5904\u4E8E\u5B9E\u9A8C\u9636\u6BB5\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,vTfiM9UtZjuNnHuNRrDKmlvJY.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png",
        srcSet:
          "https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png?scale-down-to=512 512w,https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vTfiM9UtZjuNnHuNRrDKmlvJY.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "\u5728\u4EFB\u4F55\u9700\u8981\u4F7F\u7528\u6B64\u6548\u679C\u7684\u56FE\u5C42\u4E0A\u6DFB\u52A0 Override - Layout_Wheel_Control \u5373\u53EF\uFF0C\u4E00\u822C\u8FD9\u4E2A\u56FE\u5C42\u4E5F\u4F1A\u5E26\u6709 Overflow: Scroll \u7684\u5C5E\u6027\uFF0C\u800C Layout_Wheel_Toggle \u5219\u8FD0\u7528\u4E8E\u5F00\u5173\u6B64\u529F\u80FD\u7684\u7EC4\u4EF6\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png",
        srcSet:
          "https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=512 512w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/tqO53Ws7WFmQR56hLRdW1NvxSKc.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u5C06\u8FD9\u4E2A\u6848\u4F8B\u4E0E\u5E03\u5C40\u5207\u6362\u4E00\u8D77\u4F7F\u7528\uFF0C\u90A3\u9700\u8981\u5728\u5207\u6362\u5230\u6B63\u5E38\u7684\u5782\u76F4\u5E03\u5C40\u65F6\u505C\u7528\u6B64\u529F\u80FD\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5F71\u54CD\u6B63\u5E38\u7684\u6EDA\u52A8\u6548\u679C\u3002",
      }),
      t("p", {
        children: [
          "\u53E6\u5916\u6211\u60F3\u8BF4\u7684\u662F\uFF0C\u867D\u7136\u5728 Framer \u4E2D\u53EF\u4EE5\u4F7F\u7528 Scroll Transform \u6765\u5B9E\u73B0\u7C7B\u4F3C\u7684\u6548\u679C\uFF08\u76F8\u5F53\u4E8E\u4F7F\u7528\u6EDA\u8F6E\u6765\u63A7\u5236\u56FE\u5C42\u7684 x \u503C\uFF09\uFF0C\u4F46\u8FD9\u53EF\u80FD\u5BFC\u81F4\u5728\u89E6\u6478\u677F\u6216\u89E6\u6478\u5C4F\u8BBE\u5907\u4E0A\u624B\u6307\u5DE6\u53F3\u6ED1\u52A8\u65E0\u6548\uFF0C\u56E0\u6B64\u6211\u9009\u62E9\u4F7F\u7528 Overflow-X\uFF1AScroll \u7684\u65B9\u6848\uFF0C\u518D\u9488\u5BF9\u6EDA\u8F6E\u8FDB\u884C\u4F18\u5316\u3002\u6211\u7684\u60F3\u6CD5\u662F\u80FD\u591F\u63D0\u4F9B\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u4EA4\u4E92\u65B9\u6848\uFF0C\u53EF\u4EE5\u6839\u636E\u8F93\u5165\u8BBE\u5907\u81EA\u52A8\u9009\u62E9\u6EDA\u52A8\u7684\u63A7\u5236\u65B9\u5F0F\u3002\u5728\u6700\u65B0\u7248\u672C\u7684 ",
          e(n, {
            href: " jayzhushi.com",
            nodeId: "TYK5zFM4J",
            openInNewTab: !0,
            smoothScroll: !1,
            children: e("a", { children: "jayzhushi.com" }),
          }),
          " \u4E2D\uFF0C\u5728 Windows \u4E0A\u4F1A\u9ED8\u8BA4\u542F\u7528\u8FD9\u4E2A\u65B9\u6848\u3002",
        ],
      }),
      e("h3", {
        children: "Back to top \xA0- \u5EF6\u8FDF\u56DE\u5230\u9876\u90E8",
      }),
      e("p", {
        children:
          "\u8FD9\u4E2A\u6848\u4F8B\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6309\u94AE\u7EC4\u4EF6\uFF0C\u5B83\u80FD\u591F\u5728\u70B9\u51FB\u65F6\u5C06\u9875\u9762\u5E73\u6ED1\u5730\u6EDA\u52A8\u5230\u9876\u90E8\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5EF6\u8FDF\u65F6\u95F4\u4EE5\u64AD\u653E\u52A8\u753B\u3002\u6848\u4F8B\u63D0\u4F9B\u4E86Code Component\u4E0EOverride\u7248\u672C\uFF0C\u53EF\u6309\u9700\u4F7F\u7528\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,frmy9AMWcPI4rScs8pBSkQ8ZNm4.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png",
        srcSet:
          "https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png?scale-down-to=512 512w,https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/frmy9AMWcPI4rScs8pBSkQ8ZNm4.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "\u5982\u679C\u7EC4\u4EF6\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u90A3\u4F7F\u7528 Override\uFF08Effect-Toggle_BackTop\uFF09\u4F1A\u662F\u4E00\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u3002\u4FEE\u6539\u4EE3\u7801\u4E2D 200 \u7684\u6570\u5B57\u4E3A\u4F60\u60F3\u8981\u7684\u6570\u5B57\u5373\u53EF\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,0Ijxf1MESNISbfHHTs6MHC5EDys.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png",
        srcSet:
          "https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png?scale-down-to=512 512w,https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/0Ijxf1MESNISbfHHTs6MHC5EDys.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("h3", {
        children:
          "Page Transition\xA0- \u9875\u9762\u8FC7\u6E21\uFF08\u5DF2\u5E9F\u5F03\uFF09",
      }),
      e("p", {
        children:
          "\u6700\u540E\u4E00\u4E2A\u6848\u4F8B\u662F\u6709\u5173\u4E8E\u9875\u9762\u8FC7\u6E21\u3002\u6211\u4F7F\u7528\u4E86\u65E7\u7248 Framer \u7684\u7279\u5F81\u5728\u8DF3\u8F6C\u5230\u5176\u4ED6\u9875\u9762\u4E4B\u524D\u6DFB\u52A0\u4E86\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u5728\u8FD9\u6BB5\u65F6\u95F4\u5185\u53EF\u4EE5\u4E3A\u5143\u7D20\u6DFB\u52A0\u4E00\u4E9B\u9000\u51FA\u52A8\u753B\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,fID4psnuFY6FUGganf7UddKuBs.png",
        "data-framer-height": "1600",
        "data-framer-width": "2400",
        height: "800",
        src: "https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png",
        srcSet:
          "https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png?scale-down-to=512 512w,https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/fID4psnuFY6FUGganf7UddKuBs.png 2400w",
        style: { aspectRatio: "2400 / 1600" },
        width: "1200",
      }),
      e("p", {
        children:
          "\u5728\u65E7\u7248\u7684 Framer \u4E2D\uFF0CFrame \u5728\u6DFB\u52A0\u4EA4\u4E92\u4E8B\u4EF6\u65F6\u80FD\u591F\u6DFB\u52A0\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u4F46\u73B0\u5728\u8FD9\u9879\u529F\u80FD\u5DF2\u7ECF\u88AB\u5E9F\u5F03\u3002\u5C06\u6309\u94AE\u6216\u94FE\u63A5\u653E\u5728\u8FD9\u4E2A Frame \u4E2D\u5E76\u6DFB\u52A0\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u53EA\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u5728\u6B64\u65F6\u95F4\u5185\u64AD\u653E\u7684\u52A8\u753B\u5316\u5373\u53EF\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,avC6kGY5uZgHkINCZAWQTXkM1w.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png",
        srcSet:
          "https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png?scale-down-to=512 512w,https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/avC6kGY5uZgHkINCZAWQTXkM1w.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u5728 Override \u4E2D\uFF0C\u6211\u4EEC\u5C06 Transition_Elements \u8FD0\u7528\u5230\u9700\u8981\u64AD\u653E\u9000\u51FA\u52A8\u753B\u7684\u5143\u7D20\u4E2D\uFF0C Transition_Toggle \u8FD0\u7528\u5230\u94FE\u63A5\u6216\u6309\u94AE\u4E0A\u3002\xA0",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,gBLxVgt9GV6kWycm6wWiCiZfV3E.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png",
        srcSet:
          "https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png?scale-down-to=512 512w,https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/gBLxVgt9GV6kWycm6wWiCiZfV3E.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u5728 Page_Transition.tsx \u4E2D\uFF0C\u9700\u8981\u4FDD\u8BC1 setTimeout \u4E2D\u7684\u5EF6\u8FDF\u65F6\u95F4\u4E0E\u94FE\u63A5\u8DF3\u8F6C\u7684\u65F6\u95F4\u63A5\u8FD1\uFF08\u4E00\u822C\u4F1A\u4E45\u4E00\u70B9\uFF09\uFF0C\u8FD9\u624D\u80FD\u4FDD\u8BC1\u4E0B\u4E2A\u9875\u9762\u7684\u5143\u7D20\u6B63\u5E38\u663E\u793A\uFF08\u5982\u679C\u6709\u7528\u5230\u9000\u51FA\u52A8\u753B\uFF09\u3002",
      }),
      e("img", {
        alt: "",
        className: "framer-image",
        "data-framer-asset":
          "data:framer/asset-reference,fYZvauvYvJHdvoBe2JLZpxQxko.png",
        "data-framer-height": "1600",
        "data-framer-width": "2560",
        height: "800",
        src: "https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png",
        srcSet:
          "https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png?scale-down-to=512 512w,https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/fYZvauvYvJHdvoBe2JLZpxQxko.png 2560w",
        style: { aspectRatio: "2560 / 1600" },
        width: "1280",
      }),
      e("p", {
        children:
          "\u5728\u6211\u6784\u5EFA\u7F51\u7AD9\u65F6\uFF0CFramer \u5DF2\u7ECF\u66F4\u65B0\u4E86\u9875\u9762\u8FC7\u6E21\u7279\u6027\uFF0C\u56E0\u6B64\u6211\u4E0D\u5EFA\u8BAE\u518D\u4F7F\u7528\u8FD9\u4E2A\u65B9\u5F0F\u6DFB\u52A0\u9000\u51FA\u6548\u679C\uFF0C\u56E0\u4E3A\u8FD9\u5F88\u7E41\u7410\u4E14\u6613\u5BFC\u81F4\u9519\u8BEF\u3002",
      }),
      e("h2", { children: "\u6700\u540E" }),
      e("p", {
        children:
          "\u6211\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u5E38\u5E38\u7814\u7A76\u8BB8\u591A\u6982\u5FF5\u6548\u679C\uFF0C\u8FD9\u4E9B\u6548\u679C\u7ECF\u8FC7\u7B5B\u9009\u540E\u88AB\u6211\u7528\u4E8E\u4E2A\u4EBA\u7F51\u7AD9\u4E2D\u3002\u7136\u800C\uFF0C\u8FD9\u4E9B\u6548\u679C\u7684\u5B9E\u73B0\u65B9\u5F0F\u5E76\u4E0D\u4E13\u4E1A\uFF0C\u53EF\u80FD\u5BFC\u81F4\u4F60\u5728\u4F7F\u7528\u4EE5\u4E0A\u6848\u4F8B\u65F6\u9020\u6210\u4E00\u4E9B\u9519\u8BEF\u3002\u5982\u679C\u4F60\u662F\u4E00\u4F4D React \u4E13\u5BB6\u4E14\u6709\u66F4\u597D\u7684\u5B9E\u73B0\u65B9\u6848\uFF0C\u6B22\u8FCE\u4E0E\u6211\u8FDB\u4E00\u6B65\u6C9F\u901A\u3002",
      }),
    ],
  }),
  l = e(r, {
    children: e("p", {
      children:
        "This effect shows the process of AI detecting a photo (subject recognition, segmentation and background generation). By generating movement and depth of field effects for photos, any of the user's photos can become stunning wallpapers.",
    }),
  }),
  m = e(r, {
    children: e("p", {
      children:
        "\u8FD9\u4E2A\u6548\u679C\u5C55\u793A\u4E86AI\u68C0\u6D4B\u7167\u7247\u7684\u8FC7\u7A0B\uFF08\u4E3B\u4F53\u8BC6\u522B\u3001\u5206\u5272\u4E0E\u751F\u6210\u80CC\u666F\uFF09\u3002\u901A\u8FC7\u4E3A\u7167\u7247\u751F\u6210\u79FB\u52A8\u4E0E\u666F\u6DF1\u6548\u679C\uFF0C\u7528\u6237\u7684\u4EFB\u4F55\u4E00\u5F20\u7167\u7247\u90FD\u80FD\u591F\u6210\u4E3A\u4EE4\u4EBA\u9707\u64BC\u7684\u52A8\u6001\u58C1\u7EB8\u3002",
    }),
  }),
  g = e(r, {
    children: e("p", {
      children:
        "This keycap is inspired by real life. When the mouse hovers over it, you can see 3D transformations and subtle lighting effects.",
    }),
  }),
  u = e(r, {
    children: e("p", {
      children:
        "\u8FD9\u4E2A\u952E\u5E3D\u7684\u8BBE\u8BA1\u7075\u611F\u6765\u81EA\u73B0\u5B9E\u751F\u6D3B\uFF0C\u5F53\u9F20\u6807\u60AC\u505C\u5728\u4E0A\u9762\u65F6\uFF0C\u4F60\u53EF\u4EE5\u770B\u52303D\u8F6C\u6362\u548C\u5FAE\u5999\u7684\u5149\u7EBF\u6548\u679C\u3002",
    }),
  }),
  f = e(r, {
    children: e("p", {
      children:
        "The dynamic effect of this card draws from real-life experiences; when people flip an object, they usually pick it up first. While the card is stationary, there is a subtle animation that hints at its flipping functionality. Using Framer\u2019s sequence animation feature, I implemented this effect on an earlier version of my website. With the release of the new version of Framer, creating similar interactions has become effortless.",
    }),
  }),
  w = e(r, {
    children: e("p", {
      children:
        "\u8FD9\u4E2A\u5361\u7247\u7684\u52A8\u6001\u6548\u679C\u501F\u9274\u4E86\u73B0\u5B9E\u751F\u6D3B\u7684\u7ECF\u9A8C\uFF0C\u5F53\u4EBA\u4EEC\u7FFB\u8F6C\u4E00\u4E2A\u7269\u4F53\u65F6\uFF0C\u901A\u5E38\u4F1A\u5148\u5C06\u5176\u62FF\u8D77\u3002\u800C\u5728\u5361\u7247\u9759\u6B62\u65F6\uFF0C\u4F1A\u6709\u5C0F\u5E45\u5EA6\u7684\u52A8\u753B\uFF0C\u6697\u793A\u5176\u7FFB\u8F6C\u529F\u80FD\u3002\u501F\u52A9 Framer \u7684\u5E8F\u5217\u52A8\u753B\u529F\u80FD\uFF0C\u6211\u5728\u65E9\u671F\u7684\u7F51\u7AD9\u4E2D\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u6548\u679C\u3002\u968F\u7740\u65B0\u7248 Framer \u7684\u53D1\u5E03\uFF0C\u73B0\u5728\u5236\u4F5C\u7C7B\u4F3C\u7684\u4EA4\u4E92\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002",
    }),
  }),
  y = e(r, {
    children: e("p", {
      children:
        "Unlike the flat slideshow effects found on many websites, this card swap effect draws from real-life experiences. All the cards switch without any collisions or conflicts, and the slight rotation during the switch makes the cards appear as if they are being held in hand.",
    }),
  }),
  v = e(r, {
    children: e("p", {
      children:
        "\u4E0D\u540C\u4E8E\u8BB8\u591A\u7F51\u7AD9\u4E2D\u6241\u5E73\u5316\u7684\u5E7B\u706F\u7247\u6548\u679C\uFF0C\u8FD9\u4E2A\u5361\u7247\u4EA4\u6362\u6548\u679C\u501F\u9274\u4E86\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u7ECF\u9A8C\u3002\u6240\u6709\u5361\u7247\u5728\u5207\u6362\u65F6\u4E0D\u4F1A\u53D1\u751F\u78B0\u649E\u6216\u51B2\u7A81\uFF0C\u800C\u5207\u6362\u65F6\u7684\u5C0F\u5E45\u5EA6\u65CB\u8F6C\u8BA9\u5361\u7247\u770B\u8D77\u6765\u50CF\u662F\u5728\u624B\u4E2D\u4E00\u6837\u3002",
    }),
  }),
  b = t(r, {
    children: [
      e("p", {
        children:
          "In the second post, we will use real API data to make a weather widget. We will get the API from OpenWeather and then use it by importing \u201Copenweather-api-node\u201D in Override, using the NPM import feature of Framer.",
      }),
      e("h2", { children: "The Weather UI" }),
      e("p", {
        children:
          "First, we need to create a UI for the weather component, which contains the city, weather, weather symbols, temperature and background. In this case, we will create the weather symbol and background as separate components, so that we can easily modify the style of the widget.",
      }),
      e("p", {
        children:
          "![create-the-ui](https://framerusercontent.com/modules/Qm3gDXyCxP4zqU0divrP/rPTUyhRM41A3CVPn2Imk/assets/2048/UsM7oZQywFyhM078Y5Bw7n63ztA.png)",
      }),
      e("h3", { children: "Weather symbol and background" }),
      e("p", {
        children:
          "Create weather symbols and backgrounds as separate components and name **Variant** the corresponding weather (these weather names are the same as the names provided by the API).",
      }),
      e("p", {
        children:
          "![create-the-symbol](https://framerusercontent.com/modules/Qm3gDXyCxP4zqU0divrP/rPTUyhRM41A3CVPn2Imk/assets/2048/32n4YmVdFJnCJtZYxBEsWXww.png)",
      }),
      e("p", {
        children:
          "![create-the-background](https://framerusercontent.com/modules/Qm3gDXyCxP4zqU0divrP/rPTUyhRM41A3CVPn2Imk/assets/2048/EerSQCn48ZYUROiPiEVJf2xetjI.png)",
      }),
      e("p", {
        children:
          "Here I've used three weather as an example, you can skip the process of designing the UI by copying this component directly into the Framer.",
      }),
      e("h2", { children: "Override" }),
      e("p", {
        children:
          "Create a new Override file and import React and OpenWeatherAPI. we can find out how to use the package in the NPM page of [openweather-api-node].",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'import * as React from "react"' }),
      e("p", { children: 'import OpenWeatherAPI from "openweather-api-node"' }),
      e("p", { children: 'import type { ComponentType } from "react"' }),
      e("p", {
        children: "export function Temperature(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", {
        children:
          '        const [data, setData] = React.useState({ weather: "", tempture: 0 })',
      }),
      e("p", { children: "        return <Component {...props} />" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "As we are using the OpenWeather API, we need to get a Key to allow OpenWeather to allow us to access the data. Before we can do that, let's configure Override completely and then go to OpenWeather and request the Key.",
      }),
      e("h3", { children: "Getting the current temperature" }),
      e("p", {
        children:
          'We can get the current weather data by using "weather.getCurrent()" in which " weather.temp.cur" will give us the current temperature data.',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: " React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.temp.cur)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          'The API is more precise (it is accurate to a few decimal places), so we can use "toFixed(0)" to display only integers.',
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "export function Temperature(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", { children: "        const [data, setData] = React.useState(0)" }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.temp.cur)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data.toFixed(0)} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("h3", { children: "Getting the current weather" }),
      e("p", {
        children:
          'Again, "weather.main" provides the name of the current weather, e.g. clear, clouds, mist, rain, etc.  We use this data to display the current weather and control **Variant**.',
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "export function Weather(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", {
        children: '        const [data, setData] = React.useState("Loading")',
      }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.main)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data} variant={data} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("h3", { children: "API Key" }),
      e("p", {
        children:
          "First we need to register an [OpenWeather] account and then go to [OpenWeather/My API keys] to see the API Key. if you don't see the Key, you can generate a new one on the right hand side.",
      }),
      e("p", {
        children:
          "![apply-the-keys](https://framerusercontent.com/images/mLa2JKsz4gwuqF0fhoKJIzNyeo.png?scale-down-to=2048)",
      }),
      e("p", {
        children:
          'Paste the key directly into "weather.setKey("Your Key Here")".',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("b679............")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.main)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Finally, connect the Override to the layer. We have connected \u201COverride/Tempture\u201D to the temperature text and \u201COverride/Weather\u201D to the weather text, logo and background.",
      }),
      e("p", {
        children:
          "![apply-the-overrides](https://framerusercontent.com/images/1uvS3x6z0KDOGmED7vSBz328SA.png?scale-down-to=2048)",
      }),
      e("p", {
        children:
          "Previewing the component, you can see that all the data has started to change and a realistic weather widget is now complete.",
      }),
      e("p", { children: "### The Full Code" }),
      e("p", { children: "~~~" }),
      e("p", { children: 'import * as React from "react"' }),
      e("p", { children: 'import OpenWeatherAPI from "openweather-api-node"' }),
      e("p", { children: 'import type { ComponentType } from "react"' }),
      e("p", {
        children: "export function Temperature(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", { children: "        const [data, setData] = React.useState(0)" }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.temp.cur)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data.toFixed(0)} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Weather(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", {
        children: '        const [data, setData] = React.useState("Loading")',
      }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.main)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data} variant={data} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
    ],
  }),
  S = t(r, {
    children: [
      e("p", {
        children:
          "\u5728\u7B2C\u4E8C\u7BC7\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u771F\u5B9E\u7684 API \u6570\u636E\u5236\u4F5C\u5929\u6C14\u5C0F\u7EC4\u4EF6\u3002\u6211\u4EEC\u5C06\u4ECE OpenWeather \u83B7\u53D6 API\uFF0C\u7136\u540E\u5229\u7528 Framer \u7684 NPM import \u7279\u6027\uFF0C\u5728 Override \u4E2D\u5BFC\u5165 \u201Copenweather-api-node\u201D \u6765\u4F7F\u7528 API\u3002",
      }),
      e("h2", { children: "\u521B\u5EFA UI" }),
      e("p", {
        children:
          "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5929\u6C14\u7EC4\u4EF6\u7684UI\uFF0C\u5B83\u5305\u542B\u57CE\u5E02\u3001\u5929\u6C14\u3001\u5929\u6C14\u6807\u5FD7\u3001\u6E29\u5EA6\u4E0E\u80CC\u666F\u3002\u5176\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5929\u6C14\u6807\u5FD7\u4E0E\u80CC\u666F\u5355\u72EC\u5EFA\u7ACB\u4E3A\u65B0\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u6211\u4EEC\u4FEE\u6539\u5C0F\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002",
      }),
      e("p", {
        children:
          "![create-the-ui](https://framerusercontent.com/modules/Qm3gDXyCxP4zqU0divrP/rPTUyhRM41A3CVPn2Imk/assets/2048/UsM7oZQywFyhM078Y5Bw7n63ztA.png)",
      }),
      e("h3", {
        children: "\u5929\u6C14\u6807\u5FD7\u4E0E\u80CC\u666F\u56FE\u5C42",
      }),
      e("p", {
        children:
          "\u5C06\u5929\u6C14\u6807\u5FD7\u4E0E\u80CC\u666F\u5206\u522B\u5EFA\u7ACB\u4E3A\u7EC4\u4EF6\uFF0C\u5E76\u5C06 **Variant** \u547D\u540D\u4E3A\u5BF9\u5E94\u7684\u5929\u6C14\uFF08\u8FD9\u4E9B\u5929\u6C14\u540D\u79F0\u4E0EAPI\u63D0\u4F9B\u7684\u540D\u79F0\u76F8\u540C\uFF09\u3002",
      }),
      e("p", {
        children:
          "![create-the-symbol](https://framerusercontent.com/modules/Qm3gDXyCxP4zqU0divrP/rPTUyhRM41A3CVPn2Imk/assets/2048/32n4YmVdFJnCJtZYxBEsWXww.png)",
      }),
      e("p", {
        children:
          "![create-the-background](https://framerusercontent.com/modules/Qm3gDXyCxP4zqU0divrP/rPTUyhRM41A3CVPn2Imk/assets/2048/EerSQCn48ZYUROiPiEVJf2xetjI.png)",
      }),
      e("p", {
        children:
          "\u8FD9\u91CC\u6211\u4EE5\u4E09\u4E2A\u5929\u6C14\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u590D\u5236\u8FD9\u4E2A\u7EC4\u4EF6\u5230 Framer \u4E2D\u6765\u8DF3\u8FC7\u8BBE\u8BA1 UI \u7684\u8FC7\u7A0B\u3002",
      }),
      e("h2", { children: "Override" }),
      e("p", {
        children:
          "\u65B0\u5EFA\u4E00\u4E2A Override \u6587\u4EF6\uFF0C\u5E76\u5BFC\u5165 React \u4E0E OpenWeatherAPI\u3002\u5728[openweather-api-node]\u7684 NPM \u9875\u9762\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u627E\u5230\u5305\u7684\u4F7F\u7528\u65B9\u5F0F\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'import * as React from "react"' }),
      e("p", { children: 'import OpenWeatherAPI from "openweather-api-node"' }),
      e("p", { children: 'import type { ComponentType } from "react"' }),
      e("p", {
        children: "export function Temperature(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", {
        children:
          '        const [data, setData] = React.useState({ weather: "", tempture: 0 })',
      }),
      e("p", { children: "        return <Component {...props} />" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u7531\u4E8E\u6211\u4EEC\u4F7F\u7528\u4E86OpenWeather API\uFF0C\u6211\u4EEC\u9700\u8981\u83B7\u5F97\u4E00\u4E2A Key \u6765\u8BA9 OpenWeather \u5141\u8BB8\u6211\u4EEC\u8BBF\u95EE\u6570\u636E\u3002\u5728\u8FD9\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u5C06 Override \u914D\u7F6E\u5B8C\u6574\uFF0C\u7136\u540E\u518D\u5230 OpenWeather \u7533\u8BF7 Key\u3002",
      }),
      e("h3", { children: "\u83B7\u53D6\u5F53\u524D\u6E29\u5EA6" }),
      e("p", {
        children:
          "\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 \u201Cweather.getCurrent()\u201D \u6765\u83B7\u53D6\u5F53\u524D\u7684\u5929\u6C14\u6570\u636E\uFF0C\u5176\u4E2D \u201Cweather.temp.cur\u201D \u4F1A\u63D0\u4F9B\u5F53\u524D\u7684\u6E29\u5EA6\u6570\u636E\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: " React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.temp.cur)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u6211\u4EEC\u5C06\u6E29\u5EA6\u6570\u636E\u76F4\u63A5\u663E\u793A\u5230\u6587\u56FE\u5C42\u4E2D\u5373\u53EF\u3002API \u7684\u6E29\u5EA6\u6570\u636E\u6BD4\u8F83\u7CBE\u786E\uFF08\u5B83\u7CBE\u786E\u5230\u4E86\u5C0F\u6570\u70B9\u540E\u51E0\u4F4D\uFF09\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 \u201CtoFixed(0)\u201D \u6765\u53EA\u663E\u793A\u6574\u6570\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "export function Temperature(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", { children: "        const [data, setData] = React.useState(0)" }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.temp.cur)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data.toFixed(0)} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("h3", { children: "\u83B7\u53D6\u5F53\u524D\u5929\u6C14" }),
      e("p", {
        children:
          "\u540C\u6837\u5730\uFF0C\u201Cweather.main\u201D \u63D0\u4F9B\u5F53\u524D\u5929\u6C14\u7684\u540D\u79F0\uFF0C\u4F8B\u5982\u6674\u6717\u3001\u591A\u4E91\u3001\u96FE\u3001\u96E8\u7B49\u3002\u6211\u4EEC\u5229\u7528\u8FD9\u4E2A\u6570\u636E\u663E\u793A\u5F53\u524D\u7684\u5929\u6C14\u5E76\u63A7\u5236 **Variant**\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "export function Weather(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", {
        children: '        const [data, setData] = React.useState("Loading")',
      }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.main)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data} variant={data} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("h3", { children: "API Key" }),
      e("p", {
        children:
          "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u6CE8\u518C\u4E00\u4E2A[OpenWeather] \u8D26\u6237\uFF0C\u7136\u540E\u524D\u5F80[OpenWeather/My API keys] \u5373\u53EF\u770B\u5230 API Key\u3002\u5982\u679C\u4F60\u6CA1\u6709\u770B\u5230 Key\uFF0C\u53EF\u4EE5\u5728\u53F3\u4FA7\u751F\u6210\u65B0\u7684 Key\u3002",
      }),
      e("p", {
        children:
          "![apply-the-keys](https://framerusercontent.com/images/mLa2JKsz4gwuqF0fhoKJIzNyeo.png?scale-down-to=2048)",
      }),
      e("p", {
        children:
          '\u76F4\u63A5\u5C06 Key \u7C98\u8D34\u5230 \u201Cweather.setKey("Your Key Here\u201D)\u201D \u4E2D\u5373\u53EF\u3002',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("b679............")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.main)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u6700\u540E\uFF0C\u5C06 Override \u4E0E\u56FE\u5C42\u4E86\u8FDE\u63A5\u5373\u53EF\u3002\u6211\u4EEC\u5C06 Override/Temperature \u8FDE\u63A5\u5230\u6E29\u5EA6\u6587\u672C\uFF0C\u5C06 Override/Weather \u8FDE\u63A5\u5230\u5929\u6C14\u6587\u672C\u3001\u6807\u5FD7\u4EE5\u53CA\u80CC\u666F\u3002",
      }),
      e("p", {
        children:
          "![apply-the-overrides](https://framerusercontent.com/images/1uvS3x6z0KDOGmED7vSBz328SA.png?scale-down-to=2048)",
      }),
      e("p", {
        children:
          "\u9884\u89C8\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u6240\u6709\u7684\u6570\u636E\u90FD\u5F00\u59CB\u53D8\u5316\uFF0C\u4E00\u4E2A\u771F\u5B9E\u7684\u5929\u6C14\u5C0F\u7EC4\u4EF6\u5C31\u5B8C\u6210\u4E86\u3002",
      }),
      e("h3", { children: "\u5B8C\u6574\u4EE3\u7801" }),
      e("p", { children: "~~~" }),
      e("p", { children: 'import * as React from "react"' }),
      e("p", { children: 'import OpenWeatherAPI from "openweather-api-node"' }),
      e("p", { children: 'import type { ComponentType } from "react"' }),
      e("p", {
        children: "export function Temperature(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", { children: "        const [data, setData] = React.useState(0)" }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.temp.cur)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data.toFixed(0)} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Weather(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const weather = new OpenWeatherAPI()" }),
      e("p", {
        children: '        const [data, setData] = React.useState("Loading")',
      }),
      e("p", { children: "        React.useEffect(() => {" }),
      e("p", { children: '            weather.setKey("Your Key Here")' }),
      e("p", { children: '            weather.setLanguage("en")' }),
      e("p", { children: '            weather.setUnits("metric")' }),
      e("p", { children: '            weather.setLocationByName("Shanghai")' }),
      e("p", { children: "            weather.getCurrent().then((data) => {" }),
      e("p", { children: "                setData(data.weather.main)" }),
      e("p", { children: "            })" }),
      e("p", { children: "        }, [])" }),
      e("p", {
        children:
          "        return <Component {...props} text={data} variant={data} />",
      }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
    ],
  }),
  x = t(r, {
    children: [
      e("p", {
        children:
          "Although Framer has become a web design tool, we can still use it for prototyping. This series will take advantage of Framer's Override feature to bring real data into Framer. In the first article we will design a real clock component using simple code.",
      }),
      e("h2", { children: "The Clock UI" }),
      e("p", {
        children:
          "First, we need to create the UI layer for the clock, which will contain at least the hour, minute and second hands. Here is an example of the clock component in iOS, you can copy the component below directly into the Framer to speed up the process.",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("p", {
        children:
          "When creating the hands, we put the hands part in a square Frame, which will make it easier for us to continue.",
      }),
      e("p", {
        children:
          "![design-clock](https://framerusercontent.com/images/jFgTUiFoYA8jLxTTAsCFyxS3k8.png?scale-down-to=2048)",
      }),
      e("h2", { children: "Override" }),
      e("p", {
        children:
          "Create a new Override file in the Framer and create separate function components called Hour, Minute and Second.",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "export function Hour(Component): ComponentType {" }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Minute(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Second(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Then connect each of the three Override components to the hour, minute and second hands in the UI layer.",
      }),
      e("p", {
        children:
          "![link-override](https://framerusercontent.com/images/QMhRl48FE3SEwgz3lLnWS0U3Io.png?scale-down-to=2048)",
      }),
      e("h3", { children: "Using Date()" }),
      e("p", {
        children:
          'The Date object provided by JS allows us to get the current time very easily. We use this to get the current hour, minute, second and millisecond data respectively. To make it easier to use this data, we define it as a "number".',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "const hour = Number(new Date().getHours())" }),
      e("p", { children: "const minute = Number(new Date().getMinutes())" }),
      e("p", { children: "const second = Number(new Date().getSeconds())" }),
      e("p", {
        children: "const millisecond = Number(new Date().getMilliseconds())",
      }),
      e("p", { children: "~~~" }),
      e("h3", { children: "The Second Hand" }),
      e("p", {
        children:
          'Our goal is to give the seconds a smooth rotation (like iOS), and Framer Motion can do this for us. First, we create **Variants** named "from" and "to", set **initial** to "from" and set **animate** to "to".',
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "export function Second(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          '"from" is the initial angle of the second hand, which depends on the seconds in the current time. The second hand turns 6 degrees per second on the clock, so we set the angle in "from" to 6 \\* second.',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "    from: {" }),
      e("p", { children: "                rotate: 6 * second\uFF0C" }),
      e("p", { children: "            },  " }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Now we have a starting angle for our second hand. But it will only start at 0\xB0, 6\xB0, 12\xB0 ...... each time. To make the angle more precise, we add milliseconds as a reference.",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "    from: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000)\uFF0C",
      }),
      e("p", { children: "            },  " }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          'This gives us a more accurate starting point. Next, we set the end point of the animation "to" for the second hand, simply by adding 360\xB0 to the starting point. In addition we set the easing curve to \u201Clinear\u201D, with a duration of 60s and infinite repetition.',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "    to: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000) + 360,",
      }),
      e("p", {
        children:
          '                transition: { duration: 60, ease: "linear", repeat: Infinity },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "Now we can see that the seconds hand is working perfectly.",
      }),
      e("p", {
        children:
          "##### https://framer.com/embed/Real-Time-Clock-Story--3g8bTC7XRZfMVN6rhDGg/yy0lMmAc0?highlights=0",
      }),
      e("h3", { children: "Minute and Hour Hands" }),
      e("p", {
        children:
          'For the minute hand and the hour hand we use the same method. For the starting angle of the minute hand, we combine "minute" with "second" and set the duration to 3600s (one hour).',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 6 * minute + 6 * (second / 60),",
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 6 * minute + 6 * (second / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 3600," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "##### https://framer.com/embed/Real-Time-Clock-Story--3g8bTC7XRZfMVN6rhDGg/dZrJq5zsk?highlights=0",
      }),
      e("p", {
        children:
          'The hour hand is calculated using "hour" and "minute". Before we use hour data, we need to convert the data because hour is calculated in 24 hour and the maximum number on the hour hand is only 12. When the hour hand reaches 12 noon (hour = 12), we need to return hour to 0 so that the hour hand can work correctly. A simple judgement is all that is needed here.',
      }),
      e("p", { children: "~~~" }),
      e("p", { children: " const hour12 = hour >= 12 ? hour - 12 : hour" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Then add the same Variant parameter for the hour hand, noting that we have to set the duration of the animation to 43200s (12 hours).",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "        const hour12 = hour >= 12 ? hour - 12 : hour",
      }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 30 * hour12 + 30 * (minute / 60),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 30 * hour12 + 30 * (minute / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 43200," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "##### https://framer.com/embed/Real-Time-Clock-Story--3g8bTC7XRZfMVN6rhDGg/P3gVclrfp?highlights=0",
      }),
      e("h3", { children: "The Full Code" }),
      e("p", { children: "~~~" }),
      e("p", { children: 'import type { ComponentType } from "react"' }),
      e("p", { children: "const hour = Number(new Date().getHours())" }),
      e("p", { children: "const minute = Number(new Date().getMinutes())" }),
      e("p", { children: "const second = Number(new Date().getSeconds())" }),
      e("p", {
        children: "const millisecond = Number(new Date().getMilliseconds())",
      }),
      e("p", { children: "export function Hour(Component): ComponentType {" }),
      e("p", { children: "    return (props) => {" }),
      e("p", {
        children: "        const hour12 = hour >= 12 ? hour - 12 : hour",
      }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 30 * hour12 + 30 * (minute / 60),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 30 * hour12 + 30 * (minute / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 43200," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Minute(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 6 * minute + 6 * (second / 60),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 6 * minute + 6 * (second / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 3600," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Second(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000) + 360,",
      }),
      e("p", {
        children:
          '                transition: { duration: 60, ease: "linear", repeat: Infinity },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Now all the pointers are starting to work correctly. This is my current animation using Framer Motion's Variants feature, which may have accuracy issues with some of the data, so if you have a better solution, please feel free to share it with me.",
      }),
    ],
  }),
  F = t(r, {
    children: [
      e("p", {
        children:
          "\u5C3D\u7BA1 Framer \u5DF2\u7ECF\u6210\u4E3A\u4E86\u4E3B\u6253\u7F51\u9875\u8BBE\u8BA1\u7684\u5EFA\u7AD9\u5DE5\u5177\uFF0C\u4F46\u6211\u4EEC\u4F9D\u65E7\u80FD\u591F\u4F7F\u7528\u5B83\u8FDB\u884C\u539F\u578B\u8BBE\u8BA1\u3002\u8FD9\u4E2A\u7CFB\u5217\u7684\u6587\u7AE0\u5C06\u4F1A\u5229\u7528 Framer \u7684 Override \u7279\u6027\u5F15\u5165\u4E00\u4E9B\u771F\u5B9E\u6570\u636E\u5230 Framer \u4E2D\uFF0C\u5728\u7B2C\u4E00\u7BC7\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5229\u7528\u7B80\u5355\u7684\u4EE3\u7801\u8BBE\u8BA1\u4E00\u4E2A\u771F\u5B9E\u7684\u65F6\u949F\u7EC4\u4EF6\u3002",
      }),
      e("h2", { children: "\u521B\u5EFAUI" }),
      e("p", {
        children:
          "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u65F6\u949F\u7684UI\u56FE\u5C42\uFF0C\u5B83\u81F3\u5C11\u5305\u542B\u65F6\u9488\u3001\u5206\u9488\u4E0E\u79D2\u9488\u3002\u8FD9\u91CC\u4EE5  iOS \u7684\u65F6\u949F\u7EC4\u4EF6\u4E3A\u4F8B\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u590D\u5236\u4E0B\u9762\u7684\u7EC4\u4EF6\u5230 Framer \u6765\u52A0\u901F\u8FD9\u4E00\u8FDB\u7A0B\u3002",
      }),
      e("p", {
        children:
          "\u5728\u5236\u4F5C\u6307\u9488\u65F6\uFF0C\u6211\u4EEC\u5C06\u6307\u9488\u7684\u90E8\u5206\u653E\u5728\u4E00\u4E2A\u6B63\u65B9\u5F62 Frame \u4E2D\uFF0C\u8FD9\u4F1A\u65B9\u4FBF\u6211\u4EEC\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u3002",
      }),
      e("p", {
        children:
          "![design-clock](https://framerusercontent.com/images/jFgTUiFoYA8jLxTTAsCFyxS3k8.png?scale-down-to=2048)",
      }),
      e("p", { children: "## Override" }),
      e("p", {
        children:
          "\u5728 Framer \u4E2D\u65B0\u5EFA\u4E00\u4E2A Override \u6587\u4EF6\uFF0C\u7136\u540E\u5206\u522B\u521B\u5EFA\u540D\u4E3A Hour\u3001Minute \u548C Second \u7684\u51FD\u6570\u7EC4\u4EF6\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "export function Hour(Component): ComponentType {" }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Minute(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Second(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u7136\u540E\u5C06\u4E09\u4E2AOverride\u7EC4\u4EF6\u5206\u522B\u8FDE\u63A5\u5230 UI \u4E2D\u7684\u65F6\u9488\u3001\u5206\u9488\u3001\u79D2\u9488\u4E2D\u3002",
      }),
      e("p", {
        children:
          "![link-override](https://framerusercontent.com/images/QMhRl48FE3SEwgz3lLnWS0U3Io.png?scale-down-to=2048)",
      }),
      e("h2", { children: "\u4F7F\u7528Date()" }),
      e("p", {
        children:
          "JS \u63D0\u4F9B\u7684 Date \u5BF9\u8C61\u8BA9\u6211\u4EEC\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u3002\u6211\u4EEC\u5229\u7528\u8FD9\u4E00\u529F\u80FD\u5206\u522B\u83B7\u53D6\u5F53\u524D\u7684\u65F6\u3001\u5206\u3001\u79D2\u4EE5\u53CA\u6BEB\u79D2\u6570\u636E\u3002\u4E3A\u4E86\u65B9\u4FBF\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E\uFF0C\u6211\u4EEC\u5C06\u5176\u5B9A\u4E49\u4E3A\u201C\u6570\u5B57\u201D\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "const hour = Number(new Date().getHours())" }),
      e("p", { children: "const minute = Number(new Date().getMinutes())" }),
      e("p", { children: "const second = Number(new Date().getSeconds())" }),
      e("p", {
        children: "const millisecond = Number(new Date().getMilliseconds())",
      }),
      e("p", { children: "~~~" }),
      e("h3", { children: "\u4ECE\u79D2\u9488\u5F00\u59CB" }),
      e("p", {
        children:
          "\u6211\u4EEC\u7684\u76EE\u6807\u662F\u8BA9\u79D2\u949F\u62E5\u6709\u5E73\u6ED1\u7684\u8F6C\u52A8\u6548\u679C\uFF08\u5C31\u50CF iOS \u90A3\u6837\uFF09\uFF0C\u800C Framer Motion \u80FD\u591F\u4E3A\u6211\u4EEC\u8FBE\u6210\u8FD9\u4E00\u6548\u679C\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u521B\u5EFA\u540D\u4E3A \u201Cfrom\u201D \u4E0E \u201Cto\u201D \u7684 **Variants**\uFF0C\u8BBE\u7F6E **initial** \u4E3A \u201Cfrom\u201D\uFF0C\u8BBE\u7F6E **animate** \u4E3A\u201Cto\u201D\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "export function Second(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u201Cfrom\u201D \u4EE3\u8868\u4E86\u6211\u4EEC\u7684\u79D2\u9488\u5C06\u4ECE\u4EC0\u4E48\u89D2\u5EA6\u5F00\u59CB\u8F6C\u52A8\uFF0C\u5B83\u53D6\u51B3\u4E8E\u5F53\u524D\u65F6\u95F4\u4E2D\u7684\u79D2\u3002\u79D2\u9488\u5728\u65F6\u949F\u4E0A\u6BCF\u79D2\u8F6C\u52A86\u5EA6\uFF0C\u56E0\u6B64\u6211\u4EEC\u5728 \u201Cfrom\u201D \u4E2D\u8BBE\u7F6E\u89D2\u5EA6\u4E3A 6 \\* second\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "    from: {" }),
      e("p", { children: "                rotate: 6 * second\uFF0C" }),
      e("p", { children: "            },  " }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u73B0\u5728\uFF0C\u6211\u4EEC\u7684\u79D2\u9488\u5C31\u6709\u4E86\u4E00\u4E2A\u8D77\u59CB\u89D2\u5EA6\u3002\u4F46\u5B83\u6BCF\u6B21\u53EA\u4F1A\u4EE50 \xB0\u30016 \xB0\u300112 \xB0\u2026\u2026\u4F5C\u4E3A\u8D77\u70B9\uFF0C\u4E3A\u4E86\u8BA9\u89D2\u5EA6\u66F4\u52A0\u7CBE\u786E\uFF0C\u6211\u4EEC\u52A0\u5165\u6BEB\u79D2\u4F5C\u4E3A\u53C2\u8003\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "    from: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000)\uFF0C",
      }),
      e("p", { children: "            },  " }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u8FD9\u6837\uFF0C\u6211\u4EEC\u7684\u79D2\u9488\u5C31\u6709\u4E86\u4E00\u4E2A\u8F83\u4E3A\u7CBE\u51C6\u7684\u8D77\u70B9\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4E3A\u79D2\u9488\u8BBE\u7F6E\u52A8\u753B\u7684\u7EC8\u70B9 \u201Cto\u201D\uFF0C\u53EA\u9700\u5728\u8D77\u70B9\u7684\u57FA\u7840\u52A0\u4E0A360\xB0\u5373\u53EF\u3002\u6B64\u5916\u6211\u4EEC\u8981\u5C06\u7F13\u52A8\u66F2\u7EBF\u8BBE\u7F6E\u4E3A\u7EBF\u6027\uFF0C\u6301\u7EED\u65F6\u95F4\u4E3A60\u79D2\uFF0C\u65E0\u9650\u91CD\u590D\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "    to: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000) + 360,",
      }),
      e("p", {
        children:
          '                transition: { duration: 60, ease: "linear", repeat: Infinity },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u79D2\u9488\u5DF2\u7ECF\u5B8C\u7F8E\u7684\u5DE5\u4F5C\u4E86\u3002",
      }),
      e("p", {
        children:
          "##### https://framer.com/embed/Real-Time-Clock-Story--3g8bTC7XRZfMVN6rhDGg/yy0lMmAc0?highlights=0",
      }),
      e("h3", { children: "\u5206\u9488\u4E0E\u65F6\u9488" }),
      e("p", {
        children:
          "\u5BF9\u4E8E\u5206\u9488\u4E0E\u65F6\u9488\uFF0C\u6211\u4EEC\u4F7F\u7528\u76F8\u540C\u7684\u65B9\u6CD5\u3002\u5BF9\u4E8E\u5206\u9488\u7684\u8D77\u59CB\u89D2\u5EA6\uFF0C\u6211\u4EEC\u5C06 \u201C\u5206\u949F\uFF08minute\uFF09\u201D \u4E0E \u201C\u79D2\uFF08second\uFF09\u201D \u7ED3\u5408\uFF0C\u6301\u7EED\u65F6\u95F4\u8BBE\u7F6E\u4E3A 3600 \u79D2\uFF08\u4E00\u5C0F\u65F6\uFF09\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 6 * minute + 6 * (second / 60),",
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 6 * minute + 6 * (second / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 3600," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "##### https://framer.com/embed/Real-Time-Clock-Story--3g8bTC7XRZfMVN6rhDGg/dZrJq5zsk?highlights=0",
      }),
      e("p", {
        children:
          "\u800C\u65F6\u9488\u53EA\u9700\u4F7F\u7528\u201C\u65F6\uFF08hour\uFF09\u201D \u4E0E \u201C\u5206\u949F\uFF08minute\uFF09\u201D\u5373\u53EF\u3002\u5728\u4F7F\u7528 hour \u6570\u636E\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u4E00\u4E2A\u6362\u7B97\uFF0C\u56E0\u4E3A hour \u662F\u4EE524\u5C0F\u65F6\u683C\u5F0F\u8FDB\u884C\u8BA1\u7B97\u7684\uFF0C\u800C\u65F6\u9488\u4E0A\u7684\u6570\u5B57\u6700\u5927\u53EA\u670912\u3002\u5F53\u65F6\u9488\u8FDB\u884C\u5230\u4E2D\u534812\u70B9\u65F6\uFF08hour = 12\uFF09\uFF0C\u6211\u4EEC\u9700\u8981\u8BA9 hour \u8FD4\u56DE\u52300\uFF0C\u8FD9\u6837\u65F6\u9488\u624D\u53EF\u4EE5\u6B63\u5E38\u5730\u5DE5\u4F5C\u3002\u8FD9\u91CC\u53EA\u9700\u4E00\u4E2A\u7B80\u5355\u7684\u5224\u65AD\u5373\u53EF\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: " const hour12 = hour >= 12 ? hour - 12 : hour" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u7136\u540E\u540C\u6837\u7684\u4E3A\u65F6\u9488\u6DFB\u52A0 Variant \u53C2\u6570\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u6211\u4EEC\u8981\u5C06\u52A8\u753B\u7684\u6301\u7EED\u65F6\u95F4\u8BBE\u7F6E\u4E3A43200\u79D2\uFF0812\u5C0F\u65F6\uFF09\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children: "        const hour12 = hour >= 12 ? hour - 12 : hour",
      }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 30 * hour12 + 30 * (minute / 60),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 30 * hour12 + 30 * (minute / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 43200," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "##### https://framer.com/embed/Real-Time-Clock-Story--3g8bTC7XRZfMVN6rhDGg/P3gVclrfp?highlights=0",
      }),
      e("h3", { children: "\u5B8C\u6574\u4EE3\u7801" }),
      e("p", { children: "~~~" }),
      e("p", { children: 'import type { ComponentType } from "react"' }),
      e("p", { children: "const hour = Number(new Date().getHours())" }),
      e("p", { children: "const minute = Number(new Date().getMinutes())" }),
      e("p", { children: "const second = Number(new Date().getSeconds())" }),
      e("p", {
        children: "const millisecond = Number(new Date().getMilliseconds())",
      }),
      e("p", { children: "export function Hour(Component): ComponentType {" }),
      e("p", { children: "    return (props) => {" }),
      e("p", {
        children: "        const hour12 = hour >= 12 ? hour - 12 : hour",
      }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 30 * hour12 + 30 * (minute / 60),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 30 * hour12 + 30 * (minute / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 43200," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Minute(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children: "                rotate: 6 * minute + 6 * (second / 60),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 6 * minute + 6 * (second / 60) + 360,",
      }),
      e("p", { children: "                transition: {" }),
      e("p", { children: "                    duration: 3600," }),
      e("p", { children: '                    ease: "linear",' }),
      e("p", { children: "                    repeat: Infinity," }),
      e("p", { children: "                }," }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", {
        children: "export function Second(Component): ComponentType {",
      }),
      e("p", { children: "    return (props) => {" }),
      e("p", { children: "        const variant = {" }),
      e("p", { children: "            from: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000),",
      }),
      e("p", {
        children:
          '                transition: { duration: 0, ease: "linear" },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "            to: {" }),
      e("p", {
        children:
          "                rotate: 6 * second + 6 * (millisecond / 1000) + 360,",
      }),
      e("p", {
        children:
          '                transition: { duration: 60, ease: "linear", repeat: Infinity },',
      }),
      e("p", { children: "            }," }),
      e("p", { children: "        }" }),
      e("p", { children: "        return (" }),
      e("p", { children: "            <Component" }),
      e("p", { children: "                {...props}" }),
      e("p", { children: "                variants={variant}" }),
      e("p", { children: '                initial={"from"}' }),
      e("p", { children: '                animate={"to"}' }),
      e("p", { children: "            />" }),
      e("p", { children: "        )" }),
      e("p", { children: "    }" }),
      e("p", { children: "}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "\u73B0\u5728\uFF0C\u6240\u6709\u7684\u6307\u9488\u90FD\u5F00\u59CB\u6B63\u5E38\u5DE5\u4F5C\u4E86\u3002\u8FD9\u662F\u6211\u76EE\u524D\u5229\u7528 Framer Motion \u7684 Variants \u7279\u6027\u5236\u4F5C\u7684\u52A8\u753B\uFF0C\u53EF\u80FD\u5728\u67D0\u4E9B\u6570\u636E\u65B9\u9762\u4F1A\u51FA\u73B0\u51C6\u786E\u6027\u95EE\u9898\uFF0C\u5982\u679C\u4F60\u6709\u66F4\u597D\u5730\u89E3\u51B3\u65B9\u6848\uFF0C\u6B22\u8FCE\u4E00\u8D77\u4EA4\u6D41\u3002",
      }),
    ],
  }),
  k = t(r, {
    children: [
      e("p", {
        children:
          "Fold Switcher is a dedicated side application switcher for foldable phones. It not only ensures application compatibility but also provides an intuitive and easy-to-use recent apps list, balancing display experience and user efficiency.",
      }),
      e("p", {
        children:
          "This idea came to me while working on rollable and foldable screen phone projects. Unlike taskbars and docks on other devices, Fold Switcher focuses on recently used apps, displaying all background apps on the left side of the screen to facilitate quick app switching or split-screen operations.",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h4", { children: "Sidebar" }),
      e("p", {
        children:
          "The sidebar occupies only the horizontal space of the screen, correcting the display ratio of applications to some extent and allowing more content to be shown when two apps are displayed simultaneously. Larger app icons bring more confident operations for users. Additionally, the sidebar provides a clear visual hierarchy. For example, in Gmail, we can see the continuity of \u201Csystem level - app level - app content.\u201D",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h4", { children: "Adaptive Colors" }),
      e("p", {
        children:
          "The switcher automatically adjusts colors to blend with the background of the recent apps, making it look like a part of the application.",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h4", { children: "Gesture Support" }),
      e("p", {
        children:
          "The switcher allows split-screen operation by dragging app icons to combine apps. Users can adjust their positions using the handle at the top of the app. Additionally, long-pressing an app opens a menu to pin or close the app.",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h4", { children: "Automatic Split-Screen" }),
      e("p", {
        children:
          "If the current app needs to launch another app, the new app will automatically display in split-screen mode rather than overlaying the current app, such as when opening a link.",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("p", {
        children:
          "While trying the demo, some performance issues may occur due to browser limitations.",
      }),
    ],
  }),
  T = t(r, {
    children: [
      e("p", {
        children:
          "Fold Switcher \u662F\u4E13\u4E3A\u6298\u53E0\u624B\u673A\u8BBE\u8BA1\u7684\u4FA7\u8FB9\u5E94\u7528\u5207\u6362\u5668\uFF0C\u5B83\u4E0D\u4EC5\u4FDD\u8BC1\u5E94\u7528\u7684\u517C\u5BB9\u6027\uFF0C\u8FD8\u63D0\u4F9B\u76F4\u89C2\u6613\u7528\u7684\u6700\u8FD1\u7A0B\u5E8F\u5217\u8868\uFF0C\u4EE5\u5E73\u8861\u663E\u793A\u4F53\u9A8C\u548C\u7528\u6237\u6548\u7387\u3002",
      }),
      e("p", {
        children:
          "\u8FD9\u4E2A\u6548\u679C\u662F\u5728\u6211\u53C2\u4E0E\u5377\u8F74\u5C4F\u4E0E\u6298\u53E0\u5C4F\u624B\u673A\u9879\u76EE\u65F6\u60F3\u5230\u7684\u3002\u4E0D\u540C\u4E8E\u5176\u4ED6\u8BBE\u5907\u7684\u4EFB\u52A1\u680F\u548C\u7A0B\u5E8F\u575E\uFF0CFold Switcher \u7740\u91CD\u5173\u6CE8\u6700\u8FD1\u4F7F\u7528\u7684\u5E94\u7528\uFF0C\u6240\u6709\u540E\u53F0\u5E94\u7528\u90FD\u4F1A\u663E\u793A\u5728\u5C4F\u5E55\u5DE6\u4FA7\uFF0C\u65B9\u4FBF\u7528\u6237\u5FEB\u901F\u5207\u6362\u5E94\u7528\u6216\u8FDB\u884C\u5206\u5C4F\u64CD\u4F5C\u3002",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h3", { children: "\u4FA7\u8FB9\u680F" }),
      e("p", {
        children:
          "\u4FA7\u8FB9\u5BFC\u822A\u680F\u4EC5\u5360\u7528\u5C4F\u5E55\u6C34\u5E73\u65B9\u5411\u4E0A\u7684\u7A7A\u95F4\uFF0C\u80FD\u591F\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u4FEE\u6B63\u5E94\u7528\u7684\u663E\u793A\u6BD4\u4F8B\uFF0C\u5E76\u4E14\u5728\u4E24\u4E2A\u5E94\u7528\u540C\u65F6\u663E\u793A\u65F6\u8BA9\u6BCF\u4E2A\u5E94\u7528\u663E\u793A\u66F4\u591A\u5185\u5BB9\u3002\u66F4\u5927\u7684\u5E94\u7528\u56FE\u6807\u4E3A\u7528\u6237\u5E26\u6765\u66F4\u52A0\u81EA\u4FE1\u7684\u64CD\u4F5C\u3002\u6B64\u5916\uFF0C\u4FA7\u8FB9\u680F\u5728\u89C6\u89C9\u4E0A\u63D0\u4F9B\u4E86\u663E\u800C\u6613\u89C1\u7684\u5C42\u7EA7\u5173\u7CFB\u3002\u4F8B\u5982\u5728 Gmail \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u201C\u7CFB\u7EDF\u5C42\u7EA7-\u5E94\u7528\u5C42\u7EA7-\u5E94\u7528\u5185\u5BB9\u201D\u7684\u8FDE\u7EED\u6027\u3002",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h3", { children: "\u81EA\u9002\u5E94\u989C\u8272" }),
      e("p", {
        children:
          "\u5207\u6362\u5668\u4F1A\u81EA\u52A8\u8C03\u6574\u989C\u8272\uFF0C\u4E0E\u6700\u8FD1\u7684\u5E94\u7528\u80CC\u666F\u878D\u5408\uFF0C\u4F7F\u5176\u770B\u8D77\u6765\u50CF\u5E94\u7528\u7684\u4E00\u90E8\u5206\u3002",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h3", { children: "\u624B\u52BF\u652F\u6301" }),
      e("p", {
        children:
          "\u5207\u6362\u5668\u901A\u8FC7\u62D6\u62FD\u5E94\u7528\u56FE\u6807\u8FDB\u884C\u5206\u5C4F\uFF0C\u5C06\u5E94\u7528\u7EC4\u5408\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5E94\u7528\u9876\u90E8\u7684\u624B\u67C4\u8C03\u6574\u4F4D\u7F6E\u3002\u6B64\u5916\uFF0C\u957F\u6309\u5E94\u7528\u53EF\u4EE5\u6253\u5F00\u83DC\u5355\uFF0C\u4EE5\u56FA\u5B9A\u6216\u9000\u51FA\u5E94\u7528\u3002",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h3", { children: "\u81EA\u52A8\u5206\u5C4F" }),
      e("p", {
        children:
          "\u5982\u679C\u5F53\u524D\u5E94\u7528\u9700\u8981\u542F\u52A8\u5176\u4ED6\u5E94\u7528\uFF0C\u65B0\u5E94\u7528\u5C06\u81EA\u52A8\u5206\u5C4F\u663E\u793A\u800C\u4E0D\u662F\u8986\u76D6\u5F53\u524D\u5E94\u7528\uFF0C\u4F8B\u5982\u6253\u5F00\u94FE\u63A5\u3002",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("p", {
        children:
          "\u5728\u5C1D\u8BD5 Demo \u65F6\uFF0C\u53EF\u80FD\u4F1A\u7531\u4E8E\u6D4F\u89C8\u5668\u539F\u56E0\u9020\u6210\u4E00\u4E9B\u8868\u73B0\u9519\u8BEF\u3002",
      }),
    ],
  }),
  C = t(r, {
    children: [
      e("p", {
        children:
          "Since I started working with Framer, my design process has been invaded by **Spring Animation**. I used to use the **Easing Function** to set up the physical changes in my animations, but after using it for a while, it has mostly replaced it in my animations. Considering that there are few explanations of elastic animation on the web, I'll write a post about it.",
      }),
      e("h2", { children: "Old friend, Easing function" }),
      e("p", {
        children:
          "When I design animations I often need to adjust the speed of playback during the execution of the animation, for example for inertial effects, and the easing function is very good at helping me to do this. Easing curves define the relationship between parameters (position, size, angle, etc.) as a function of time during the execution of an animation, using a B\xE9zier curve. Common animation functions such as **EaseIn** and **EaseOut** are all part of the B\xE9zier curve, while more subtle B\xE9zier functions can be set in some UI or after effects software.",
      }),
      e("h2", { children: "Now, Spring animation" }),
      e("p", {
        children:
          "The movement pattern of an object in the real world is not as ideal as an easing function. Due to physical factors such as inertia, acceleration and gravity, we need an animation pattern that is close to the real physics to create a natural animation.",
      }),
      e("p", {
        children:
          "To use spring animation in the Framer, simply select 'Spring' in the Transition Effects panel or add 'type' to 'spring' in the code.",
      }),
      e("p", {
        children:
          "![FramerSpringUI](https://raw.githubusercontent.com/Vsplorer/JaywithwhiteStore/e442d9602aa204bc297dba879c50ed201f040e0b/SpringAnimation_FramerSpringUI.png)",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'transition={{ type:"spring" }}' }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Framer offers two ways to set up spring animations: **physics-based** animations and **time-based** animations.",
      }),
      e("h3", { children: "Physics-based animation" }),
      e("p", {
        children:
          "Physics-based animation consists of three main parameters: **stiffness**, **damping** and **mass**, which determine what kind of animation effect we see.",
      }),
      e("p", {
        children:
          ":Note[Spring animation involves Hooke's law and Newton's second law in physics, where people use formulas and known parameters to design spring animations in computers. If you are interested in the derivation process, please refer to the references at the end.]",
      }),
      e("h4", { children: "stiffness" }),
      e("p", {
        children:
          "The stiffness is understood as the **elastic strength** of the element. The greater the value, the greater the elasticity of the object when it recovers from deformation, holding all other parameters constant.",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/SfVZvcYKq?highlights=0]",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'transition={ type:"spring", ' }),
      e("p", { children: "  damping: 10" }),
      e("p", { children: "  // stiffness: 100 // default stiffness value." }),
      e("p", { children: "}}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          ":Note[When only **damping** is set in the code, **stiffness** will be set at the default value of 100.]",
      }),
      e("h4", { children: "damping" }),
      e("p", {
        children:
          "Damping is the **resistance** to the movement of an element.  Due to the stiffness, the object will oscillate repeatedly around the target position. In order to stop the object, we need resistance to bring it gradually to equilibrium. This means that the greater the resistance the faster the object will stop moving and the shorter the animation time.",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/fV5e6q8Ha?highlights=0]",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'transition={ type:"spring", ' }),
      e("p", { children: "  stiffness: 100" }),
      e("p", { children: "  // damping: 10 // default damping value." }),
      e("p", { children: "}}" }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          ":Note[When only **stiffness** is set in the code, **damping** will be set with a default value of 10.]",
      }),
      e("h4", { children: "mass" }),
      e("p", {
        children: "Mass is similar to the physical rules of our real world.",
      }),
      e("p", {
        children:
          "*When an object is not disturbed by external forces (external forces remain constant), the greater the mass of the object, the less likely it is to change its state of motion. Therefore, the greater the mass of an object, the greater its inertia (from a high school textbook).*",
      }),
      e("p", {
        children:
          "In short, if we hold rigidity and resistance constant, the larger the mass, the bulkier the motion of the element, and the smaller the mass, the lighter the motion of the element.",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/kA5EKUG4o?highlights=0]",
      }),
      e("p", {
        children:
          "Generally speaking, I have designed flat UI elements in the Framer, so I can just adjust the stiffness and resistance to achieve the desired animation effect. Now, let's try the following prototype to see how the different parameters affect the animation.",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/qeqLjOxqc?highlights=0]",
      }),
      e("p", {
        children:
          "Although the length of the animation cannot be set precisely, the uncertainty of the animation provides a more realistic visual experience of screen interaction. In addition, Framer also offers a time-based approach to setting spring animation.",
      }),
      e("h3", { children: "Time-based animation" }),
      e("p", {
        children:
          "To use time-based animation, simply set the **bounce** **duration** of the element.",
      }),
      e("p", {
        children:
          ":Note[Currently, you can only use time-based animation effects in code.]",
      }),
      e("h4", { children: "bounce" }),
      e("p", {
        children:
          "The flexibility can be set between 0 and 1. When **duration** is set, **bounce** is set with a default value of 0.25.",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'transition={ type:"spring", ' }),
      e("p", { children: "  duration: 100" }),
      e("p", { children: "  // bounce: 0.25 // default bounce value." }),
      e("p", { children: "}}" }),
      e("p", { children: "~~~" }),
      e("h4", { children: "duration" }),
      e("p", {
        children:
          "This parameter is the same as the easing function and sets the duration of the animation.",
      }),
      e("h4", { children: "Note that" }),
      e("p", {
        children:
          "When one or more of **stiffness, damping, mass** are present, **bounce** and **duration** will be disabled. My guess is that Framer is using **bounce** and **duration** to calculate the values of the other three parameters.",
      }),
      e("h3", { children: "Other parameters" }),
      e("p", {
        children:
          "In addition, Framer provides several additional parameters to allow us to adjust the state of the animation. These parameters are only used in special circumstances and are currently only available in code, so here is a brief explanation for reference.",
      }),
      e("p", {
        children:
          "- **velocity**: The initial velocity of the animation. If a larger value is set for **velocity**, then the element will have a oscillating effect when it appears (goes into its initial state).",
      }),
      e("p", {
        children:
          "- **restSpeed**: ends the animation when the speed of the animation falls below this value. Framer provides an 'in units per second' measure of animation speed, with a default value of 0.01.",
      }),
      e("p", {
        children:
          '- **restDelta**: Similar to **restSpeed**, except that the animation ends when the "distance" is less than this value. The calculation of "distance" is not yet known.',
      }),
      e("p", {
        children:
          "If you are interested in **restSpeed** and **restDelta**, it is recommended that you speak to the officials directly for a detailed explanation as it seems that careful calculations are required when using them.",
      }),
      e("h2", { children: "Lastly" }),
      e("p", {
        children:
          "Here are two effects that have been created using elastic animation, the button entry effect and the sidebar pop-up effect.",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/WEAQbUBkO?highlights=0]",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/QvnA\\_hHOf?highlights=0]",
      }),
      e("p", {
        children:
          "I once struggled with how to design a natural curve when using a jogging function.  Although many websites offer visual design tools for functions, after several parameter adjustments, the animation was still not as good as it could be (perhaps due to my OCD). The spring animation has eased my compulsion to a large extent, and at least now, no matter how I tweak the parameters, the final result still looks very comfortable.",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h4", { children: "Reference  " }),
      e("p", {
        children:
          '1. [\xA0The physics behind spring animations\xA0](https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/ "The physics behind spring animations")',
      }),
      e("p", {
        children:
          '2. [\xA0CSS\u5982\u4F55\u5B9E\u73B0\u5F39\u7C27\u52A8\u753B\u6548\u679C\xA0](https://www.w3cplus.com/animation/spring-animation-in-css.html "CSS\u5982\u4F55\u5B9E\u73B0\u5F39\u7C27\u52A8\u753B\u6548\u679C")',
      }),
      e("p", {
        children:
          '3. [A Friendly Introduction to Spring Physics](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/ "A Friendly Introduction to Spring Physics")',
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
    ],
  }),
  I = t(r, {
    children: [
      e("p", {
        children:
          "\u81EA\u4ECE\u63A5\u89E6 Framer \u5F00\u59CB\uFF0C\u6211\u7684\u4EA4\u4E92\u8BBE\u8BA1\u6D41\u7A0B\u88AB**\u5F39\u6027\u52A8\u753B**\uFF08Spring Animation\uFF09\u5165\u4FB5\u4E86\u3002\u4EE5\u5F80\u6211\u90FD\u662F\u4EE5**\u7F13\u52A8\u51FD\u6570**\uFF08Easing Function\uFF09\u8BBE\u7F6E\u52A8\u6548\u7684\u7269\u7406\u53D8\u5316\uFF0C\u800C\u5728\u4F7F\u7528\u4E00\u6BB5\u65F6\u95F4\u7684\u5F39\u6027\u52A8\u753B\u540E\uFF0C\u6211\u7684\u52A8\u6548\u8BBE\u8BA1\u5927\u90E8\u5206\u88AB\u5B83\u6240\u53D6\u4EE3\u3002\u8003\u8651\u5230\u7F51\u4E0A\u5BF9\u5F39\u6027\u52A8\u753B\u7684\u89E3\u91CA\u8F83\u5C11\uFF0C\u8FD9\u6B21\u5199\u4E00\u7BC7\u6709\u5173\u4E8E\u5B83\u89E3\u6790\u3002",
      }),
      e("p", {
        children:
          "![FramerSpringUI](https://github.com/Vsplorer/JaywithwhiteStore/blob/main/SpringAnimation/SpringAnimation_Symbol.png?raw=true)",
      }),
      e("h2", { children: "\u8001\u670B\u53CB\uFF0C\u7F13\u52A8\u51FD\u6570" }),
      e("p", {
        children:
          "\u6211\u4EEC\u5728\u8BBE\u8BA1\u52A8\u753B\u65F6\u5F80\u5F80\u9700\u8981\u8C03\u8282\u52A8\u753B\u6267\u884C\u671F\u95F4\u5185\u7684\u64AD\u653E\u901F\u5EA6\uFF0C\u4F8B\u5982\u4F4D\u79FB\u65F6\u6DFB\u52A0\u60EF\u6027\u6548\u679C\uFF0C\u800C\u7F13\u52A8\u51FD\u6570\u80FD\u591F\u975E\u5E38\u597D\u7684\u5E2E\u52A9\u6211\u4EEC\u5B8C\u6210\u8FD9\u4E9B\u3002\u7F13\u52A8\u66F2\u7EBF\u901A\u8FC7\u4E00\u6761\u8D1D\u585E\u5C14\u66F2\u7EBF\uFF08B\xE9zier curve\uFF09\uFF0C\u5B9A\u4E49\u52A8\u753B\u6267\u884C\u65F6\u53C2\u6570\uFF08\u4F4D\u7F6E\u3001\u5927\u5C0F\u3001\u89D2\u5EA6\u7B49\uFF09\u4E0E\u65F6\u95F4\u7684\u51FD\u6570\u5173\u7CFB\u3002\u52A8\u6548\u8BBE\u8BA1\u4E2D\u5E38\u89C1\u7684 EaseIn\uFF08\u7F13\u5165\uFF09\u3001EaseOut\uFF08\u7F13\u51FA\uFF09\u7B49\u52A8\u753B\u53C2\u6570\u90FD\u5C5E\u4E8E\u7F13\u52A8\u66F2\u7EBF\uFF0C\u800C\u5728\u4E00\u4E9B UI \u8F6F\u4EF6\u6216\u540E\u671F\u8F6F\u4EF6\u4E2D\u5219\u80FD\u8FDB\u884C\u66F4\u4E3A\u7EC6\u5FAE\u7684\u7F13\u52A8\u51FD\u6570\u8BBE\u7F6E\u3002",
      }),
      e("h2", {
        children: "\u73B0\u5728\uFF0C\u62FF\u8D77\u5F39\u6027\u52A8\u753B",
      }),
      e("p", {
        children:
          "\u7269\u4F53\u5728\u771F\u5B9E\u4E16\u754C\u7684\u8FD0\u52A8\u6A21\u5F0F\u5E76\u4E0D\u50CF\u7F13\u52A8\u51FD\u6570\u90A3\u6837\u7684\u7406\u60F3\u3002\u7531\u4E8E\u60EF\u6027\u3001\u52A0\u901F\u5EA6\u3001\u91CD\u529B\u7B49\u7269\u7406\u56E0\u7D20\u7684\u5F71\u54CD\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u63A5\u8FD1\u771F\u5B9E\u7269\u7406\u60C5\u51B5\u7684\u52A8\u753B\u6A21\u5F0F\u6765\u521B\u9020\u81EA\u7136\u7684\u52A8\u753B\uFF0C\u8FD9\u4FBF\u662F\u5F39\u6027\u52A8\u753B\u3002",
      }),
      e("p", {
        children:
          "\u8981\u5728 Framer \u4E2D\u4F7F\u7528\u5F39\u6027\u52A8\u753B\uFF0C\u53EA\u9700\u5728\u8FC7\u6E21\u6548\u679C\u9762\u677F\u4E2D\u9009\u62E9\u201CSpring\u201D\uFF0C\u6216\u5728\u4EE3\u7801\u4E2D\u6DFB\u52A0\u201Ctype\u201D\u4E3A\u201Cspring\u201D\u3002",
      }),
      e("p", {
        children:
          "![FramerSpringUI](https://github.com/Vsplorer/JaywithwhiteStore/blob/main/SpringAnimation/SpringAnimation_FramerSpringUI.png?raw=true)",
      }),
      e("p", { children: "~~~" }),
      e("p", { children: 'transition={{ type:"spring" }}' }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          "Framer \u63D0\u4F9B\u4E86\u4E24\u79CD\u8BBE\u7F6E\u5F39\u6027\u52A8\u753B\u7684\u65B9\u5F0F\uFF1A\u57FA\u4E8E\u7269\u7406\u5B66\u53C2\u6570\u7684\u52A8\u753B\u548C\u57FA\u4E8E\u65F6\u95F4\u7684\u52A8\u753B\u3002",
      }),
      e("h3", { children: "\u57FA\u4E8E\u7269\u7406\u5B66\u7684\u52A8\u753B" }),
      e("p", {
        children:
          "\u57FA\u4E8E\u7269\u7406\u5B66\u7684\u52A8\u753B\u5305\u542B\u4E09\u4E2A\u4E3B\u8981\u8BBE\u7F6E\u53C2\u6570\uFF1A\u521A\u5EA6\uFF08stiffness\uFF09\u3001\u963B\u529B\uFF08damping\uFF09\u4E0E\u8D28\u91CF\uFF08mass\uFF09\uFF0C\u8FD9\u4E09\u4E2A\u53C2\u6570\u51B3\u5B9A\u4E86\u6211\u4EEC\u80FD\u770B\u5230\u4EC0\u4E48\u6837\u7684\u52A8\u753B\u6548\u679C\u3002",
      }),
      e("p", {
        children:
          ":Note[\u5F39\u6027\u52A8\u753B\u6D89\u53CA\u5230\u7269\u7406\u5B66\u4E2D\u7684\u80E1\u514B\u5B9A\u5F8B\u4E0E\u725B\u987F\u7B2C\u4E8C\u5B9A\u5F8B\uFF0C\u4EBA\u4EEC\u5728\u7535\u8111\u4E2D\u5229\u7528\u516C\u5F0F\u4E0E\u5DF2\u77E5\u53C2\u6570\u8BBE\u8BA1\u51FA\u5F39\u6027\u52A8\u753B\u6A21\u5F0F\u3002\u5982\u679C\u4F60\u5BF9\u5176\u4E2D\u7684\u63A8\u6F14\u8FC7\u7A0B\u611F\u5174\u8DA3\uFF0C\u8BF7\u53C2\u9605\u672B\u5C3E\u7684\u53C2\u8003\u6587\u732E\u3002]",
      }),
      e("h4", { children: "stiffness \u521A\u5EA6" }),
      e("p", {
        children:
          "\u521A\u5EA6\uFF08stiffness\uFF09\u53EF\u4EE5\u7406\u89E3\u4E3A\u5143\u7D20\u7684\u5F39\u529B\u5F3A\u5EA6\uFF08\u5B9E\u9645\u4E0A\u5B83\u5C31\u662F\u80E1\u514B\u5B9A\u5F8B\u4E2D\u7684\u52B2\u5EA6\u7CFB\u6570\uFF09\u3002\u5728\u5176\u4F59\u53C2\u6570\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u6570\u503C\u8D8A\u5927\uFF0C\u7269\u4F53\u5728\u53D1\u751F\u5F62\u53D8\u540E\u8FDB\u884C\u590D\u539F\u65F6\u4EA7\u751F\u7684\u5F39\u529B\u5C31\u8D8A\u5927\u3002",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/SfVZvcYKq?highlights=0]",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          'transition={{type:"spring", damping: 10, // stiffness: 100 // default stiffness value. }}',
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          ":Note[\u5728\u4EE3\u7801\u4E2D\u4EC5\u8BBE\u7F6E damping \u65F6\uFF0Cstiffness \u5C06\u4EE5 100 \u7684\u9ED8\u8BA4\u503C\u88AB\u8BBE\u7F6E\u3002]",
      }),
      e("h4", { children: " damping \u963B\u529B" }),
      e("p", {
        children:
          "\u963B\u529B\uFF08damping\uFF09\u662F\u5143\u7D20\u8FD0\u52A8\u65F6\u53CD\u4F5C\u7528\u529B\u3002\u7531\u4E8E\u521A\u5EA6\u4EA7\u751F\u7684\u5F39\u529B\uFF0C\u7269\u4F53\u4E00\u822C\u4F1A\u56F4\u7ED5\u7740\u76EE\u6807\u4F4D\u7F6E\u53CD\u590D\u9707\u8361\u3002\u4E3A\u4E86\u8BA9\u7269\u4F53\u505C\u4E0B\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u963B\u529B\u8BA9\u5B83\u9010\u6E10\u8FBE\u5230\u5E73\u8861\u72B6\u6001\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u963B\u529B\u8D8A\u5927\u7269\u4F53\u505C\u6B62\u8FD0\u52A8\u7684\u901F\u5EA6\u5C31\u8D8A\u5FEB\uFF0C\u52A8\u753B\u65F6\u957F\u8D8A\u77ED\u3002",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/fV5e6q8Ha?highlights=0]",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          'transition={{ type:"spring", stiffness: 100  // damping: 10 // default damping value. }}',
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          ":Note[\u5728\u4EE3\u7801\u4E2D\u4EC5\u8BBE\u7F6E stiffness \u65F6\uFF0Cdamping \u5C06\u4EE5 10 \u7684\u9ED8\u8BA4\u503C\u88AB\u8BBE\u7F6E\u3002]",
      }),
      e("h4", { children: "mass \u8D28\u91CF" }),
      e("p", {
        children:
          "\u8D28\u91CF\uFF08mass\uFF09\u4E0E\u6211\u4EEC\u73B0\u5B9E\u4E16\u754C\u7684\u7269\u7406\u89C4\u5219\u7C7B\u4F3C\uFF1A",
      }),
      e("p", {
        children:
          "*\u5F53\u7269\u4F53\u53D7\u5230\u5916\u754C\u7684\u5E72\u6270\u4E0D\u53D8\u65F6\uFF08\u5916\u529B\u4E0D\u53D8\uFF09\uFF0C\u5982\u679C\u7269\u4F53\u7684\u8D28\u91CF\u8D8A\u5927\uFF0C\u7269\u4F53\u7684\u8FD0\u52A8\u72B6\u6001\u5C31\u8D8A\u4E0D\u5BB9\u6613\u53D1\u751F\u6539\u53D8\u3002 \u6240\u4EE5\u8BF4\uFF0C\u7269\u4F53\u7684\u8D28\u91CF\u8D8A\u5927\uFF0C\u5176\u60EF\u6027\u5C31\u8D8A\u5927(\u6765\u81EA\u67D0\u4E00\u518C\u9AD8\u4E2D\u8BFE\u672C)*",
      }),
      e("p", {
        children:
          "\u7B80\u5355\u6765\u8BF4\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u4FDD\u6301\u521A\u5EA6\u4E0E\u963B\u529B\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u8D28\u91CF\u8D8A\u5927\u5143\u7D20\u7684\u8FD0\u52A8\u5C31\u663E\u5F97\u8D8A\u7B28\u91CD\uFF08\u901F\u5EA6\u6162\uFF09\uFF0C\u8D28\u91CF\u8D8A\u5C0F\u5143\u7D20\u7684\u8FD0\u52A8\u5C31\u663E\u5F97\u8D8A\u8F7B\u76C8\uFF08\u901F\u5EA6\u5FEB\uFF09\u3002",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/kA5EKUG4o?highlights=0]",
      }),
      e("p", {
        children:
          "\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u5728 Framer \u4E2D\u8BBE\u8BA1\u7684\u662F\u5E73\u9762 UI \u5143\u7D20\uFF0C\u56E0\u6B64\u53EF\u4EE5\u53EA\u901A\u8FC7\u8C03\u8282\u521A\u5EA6\u4E0E\u963B\u529B\u6765\u5B8C\u6210\u7406\u60F3\u7684\u52A8\u753B\u6548\u679C\u3002\u73B0\u5728\uFF0C\u6765\u8BD5\u8BD5\u5229\u7528\u4E0B\u9762\u7684\u539F\u578B\u6765\u8BD5\u8BD5\u4E0D\u540C\u53C2\u6570\u5BF9\u52A8\u753B\u7684\u5F71\u54CD\u3002",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/qeqLjOxqc?highlights=0]",
      }),
      e("p", {
        children:
          "\u5F39\u6027\u52A8\u753B\u867D\u7136\u4E0D\u80FD\u7CBE\u51C6\u8BBE\u7F6E\u52A8\u753B\u7684\u65F6\u957F\uFF0C\u4F46\u8FD9\u79CD\u4E0D\u786E\u5B9A\u7684\u52A8\u753B\u4E3A\u5C4F\u5E55\u4EA4\u4E92\u5E26\u6765\u4E86\u66F4\u52A0\u771F\u5B9E\u7684\u89C6\u89C9\u4F53\u9A8C\u3002\u6B64\u5916\uFF0CFramer \u4E5F\u63D0\u4F9B\u4E86\u4E00\u79CD\u57FA\u4E8E\u65F6\u95F4\u7684\u65B9\u5F0F\u8BBE\u7F6E\u5F39\u6027\u52A8\u753B\u3002",
      }),
      e("h4", { children: "\u57FA\u4E8E\u65F6\u95F4\u7684\u52A8\u753B" }),
      e("p", {
        children:
          "\u4F7F\u7528\u57FA\u4E8E\u65F6\u95F4\u7684\u52A8\u753B\uFF0C\u53EA\u9700\u8981\u4E3A\u5143\u7D20\u8BBE\u7F6E**\u5F39\u6027**\uFF08bounce\uFF09**\u6301\u7EED\u65F6\u95F4**\uFF08duration\uFF09\u5373\u53EF\u3002",
      }),
      e("p", {
        children:
          ":Note[\u76EE\u524D\uFF0C\u4EC5\u80FD\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u57FA\u4E8E\u65F6\u95F4\u7684\u52A8\u753B\u6548\u679C]",
      }),
      e("h4", { children: "bounce \u5F39\u6027" }),
      e("p", {
        children:
          "\u5F39\u6027\u7684\u8BBE\u7F6E\u533A\u95F4\u5728 0 \uFF5E 1 \u4E4B\u95F4\u3002\u5F53 duration \u88AB\u8BBE\u7F6E\u65F6\uFF0Cbounce \u4F1A\u4EE5 0.25 \u7684\u9ED8\u8BA4\u503C\u88AB\u8BBE\u7F6E\u3002",
      }),
      e("p", { children: "~~~" }),
      e("p", {
        children:
          'transition={{ type:"spring",  duration: 100, // bounce: 0.25 // default bounce value. }}',
      }),
      e("p", { children: "~~~" }),
      e("h4", { children: "duration \u6301\u7EED\u65F6\u95F4" }),
      e("p", {
        children:
          "\u6B64\u53C2\u6570\u4E0E\u7F13\u52A8\u51FD\u6570\u4E00\u81F4\uFF0C\u8BBE\u7F6E\u52A8\u753B\u7684\u6301\u7EED\u65F6\u957F\u3002",
      }),
      e("h4", { children: "\u9700\u8981\u6CE8\u610F\u7684\u662F" }),
      e("p", {
        children:
          "\u5F53 stiffness\u3001damping\u3001mass \u5176\u4E2D\u67D0\u4E2A\u6216\u591A\u4E2A\u53C2\u6570\u5B58\u5728\u65F6\uFF0Cbounce \u4E0E duration \u5C06\u4F1A\u5931\u6548\u3002\u6211\u731C Framer \u5E94\u8BE5\u662F\u5229\u7528 bounce \u4E0E duration \u6765\u8BA1\u7B97\u53E6\u5916\u4E09\u4E2A\u53C2\u6570\u7684\u503C\uFF0C\u672C\u8D28\u4E0A\u4E0E\u8BBE\u7F6E\u4E09\u4E2A\u7269\u7406\u53C2\u6570\u662F\u4E00\u81F4\u7684\uFF0C\u53EA\u4E0D\u8FC7\u66F4\u52A0\u7B80\u4FBF\u3002",
      }),
      e("h3", { children: "\u5176\u4ED6\u51E0\u4E2A\u53C2\u6570" }),
      e("p", {
        children:
          "\u6B64\u5916\uFF0CFramer \u8FD8\u989D\u5916\u63D0\u4F9B\u4E86\u51E0\u4E2A\u53C2\u6570\u8BA9\u6211\u4EEC\u8C03\u8282\u52A8\u753B\u7684\u72B6\u6001\u3002\u8FD9\u4E9B\u53C2\u6570\u53EA\u6709\u5728\u7279\u6B8A\u60C5\u51B5\u4E2D\u624D\u4F1A\u88AB\u7528\u5230\uFF0C\u4E14\u76EE\u524D\u53EA\u80FD\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\uFF0C\u8FD9\u91CC\u8FDB\u884C\u7B80\u5355\u7684\u8BF4\u660E\u4EE5\u4F9B\u53C2\u8003\u3002",
      }),
      e("p", {
        children:
          "- **velocity**: \u5F39\u6027\u52A8\u753B\u7684\u521D\u59CB\u901F\u5EA6\u3002\u5982\u679C\u4E3A velocity \u8BBE\u7F6E\u4E86\u4E00\u4E2A\u8F83\u5927\u503C\uFF0C\u90A3\u4E48\u5728\u5143\u7D20\u51FA\u73B0\u65F6\u4F1A\u6709\u9707\u8361\u6548\u679C\uFF08\u8FDB\u5165\u521D\u59CB\u72B6\u6001\uFF09\u3002",
      }),
      e("p", {
        children:
          "- **restSpeed**: \u5F53\u52A8\u753B\u7684\u901F\u5EA6\u4F4E\u4E8E\u8FD9\u4E2A\u503C\u65F6\u7ED3\u675F\u52A8\u753B\u3002\u6BD4\u5982\u8BBE\u7F6E\u4E3A 10 \u65F6\uFF0C\u5F53\u5143\u7D20\u7684\u52A8\u753B\u901F\u5EA6\u4F4E\u4E8E 10\uFF0C\u5143\u7D20\u4F1A\u7ACB\u5373\u8DF3\u8F6C\u5230\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u72B6\u6001\uFF08\u76EE\u6807\u5173\u952E\u5E27\uFF09\uFF0C\u7C7B\u4F3C\u4E8E\u52A8\u753B\u88AB\u4E2D\u9014\u6253\u65AD\u7684\u6548\u679C\u3002Framer \u63D0\u4F9B\u4E86\u4E00\u79CD\u201Cin units per second\uFF08\u5355\u5143/\u79D2\u201D\u7684\u65B9\u5F0F\u8BA1\u91CF\u52A8\u753B\u901F\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0.01\u3002",
      }),
      e("p", {
        children:
          "- **restDelta**: \u4E0E restSpeed \u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u662F\u5F53\u52A8\u753B\u7684\u201C\u8DDD\u79BB\u201D\u5C0F\u4E8E\u6B64\u503C\u65F6\u7ED3\u675F\u52A8\u753B\u3002\u201C\u8DDD\u79BB\u201D\u7684\u8BA1\u7B97\u65B9\u5F0F\u76EE\u524D\u5C1A\u672A\u5F97\u77E5\u3002",
      }),
      e("p", {
        children:
          "\u5982\u679C\u4F60\u5BF9 restSpeed \u4E0E restDelta \u611F\u5174\u8DA3\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4E0E\u5B98\u65B9\u4EA4\u6D41\u4EE5\u83B7\u5F97\u8BE6\u7EC6\u7684\u89E3\u91CA\u56E0\u4E3A\u4F3C\u4E4E\u5728\u4F7F\u7528\u5B83\u4EEC\u65F6\u9700\u8981\u7EC6\u81F4\u7684\u8BA1\u7B97\u3002",
      }),
      e("h2", { children: "\u6700\u540E" }),
      e("p", {
        children:
          "\u8FD9\u91CC\u5C55\u793A\u4E86\u4E24\u4E2A\u5229\u7528\u5F39\u6027\u52A8\u753B\u5236\u4F5C\u7684\u6548\u679C\uFF0C\u5206\u522B\u662F\u6309\u94AE\u7684\u8FDB\u5165\u6548\u679C\u4E0E\u4FA7\u8FB9\u680F\u5F39\u51FA\u6548\u679C\u3002",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/WEAQbUBkO?highlights=0]",
      }),
      e("p", {
        children:
          ":Prot[https://framer.com/embed/Spring-Animation-Story--7FqjiqVLDtSBFRQ8drDv/QvnA\\_hHOf?highlights=0]",
      }),
      e("p", {
        children:
          "\u66FE\u7ECF\u5728\u7528\u7F13\u52A8\u51FD\u6570\u65F6\uFF0C\u6211\u975E\u5E38\u82E6\u607C\u4E8E\u5982\u4F55\u8BBE\u8BA1\u4E00\u6761\u771F\u5B9E\u81EA\u7136\u7684\u66F2\u7EBF\u6765\u8BBE\u7F6E\u52A8\u753B\u6548\u679C\u3002\u5C3D\u7BA1\u8BB8\u591A\u7F51\u7AD9\u63D0\u4F9B\u4E86\u51FD\u6570\u7684\u53EF\u89C6\u5316\u8BBE\u8BA1\u5DE5\u5177\uFF0C\u4F46\u8FDB\u884C\u4E86\u6570\u6B21\u7684\u53C2\u6570\u8C03\u6574\u540E\uFF0C\u52A8\u753B\u7684\u6548\u679C\u4F9D\u65E7\u5F3A\u5DEE\u4EBA\u610F\uFF08\u4E5F\u8BB8\u8FD9\u4E8E\u6211\u7684\u5F3A\u8FEB\u75C7\u6709\u5173\uFF09\u3002\u5F39\u6027\u52A8\u753B\u5F88\u5927\u7A0B\u5EA6\u4E0A\u7F13\u89E3\u4E86\u6211\u7684\u5F3A\u8FEB\u75C7\uFF0C\u81F3\u5C11\u73B0\u5728\u65E0\u8BBA\u5982\u4F55\u8C03\u6574\u53C2\u6570\uFF0C\u6700\u7EC8\u6548\u679C\u770B\u4E0A\u53BB\u4F9D\u65E7\u975E\u5E38\u8212\u9002\u3002",
      }),
      e("p", { children: e("br", { className: "trailing-break" }) }),
      e("h4", { children: "\u53C2\u8003\u6587\u732E" }),
      e("p", {
        children:
          '1. [\xA0The physics behind spring animations\xA0](https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/ "The physics behind spring animations")  ',
      }),
      e("p", {
        children:
          '2. [\xA0CSS\u5982\u4F55\u5B9E\u73B0\u5F39\u7C27\u52A8\u753B\u6548\u679C\xA0](https://www.w3cplus.com/animation/spring-animation-in-css.html "CSS\u5982\u4F55\u5B9E\u73B0\u5F39\u7C27\u52A8\u753B\u6548\u679C")',
      }),
      e("p", {
        children:
          '3. [A Friendly Introduction to Spring Physics](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/ "A Friendly Introduction to Spring Physics")',
      }),
    ],
  }),
  W = t(r, {
    children: [
      e("h2", { children: "What is a landing page?" }),
      e("p", {
        children:
          "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales\u2014in other words they help you increase your revenue. Unlike typical web pages, landing pages only have one call to action, or CTA, and they are usually tied to a specific marketing or advertising campaign. The hyper-focused nature of landing pages means they come with a pretty standard set of best practices.",
      }),
      e("h2", { children: "Landing pages vs. front pages" }),
      e("p", {
        children:
          "A typical front page or website in general includes a full navigation bar with tons of links throughout the page linking to other pages or pieces of content. A good landing page should only have one link, or multiple links that all point to the same thing. Having one CTA on your landing page increases conversions because there\u2019s less distraction\u2014fewer equally appealing options to prompt your users into leaving your landing page.",
      }),
      e("p", {
        children:
          "Your brand\u2019s front page has totally different goals. It should show off your brand\u2019s personality, let people explore different features, find blogs and support articles, or even apply for a job. But they won\u2019t necessarily purchase your product from the front page. And that\u2019s why we need landing pages.",
      }),
      e("p", {
        children:
          "Since landing pages are tied to specific campaigns, you don\u2019t need to worry about users lacking information about your product. They arrived at your landing page because they were interested in an ad or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web. With super detailed campaigns pointing to easy-to-use landing pages, you\u2019re getting high-quality leads that are actually interested in using your product.",
      }),
      e("h2", { children: "Best practices for creating a landing page" }),
      e("p", {
        children:
          "What makes an easy-to-use landing page? Overall it\u2019s clear, concise, and doesn\u2019t give users any options except for the main CTA.In terms of copy, your landing page should have one clear message. The header of your page should promote the desired action you want visitors to take. And additionally it should explain the benefits of performing this action.",
      }),
      e("p", {
        children:
          "The visual design of your page should be very simple. Unlike your front page, this is not the place to go crazy with brand personality\u2014so no wild animations or complex design elements. You wouldn\u2019t want to distract visitors from performing the main action of your page.",
      }),
      e("p", {
        children:
          "Landing page CTA\u2019s are typically buttons, sometimes accompanied by an input field if you need to collect user information. To ensure your buttons are clicked, make sure they stand out visually. This can be done with contrasting the button color with your page background and clear copy on the button itself. For example, if you are asking visitors to book a demo, write\u201CBook a demo\u201D clearly on the CTA button.",
      }),
    ],
  }),
  R = {
    exports: {
      richText7: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText15: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText10: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText1: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText17: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText8: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText13: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText5: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText12: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText6: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText2: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText9: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText3: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText16: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText4: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText18: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText11: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      richText14: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      __FramerMetadata__: { type: "variable" },
    },
  };
export {
  R as __FramerMetadata__,
  p as richText,
  d as richText1,
  b as richText10,
  S as richText11,
  x as richText12,
  F as richText13,
  k as richText14,
  T as richText15,
  C as richText16,
  I as richText17,
  W as richText18,
  l as richText2,
  m as richText3,
  g as richText4,
  u as richText5,
  f as richText6,
  w as richText7,
  y as richText8,
  v as richText9,
};
//# sourceMappingURL=TYK5zFM4J-2-UDYO5PGC.mjs.map
