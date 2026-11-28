const canTilt = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
const tiltDegrees = fraction => 8 * (2 * Math.max(0, Math.min(fraction, 1)) - 1);

for (const face of document.querySelectorAll(".tile > .tile-face")) {
  const tile = face.parentElement;
  let frame = 0;
  let pointer;

  tile.addEventListener("pointermove", event => {
    if (!canTilt.matches || event.pointerType === "touch") return;
    pointer = event;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      // The grid cell stays flat, so its bounds do not change as the card tilts.
      const { left, top, width, height } = tile.getBoundingClientRect();
      const x = tiltDegrees((pointer.clientX - left) / width);
      const y = tiltDegrees((pointer.clientY - top) / height);
      face.style.setProperty("--tilt-x", `${-y}deg`);
      face.style.setProperty("--tilt-y", `${x}deg`);
    });
  }, { passive: true });

  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    face.style.removeProperty("--tilt-x");
    face.style.removeProperty("--tilt-y");
  };
  tile.addEventListener("pointerleave", reset);
  tile.addEventListener("pointercancel", reset);
  canTilt.addEventListener("change", reset);
}
