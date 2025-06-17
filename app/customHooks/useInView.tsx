import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.2) {
    const ref = useRef<T | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!ref.current || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, hasAnimated]);

    return { ref, hasAnimated };
}