import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";

const INK = "#0B0B0C";

export default function CommonLinkPage() {
  // Stable, randomized opacity per bar — generated once so the
  // "barcode" texture doesn't reshuffle on every re-render.
  const bars = useMemo(() => {
    const count = 70;
    return Array.from({ length: count }, () => 0.14 + Math.random() * 0.34);
  }, []);

  return (
    <div className="w-full  px-4 py-8 sm:px-8 sm:py-12 md:px-5 md:py-14">
      

      <div
        className="bg-[#f59d5b] rdb group relative mx-auto w-full cursor-pointer overflow-hidden transition-colors duration-300"
        style={{ height: "clamp(380px, 27vw, 520px)" }}
      >
        {/* decorative barcode / line pattern */}
        <div
          className="absolute bottom-0 right-0 flex items-stretch justify-between"
          style={{ width: "50%", height: "52%" }}
          aria-hidden="true"
        >
          {bars.map((op, i) => (
            <span
              key={i}
              style={{ width: 2, backgroundColor: "#FFFFFF", opacity: op }}
            />
          ))}
        </div>

        {/* content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14">
          <h1
            className="flex items-center gap-3 text-4xl font-semibold leading-none tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: INK }}
          >
            Connect with us
            <ArrowUpRight
              className="h-7 w-7 -translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 sm:h-9 sm:w-9 md:h-11 md:w-11"
              strokeWidth={2.25}
              style={{ color: INK }}
            />
          </h1>

          <p
            className="max-w-sm text-sm leading-snug sm:text-base"
            style={{ color: INK }}
          >
            Feel the performing products in Unimax cotton series, Unistar, Unichrome, Unicarb, Stilo and Uno flat tops, Stilo stationary flat tops and fillets
          </p>
        </div>
      </div>
    </div>
  );
}