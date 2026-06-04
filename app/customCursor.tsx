import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cRef = useRef<HTMLDivElement | null>(null);
  const crRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const c = cRef.current;
    const cr = crRef.current;

    if (!c || !cr) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      c.style.left = mx + "px";
      c.style.top = my + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      cr.style.left = rx + "px";
      cr.style.top = ry + "px";

      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cRef} className="cursor" />
      <div ref={crRef} className="cursor-ring" />
    </>
  );
}
