'use client';


import "@/app/ui/DownChevron.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";


export default () => {
    // const chevronContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // animate(chevronContainer.current, {
        animate("#down-chevron-container", {
            bottom: "+=7px",
            loop: true,
            alternate: true,
            easing: "inQuad",
            duration: 600
        });
    }, []);


    return (
        // <div id="down-chevron-container" ref={chevronContainer}>
        <div id="down-chevron-container">
            <Image
                src={"/icon/downchevron.svg"}
                alt={"Down arrow"}
                width={80}
                height={80}/>

            {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*     width="80"*/}
            {/*     height="80"*/}
            {/*     viewBox="0 0 24 24"*/}
            {/*     fill="none"*/}
            {/*     stroke="currentColor"*/}
            {/*     stroke-width="0.5"*/}
            {/*     stroke-linecap="round"*/}
            {/*     stroke-linejoin="round"*/}
            {/*     className="feather feather-chevron-down">*/}
            {/*    <polyline points="6 9 12 15 18 9"/>*/}
            {/*</svg>*/}
        </div>
    );
}