const canTilt = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
const tiltDegrees = fraction => 8 * (2 * Math.max(0, Math.min(fraction, 1)) - 1);

for (const media of document.querySelectorAll(".tile-media")) {
  let frame = 0;
  let pointer;

  media.addEventListener("pointermove", event => {
    if (!canTilt.matches || event.pointerType === "touch") return;
    pointer = event;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      // Measure the stationary media slot, not the image being transformed.
      const { left, top, width, height } = media.getBoundingClientRect();
      const x = tiltDegrees((pointer.clientX - left) / width);
      const y = tiltDegrees((pointer.clientY - top) / height);
      media.style.setProperty("--tilt-x", `${-y}deg`);
      media.style.setProperty("--tilt-y", `${x}deg`);
    });
  }, { passive: true });

  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    media.style.removeProperty("--tilt-x");
    media.style.removeProperty("--tilt-y");
  };
  media.addEventListener("pointerleave", reset);
  media.addEventListener("pointercancel", reset);
  canTilt.addEventListener("change", reset);
}
