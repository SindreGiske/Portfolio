import ReactrouterOriginalWordmark from "devicons-react/icons/ReactrouterOriginalWordmark";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import TailwindcssPlainWordmark from "devicons-react/icons/TailwindcssPlainWordmark";
import JavaOriginalWordmark from "devicons-react/icons/JavaOriginalWordmark";
import KotlinOriginalWordmark from "devicons-react/icons/KotlinOriginalWordmark";
import FigmaOriginal from "devicons-react/icons/FigmaOriginal";
import SpringOriginalWordmark from "devicons-react/icons/SpringOriginalWordmark";
import ReactOriginalWordmark from "devicons-react/icons/ReactOriginalWordmark";
import RemixOriginalWordmark from "devicons-react/icons/RemixOriginalWordmark";
import DockerPlainWordmark from "devicons-react/icons/DockerPlainWordmark";
import KubernetesOriginalWordmark from "devicons-react/icons/KubernetesOriginalWordmark";
import GrafanaOriginalWordmark from "devicons-react/icons/GrafanaOriginalWordmark";

import React, { useEffect, useRef, useState } from "react";

export default function IconCarousel() {
  const baseIcons: React.ReactElement<any>[] = [
    <RemixOriginalWordmark size="80" />,
    <TailwindcssPlainWordmark size="80" />,
    <JavaOriginalWordmark size="80" />,
    <JavascriptOriginal size="80" />,
    <ReactOriginalWordmark size="80" />,
    <KotlinOriginalWordmark size="80" />,
    <ReactrouterOriginalWordmark size="80" />,
    <DockerPlainWordmark size="80" />,
    <KubernetesOriginalWordmark size="80" />,
    <FigmaOriginal size="80" />,
    <SpringOriginalWordmark size="80" />,
    <GrafanaOriginalWordmark size="80" />,
  ];

  const [activeIcons, setActiveIcons] = useState<
    {
      id: number;
      icon: React.ReactNode;
      animationDelay: number;
      startX: number;
    }[]
  >([]);

  const nextId = useRef(0);
  const nextIconIndex = useRef(0);

  const animationDuration = 60;
  const iconWidthPx = 100;
  const spacingPx = 20;

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
    const initialCount = Math.min(maxIcons, Math.floor(containerWidth / (iconWidthPx + spacingPx)));

    for (let i = initialCount - 1; i >= 0; i--) {
      const icon = baseIcons[i];
      if (!React.isValidElement(icon)) continue;

      const id = nextId.current++;
      const animationDelay = (-spawnIntervalMs / 1000) * (initialCount - 1 - i);

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
    <div className="relative hidden w-screen overflow-hidden border-y-1 border-amber-300/20 md:inline md:h-32">
      <div className="to-black-0/0 pointer-events-none absolute top-0 -left-10 z-20 h-full w-1/2 overflow-hidden bg-gradient-to-r from-black/80" />
      <div className="to-black-0/0 pointer-events-none absolute top-0 -right-10 z-20 h-full w-1/2 overflow-hidden bg-gradient-to-l from-black/80" />

      {activeIcons.map(({ id, icon, animationDelay, startX }, index) => (
        <div
          key={id}
          className="animate-slide-icon absolute top-1/2 -translate-y-1/2"
          style={{
            left: startX,
            animationDelay: `${animationDelay}s`,
            zIndex: index,
          }}
          onAnimationEnd={() => handleAnimationEnd(id)}
        >
          <div className="to-black-0/0 flex h-28 w-28 items-center justify-center rounded-full border-b-4 border-amber-300 bg-gradient-to-t from-amber-100">
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
}
