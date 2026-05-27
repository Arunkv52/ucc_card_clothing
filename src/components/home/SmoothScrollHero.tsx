import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import Product1 from '../../assets/home/Products/prod-1.png'
import Product2 from '../../assets/home/Products/prod-1.png'
import Product3 from '../../assets/home/Products/bg-img.jpg'
import Product4 from '../../assets/home/Products/prod-9.jpg'





export const SmoothScrollHero = () => {
  return (
    <div className="bg-[#e6e3df]">
      <Hero />
     
    </div>
  );
};



const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{
        height: `calc(${SECTION_HEIGHT}px + 80vh)`,
      }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(
    ${clip1}% ${clip1}%,
    ${clip2}% ${clip1}%,
    ${clip2}% ${clip2}%,
    ${clip1}% ${clip2}%
  )`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          `url(${Product4})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px] space-y-32">
      <ParallaxImg
        src={Product1}
        alt="Launch"
        start={-200}
        end={200}
        className="w-1/3"
      />

      <ParallaxImg
        src={Product3}
        alt="Rocket"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />

      <ParallaxImg
        src={Product2}
        alt="Satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />

      <ParallaxImg
        src={Product3}
        alt="Orbit"
        start={0}
        end={-800}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

type ParallaxImgProps = {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.85]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      style={{ y, opacity, scale }}
      className={`${className} rounded-2xl`}
    />
  );
};



