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
import GrafanaOriginalWordmark from 'devicons-react/icons/GrafanaOriginalWordmark';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';


import { useEffect, useRef, useState } from "react";
import React from "react";

export default function IconCarousel() {
    const baseIcons: React.ReactElement<any>[] = [
        <Html5OriginalWordmark size="100" />,
        <Css3OriginalWordmark size="100" />,
        <RemixOriginalWordmark size="100" />,
        <TailwindcssPlainWordmark size="100" />,
        <JavaOriginalWordmark size="100" />,
        <JavascriptOriginal size="100" />,
        <ReactOriginalWordmark size="100" />,
        <KotlinOriginalWordmark size="100" />,
        <ReactrouterOriginalWordmark size="100" />,
        <DockerPlainWordmark size="100" />,
        <KubernetesOriginalWordmark size="100" />,
        <FigmaOriginal size="100" />,
        <SpringOriginalWordmark size="100" />,
        <TypescriptOriginal size="100" />,
        <GrafanaOriginalWordmark size="100" />,
    ];

    const [activeIcons, setActiveIcons] = useState<
        { id: number; icon: React.ReactNode; animationDelay: number; startX: number }[]
    >([]);

    const nextId = useRef(0);
    const nextIconIndex = useRef(0);

    const animationDuration = 60;
    const iconWidthPx = 128;
    const spacingPx = 30;

    const [containerWidth, setContainerWidth] = useState(0);

    const totalDistancePx = containerWidth + iconWidthPx + spacingPx;
    const iconSpeedPxPerSec = totalDistancePx / animationDuration;
    const spawnIntervalMs = ((iconWidthPx + spacingPx) / iconSpeedPxPerSec) * 1000;

    useEffect(() => {
        setContainerWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (containerWidth === 0) return;

        const startX = -iconWidthPx - spacingPx;

        const maxIcons = baseIcons.length;
        const initialCount = Math.min(
            maxIcons,
            Math.floor(containerWidth / (iconWidthPx + spacingPx))
        );

        for (let i = initialCount - 1; i >= 0; i--) {
            const icon = baseIcons[i];
            if (!React.isValidElement(icon)) continue;

            const id = nextId.current++;
            const animationDelay = -spawnIntervalMs / 1000 * (initialCount - 1 - i);

            setActiveIcons((prev) => [
                ...prev,
                {
                    id,
                    icon: React.cloneElement(icon),
                    animationDelay,
                    startX,
                },
            ]);
        }

        const interval = setInterval(() => {
            const rawIcon = baseIcons[nextIconIndex.current];
            if (!React.isValidElement(rawIcon)) return;

            const id = nextId.current++;
            const icon = React.cloneElement(rawIcon);

            setActiveIcons((prev) => [
                ...prev,
                {
                    id,
                    icon,
                    animationDelay: 0,
                    startX,
                },
            ]);

            nextIconIndex.current = (nextIconIndex.current + 1) % baseIcons.length;
        }, spawnIntervalMs);

        return () => clearInterval(interval);
    }, [containerWidth]);

    const handleAnimationEnd = (id: number) => {
        setActiveIcons((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="relative md:h-44 w-screen hidden md:inline overflow-hidden border-amber-300/20 border-y-2">
            <div className="absolute overflow-hidden -left-10 top-0 h-full w-1/2 z-20 pointer-events-none bg-gradient-to-r from-black/80 to-black-0/0" />
            <div className="absolute overflow-hidden -right-10 top-0 h-full w-1/2 z-20 pointer-events-none bg-gradient-to-l from-black/80 to-black-0/0" />

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
                    <div className="h-36 w-36 flex items-center justify-center border-amber-300 bg-gradient-to-t from-amber-100 to-black-0/0 border-b-4 rounded-full">
                        {icon}
                    </div>
                </div>
            ))}
        </div>
    );
}