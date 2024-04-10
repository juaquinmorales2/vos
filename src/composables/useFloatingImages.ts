import gsap from "gsap";

const useFloatingImages = (ref1: any, ref2: any, ref3: any) => {
  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.1;
  const speed = 0.02;

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e;
    xForce = movementX * speed;
    yForce = movementY * speed;

    // console.log("manageMouseMove");

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  // make images auto movable "chat gpt?"
  const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(ref1.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });
    gsap.set(ref2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(ref3.current, {
      x: `+=${xForce * 0.1}`,
      y: `+=${yForce * 0.1}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return { manageMouseMove };
};

export default useFloatingImages;
