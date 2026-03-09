'use client';


import "@/app/ui/Footer.css";
import { useEffect, useRef } from "react";


export default () => {
    const yearSpan = useRef<HTMLSpanElement | null>(null);


    useEffect(() => {
        if (yearSpan.current)
            yearSpan.current.textContent = (new Date()).getFullYear().toString();
    }, []);


    return (
        <footer>
            <p id="copyright">©
                <span id="year" ref={yearSpan}>2026</span> Ryn Stewart
            </p>
        </footer>
    );
};