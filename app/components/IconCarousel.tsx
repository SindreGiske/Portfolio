import ReactrouterOriginalWordmark from 'devicons-react/icons/ReactrouterOriginalWordmark';
import Html5OriginalWordmark from 'devicons-react/icons/Html5OriginalWordmark';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import TailwindcssPlainWordmark from 'devicons-react/icons/TailwindcssPlainWordmark';
import Css3OriginalWordmark from 'devicons-react/icons/Css3OriginalWordmark';
import JavaOriginalWordmark from 'devicons-react/icons/JavaOriginalWordmark';
import KotlinOriginalWordmark from 'devicons-react/icons/KotlinOriginalWordmark';
import FigmaOriginal from 'devicons-react/icons/FigmaOriginal';
import SpringOriginalWordmark from 'devicons-react/icons/SpringOriginalWordmark';
import ReactOriginalWordmark from 'devicons-react/icons/ReactOriginalWordmark';
import RemixOriginalWordmark from 'devicons-react/icons/RemixOriginalWordmark';
import DockerPlainWordmark from 'devicons-react/icons/DockerPlainWordmark';
import KubernetesOriginalWordmark from 'devicons-react/icons/KubernetesOriginalWordmark';
import UbuntuOriginalWordmark from 'devicons-react/icons/UbuntuOriginalWordmark';
import GrafanaOriginalWordmark from 'devicons-react/icons/GrafanaOriginalWordmark';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';


import { useEffect, useRef, useState } from "react";
import React from "react";

export default function IconCarousel() {
    const baseIcons = [
        <Html5OriginalWordmark />,
        <Css3OriginalWordmark />,
        <RemixOriginalWordmark />,
        <TailwindcssPlainWordmark />,
        <JavaOriginalWordmark />,
        <JavascriptOriginal />,
        <ReactOriginalWordmark />,
        <KotlinOriginalWordmark />,
        <ReactrouterOriginalWordmark />,
        <DockerPlainWordmark />,
        <KubernetesOriginalWordmark />,
        <FigmaOriginal />,
        <SpringOriginalWordmark />,
        <TypescriptOriginal />,
        <UbuntuOriginalWordmark />,
        <GrafanaOriginalWordmark />,
    ];

    const [activeIcons, setActiveIcons] = useState<
        { id: number; icon: React.ReactNode; animationDelay: number; startX: number }[]
    >([]);
    const nextId = useRef(0);
    const nextIconIndex = useRef(0);

    const animationDuration = 60; // seconds
    const iconWidthPx = 128;
    const spacingPx = 26; // margin between icons

    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        setContainerWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (containerWidth === 0) return;

        const totalDistancePx = containerWidth + iconWidthPx + spacingPx;
        const initialCount = Math.floor(containerWidth / (iconWidthPx + spacingPx));
        const startX = -iconWidthPx - spacingPx;

        // Prefill initial icons
        for (let i = 0; i < initialCount; i++) {
            const icon = baseIcons[i % baseIcons.length];
            const id = nextId.current++;
            const animationDelay = -(animationDuration / initialCount) * i;

            setActiveIcons((prev) => [
                ...prev,
                {
                    id,
                    icon: React.cloneElement(icon, { size: "100" }),
                    animationDelay,
                    startX,
                },
            ]);
        }

        const spawnInterval = (animationDuration * (iconWidthPx + spacingPx)) / totalDistancePx * 1000;

        const interval = setInterval(() => {
            const icon = baseIcons[nextIconIndex.current];
            const id = nextId.current++;

            console.log(`Spawning icon index ${nextIconIndex.current}, id ${id}`); // Debug log

            setActiveIcons((prev) => [
                ...prev,
                {
                    id,
                    icon: React.cloneElement(icon, { size: "100" }),
                    animationDelay: 0,
                    startX,
                },
            ]);

            nextIconIndex.current = (nextIconIndex.current + 1) % baseIcons.length;
        }, spawnInterval);

        return () => clearInterval(interval);
    }, [containerWidth]);

    const handleAnimationEnd = (id: number) => {
        setActiveIcons((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="relative h-36 w-screen overflow-hidden">
            <div className="absolute overflow-hidden -left-10 top-0 h-full w-1/2 z-20 pointer-events-none bg-gradient-to-r from-black/90 to-black-0/0" />
            <div className="absolute overflow-hidden -right-10 top-0 h-full w-1/2 z-20 pointer-events-none bg-gradient-to-l from-black/90 to-black-0/0" />
            {activeIcons.map(({ id, icon, animationDelay, startX }, index) => (
                <div
                    key={id}
                    className="absolute top-1/2 -translate-y-1/2 animate-slide-icon"
                    style={{
                        left: startX,
                        animationDelay: `${animationDelay}s`,
                        zIndex: index,
                    }}
                    onAnimationEnd={() => handleAnimationEnd(id)}
                >
                    <div className="h-36 w-36 flex items-center justify-center border-amber-300  bg-gradient-to-t from-amber-50 to-black-0/0 border-b-4 rounded-full">
                        {icon}
                    </div>
                </div>
            ))}
        </div>
    );
}