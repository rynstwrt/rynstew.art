'use client';

import "@/app/ui/home.css";
import { headerFont, sourceCodePro } from "@/app/ui/fonts";
import DownChevron from "@/app/components/DownChevron";
import React, { useEffect, useRef } from "react";
import IconButton from "@/app/components/IconButton";

import LinkedInIcon from "@/app/icon/linkedin.svg";
import GitHubIcon from "@/app/icon/github.svg";
import ResumeIcon from "@/app/icon/resume.svg";
import { createTimeline, splitText, stagger } from "animejs";


function createNameAnimation(el: HTMLElement) {
    const {words, chars} = splitText(el, {
        words: true,
        chars: true
    });

    createTimeline({
        defaults: {
            duration: 600,
            ease: 'inOut', // ease applied between each keyframes if no ease defined
        },
        delay: 150,
    })
        .add(words, {
            y: "-=0.3lh",
            ease: 'outCubic'
        }, stagger(100))
        .add(chars, {
            duration: 650,

            scale: [
                {to: 1.123, ease: "in"},
                {to: 1, ease: "out"}
            ],

            rotateX: {
                to: "-1turn",
                ease: "inOutSine",
                delay: stagger(35),
            }
        }, 0)
        .add(words, {
            y: 0,
            ease: 'outQuad',
            duration: 400
        }, stagger(150, {reversed: true}));
}


export default () => {
    const titleTextRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (titleTextRef.current)
            createNameAnimation(titleTextRef.current);
    }, []);

    return (
        <section id="landing">
            <main>
                <h1
                    className={`${headerFont.className} antialiased`}
                    ref={titleTextRef}>
                    Ryn<br/>Stewart
                </h1>

                <p id="byline"
                   className={`${sourceCodePro.className} antialiased`}>
                    Artist and full-stack developer in<br/>Dallas, Texas.
                </p>

                <div id="links-container">
                    <IconButton
                        icon={<LinkedInIcon/>}
                        url="https://www.linkedin.com/in/rynstwrt/"/>

                    <IconButton
                        icon={<GitHubIcon/>}
                        url="https://github.com/rynstwrt"/>

                    <IconButton
                        id="portfolio-btn"
                        icon={<ResumeIcon/>}
                        url="/portfolio.pdf"
                        text="Design Portfolio"/>

                    <IconButton
                        id="resume-btn"
                        icon={<ResumeIcon/>}
                        url="/resume.pdf"
                        text="View Resumé"/>
                </div>
            </main>

            <DownChevron/>
        </section>

    );
}