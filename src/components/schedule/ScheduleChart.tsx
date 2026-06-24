const data = [
  {
    title: 'Unistar Cylinder',
    points: [
      { x: 450, text: 'Recloth\nUnicarb\nWire', color: 'bg-pink-600' },
      { x: 600, text: 'Recloth\nUnichrome\nWire', color: 'bg-pink-600' },
      { x: 650, text: '', color: 'bg-pink-600' },
      { x: 900, text: 'Recloth\nUnistar, Unistar Plus\nWire', color: 'bg-pink-600' },
      { x: 1200, text: '', color: 'bg-pink-600' },
    ],
  },
  {
    title: 'Unistar Doffer',
    points: [
      { x: 150, text: 'Resharp', color: 'bg-lime-500' },
      { x: 300, text: 'Resharp', color: 'bg-lime-500' },
      { x: 450, text: 'Resharp', color: 'bg-lime-500' },
      { x: 600, text: 'Resharp', color: 'bg-lime-500' },
      { x: 750, text: 'Resharp', color: 'bg-lime-500' },
      { x: 900, text: 'Resharp', color: 'bg-lime-500' },
      { x: 1050, text: '', color: 'bg-lime-500' },
      { x: 1200, text: '', color: 'bg-pink-600' },
    ],
  },
  {
    title: 'Flat Tops',
    points: [
      { x: 150, text: 'Resharp', color: 'bg-lime-500' },
      { x: 300, text: 'Resharp', color: 'bg-lime-500' },
      { x: 450, text: 'Recloth', color: 'bg-pink-600' },
      { x: 900, text: 'Recloth', color: 'bg-pink-600' },
      { x: 1200, text: '', color: 'bg-pink-600' },
    ],
  },
  {
    title: 'S.F Tops\nPOS&SFD',
    points: [
      { x: 400, text: 'Recloth', color: 'bg-pink-600' },
      { x: 900, text: 'Recloth', color: 'bg-pink-600' },
      { x: 1200, text: '', color: 'bg-pink-600' },
    ],
  },
  {
    title: 'UniStar Lickerin\n& S.F Top\n(SFL side)',
    points: [
      { x: 150, text: 'Recloth\nSFL1', color: 'bg-pink-600' },
      { x: 300, text: 'Recloth\nSFL1&2', color: 'bg-pink-600' },
      { x: 450, text: 'Recloth\nSFL1', color: 'bg-pink-600' },
      { x: 600, text: 'Recloth\nSFL1&2', color: 'bg-pink-600' },
      { x: 750, text: 'Recloth\nSFL1', color: 'bg-pink-600' },
      { x: 900, text: 'Recloth\nSFL1&2', color: 'bg-pink-600' },
      { x: 1050, text: 'Recloth\nSFL1', color: 'bg-pink-600' },
      { x: 1200, text: 'Recloth\nSFL1&2', color: 'bg-pink-600' },
    ],
  },
];

const scale = (value: number) => ((value - 100) / 1100) * 1100;

export default function ScheduleChart() {
  return (
    <section className="w-full bg-white py-10">
      <div className="md:px-20 px-5">
        <div className="overflow-x-auto ">
          <div className="relative w-full h-[550px]">

            {/* Horizontal Lines */}
            {data.map((_, index) => (
              <div
                key={index}
                className="absolute left-[140px] right-0 border-t border-pink-300"
                style={{
                  top: `${80 + index * 85}px`,
                }}
              />
            ))}

            {/* Labels */}
            {data.map((row, index) => (
              <div
                key={index}
                className="absolute left-0 w-[130px] text-sm font-medium text-gray-700 whitespace-pre-line"
                style={{
                  top: `${65 + index * 85}px`,
                }}
              >
                {row.title}
              </div>
            ))}

            {/* Vertical Grid */}
            {Array.from({ length: 12 }).map((_, i) => {
              const value = 100 + i * 100;

              return (
                <div key={value}>
                  <div
                    className="absolute top-[90px] bottom-[70px] border-l border-pink-300"
                    style={{
                      left: `${140 + scale(value)}px`,
                    }}
                  />

                  <div
                    className="absolute bottom-0 text-xs text-gray-600 -rotate-90 origin-top-left"
                    style={{
                      left: `${145 + scale(value)}px`,
                    }}
                  >
                    {value}
                  </div>
                </div>
              );
            })}

            {/* Dotted Lines */}
            {[350, 650].map((value) => (
              <div
                key={value}
                className="absolute top-[40px] bottom-[70px] border-l-2 border-dashed border-black"
                style={{
                  left: `${140 + scale(value)}px`,
                }}
              />
            ))}

            {/* Special Titles */}
            <div
              className="absolute text-sm font-semibold text-center"
              style={{ left: `${140 + scale(350) - 40}px`, top: "10px" }}
            >
              Resharp
              <br />
              (Grind if needed)
            </div>

            {/* Points */}
            {data.map((row, rowIndex) =>
              row.points.map((point, idx) => (
                <div
                  key={`${rowIndex}-${idx}`}
                  className="absolute"
                  style={{
                    left: `${140 + scale(point.x)}px`,
                    top: `${80 + rowIndex * 85}px`,
                  }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${point.color} -translate-x-1/2 -translate-y-1/2`}
                  />

                  <div className="absolute left-2 -top-8 text-xs whitespace-pre-line text-gray-700">
                    {point.text}
                  </div>
                </div>
              ))
            )}

            {/* TONS */}
            <div className="absolute right-0 bottom-0 rotate-90 text-sm font-semibold text-gray-700">
              TONS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}