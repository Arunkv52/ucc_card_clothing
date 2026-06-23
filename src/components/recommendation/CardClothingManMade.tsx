import { useState } from "react";

const C = {
  deep: "#CF94BB",
  light: "#E8CCDF",
  mid: "#D99BC8",
  border: "#E4C7D9",
  ink: "#2B1830",
  rate: ["#FBF2F7", "#F6E1ED", "#EFC4DD"], // pale -> saturated, mirrors gauge level
};

const COL1 = 92; // px – "Production Rate" sticky column width
const COL2 = 118; // px – "Process Count & Range" sticky column width

const dataColCount = 8;

const productionGroups = [
  {
    rate: "Below 20",
    unit: "Kgs / hr",
    gauge: 1,
    rows: [
      {
        process: "Cylinder",
        values: [
          ["CR 2525 x 0.5", "CR 2530 x 0.5", "CR 2520 x 0.6"],
          ["CR 2520 x 0.7", "CR 2520 x 0.6"],
          ["CR 2820 x 0.7", "CP 2815 x 0.8", "CO 3210 x 0.9"],
          ["CR 2530 x 0.5", "CR 2530 x 0.5"],
          ["CR 2520 x 0.6", "CR 2520 x 0.7"],
          ["CR 2520 x 0.6", "CR 2525 x 0.6"],
          ["CR 2530 x 0.5", "CR 2530 x 0.6", "CR 2030 x 0.5"],
          ["CR 2520 x 0.7", "H 2810 x 0.7"],
        ],
      },
      {
        process: "Doffer",
        values: [
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
        ],
      },
      {
        process: "Flat Tops",
        values: [
          ["UNO S400 / 450"],
          ["UNO S300/400", "RECTO 330"],
          ["UNO S300", "RECTO 330"],
          ["UNO S400 / 450"],
          ["UNO S300", "RECTO 330"],
          ["UNO S400", "RECTO 330"],
          ["UNO S400 / 450"],
          ["UNO S300", "RECTO 330"],
        ],
      },
      {
        process: "Lickerin",
        values: [
          ["GLD 5505"],
          ["GLD 5505"],
          ["GLD 5505"],
          ["GLD 5505", "GLE 5510"],
          ["GLD 5505"],
          ["GLD 5505"],
          ["GLD 5505"],
          ["GLD 5505"],
        ],
      },
    ],
  },
  {
    rate: "20 – 40",
    unit: "Kgs / hr",
    gauge: 2,
    rows: [
      {
        process: "Cylinder",
        values: [
          ["CP 2525 x 0.5", "CR 2530 x 0.5"],
          ["CR 2520 x 0.7", "CR 2520 x 0.6"],
          ["CP 2815 x 0.8", "CP 2820 x 0.7"],
          ["CR 2030 x 0.5", "CQ 2025 x 0.5"],
          ["CR 2520 x 0.6", "CR 2520 x 0.7"],
          ["CR 2530 x 0.5", "CR 2030 x 0.5", "CP 2520 x 0.6"],
          ["CR 2525 x 0.5", "CR 2030 x 0.5"],
          ["CR 2520 x 0.7", "CR 2520 x 0.6"],
        ],
      },
      {
        process: "Doffer",
        values: [
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
        ],
      },
      {
        process: "Flat Tops",
        values: [
          ["UNO S400 / 450"],
          ["UNO S300 / 400", "RECTO 330"],
          ["UNO S300", "RECTO 330"],
          ["UNO S400 / 450", "UNO S500", "PG 530"],
          ["UNO S300", "UNO S400 / 450", "PG 530"],
          ["UNO S300", "UNO S400 / 450"],
          ["PG 430", "UNO S400 / 450"],
          ["UNO S300", "RECTO 330"],
        ],
      },
      {
        process: "Lickerin",
        values: [
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
        ],
      },
    ],
  },
  {
    rate: "Above 40",
    unit: "Kgs / hr",
    gauge: 3,
    rows: [
      {
        process: "Cylinder",
        values: [
          ["CP 2025 x 0.5", "CR 2530 x 0.5", "CR 2030 x 0.5"],
          ["CR 2520 x 0.6", "CR 2520 x 0.7"],
          ["CP 2815 x 0.8", "CR 2820 x 0.7"],
          ["CR 2030 x 0.5", "CQ 2025 x 0.5"],
          ["CR 2520 x 0.6", "CR 2520 x 0.7"],
          ["CR 2530 x 0.5", "CR 2030 x 0.5", "CR 2520 x 0.6"],
          ["CR 2530 x 0.5", "CR 2030 x 0.5"],
          ["CR 2525 x 0.6", "CR 2520 x 0.6"],
        ],
      },
      {
        process: "Doffer",
        values: [
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
          ["DN 4030 x 0.85R", "DL4030x0.9RC-310"],
        ],
      },
      {
        process: "Flat Tops",
        values: [
          ["UNO S400 / 450", "UNO S500", "PG 530"],
          ["UNO S300 / 400", "RECTO 330"],
          ["UNO S300", "RECTO 330"],
          ["UNO S400 / 450", "UNO S500", "PG 530"],
          ["UNO S300", "UNO S400", "UNO S450"],
          ["UNO S400 / 450", "UNO S500"],
          ["UNO S400 / 450", "UNO S500"],
          ["UNO S400", "RECTO 330"],
        ],
      },
      {
        process: "Lickerin",
        values: [
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
          ["GLD 5505", "LV8 5005"],
        ],
      },
    ],
  },
];

const flatRows = [];
productionGroups.forEach((group, gi) => {
  group.rows.forEach((row, ri) => {
    flatRows.push({ gi, ri, group, row });
  });
});

function Gauge({ level }) {
  const heights = [7, 11, 15];
  return (
    <div className="mt-1 flex items-end justify-center gap-[3px]" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          style={{
            width: 5,
            height: h,
            borderRadius: 1,
            background: i < level ? C.deep : "#ECD8E5",
          }}
        />
      ))}
    </div>
  );
}

export default function CardClothingManMade() {
  const [hoverCol, setHoverCol] = useState(null);
  const stickyShadow = "2px 0 5px -2px rgba(43,24,48,0.18)";

  const headTh = (extra = {}) => ({
    color: "#fff",
    fontWeight: 600,
    letterSpacing: "0.01em",
    border: `1px solid ${C.border}`,
    ...extra,
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-rose-50 px-3 py-8 sm:px-6">
     

      <div className="mx-auto max-w-screen-2xl">
        {/* Title */}
        <div className="mb-6">
         
          <h1
            className="font-display text-2xl font-semibold sm:text-3xl"
            style={{ color: C.ink }}
          >
            Card Clothing Recommendation Chart - Man Made Fibres
          </h1>
          
        </div>

        {/* Table card */}
        <div
          className="overflow-x-auto"
          style={{ border: `1px solid ${C.border}` }}
        >
          <table className="mmf-table w-full" style={{ minWidth: 1480 }}>
            <colgroup>
              <col style={{ width: COL1 }} />
              <col style={{ width: COL2 }} />
              {Array.from({ length: dataColCount }).map((_, i) => (
                <col key={i} style={{ width: 172 }} />
              ))}
            </colgroup>

            <thead>
              {/* Header row 1 */}
              <tr>
                <th
                  rowSpan={2}
                  className="bg-[#c1ecd1] font-display px-2 py-3 text-center text-[13px]"
                >
                  Production
                  <br />
                  Rate
                </th>
                <th
                  
                  className="px-2 py-3 text-center text-[12.5px] leading-snug"
                >
                  Process Count
                  <br />
                  &amp; Range
                </th>
                <th
                  colSpan={3}
                  style={{ ...headTh(), background: C.light, color: C.ink }}
                  className="px-2 py-3 text-center text-[13px]"
                >
                  100% Polyester
                </th>
                <th
                  rowSpan={2}
                 
                  className="bg-[#c1ecd1] px-2 py-3 text-center text-[12.5px] leading-snug"
                >
                  100%
                  <br />
                  Viscose
                </th>
                <th
                  style={{ ...headTh(), background: C.light, color: C.ink }}
                  className="px-2 py-2 text-center text-[12px] leading-snug"
                >
                  Polyester Viscose
                  <br />
                  (Grey / Dyed)
                </th>
                <th
                  className=" bg-[#c1ecd1] px-2 py-2 text-center text-[12px] leading-snug"
                >
                  PC Blends more
                  <br />
                  Polyester Content
                </th>
                <th
                  style={{ ...headTh(), background: C.light, color: C.ink }}
                  className="px-2 py-2 text-center text-[12px] leading-snug"
                >
                  PC Blends more
                  <br />
                  Cotton Content
                </th>
                <th
                  rowSpan={2}
                  className="bg-[#c1ecd1] px-2 py-3 text-center text-[12.5px] leading-snug"
                >
                  Regenerated
                  <br />
                  Fibres
                </th>
              </tr>

              {/* Header row 2 — denier / dtex */}
              <tr>
                <th
                  style={{
                    ...headTh(),
                    background: C.mid,
                    color: C.ink,
                    position: "sticky",
                    left: COL1,
                    zIndex: 30,
                    boxShadow: stickyShadow,
                  }}
                  className="px-2 py-2 text-center text-[11.5px] font-medium"
                >
                  Denier
                </th>
                {[
                  ["< 1.0 dtex", "38-55"],
                  ["1.2–3.0 dtex", "38-55"],
                  ["< 3.0 dtex"],
                  null, // 100% Viscose – rowspan, no denier value
                  ["1.2–1.5 dtex", "38-55"],
                  ["1.2–1.5 dtex", "38-55"],
                  ["1.2–1.5 dtex", "38-55"],
                  null, // Regenerated Fibres – rowspan, no denier value
                ].map((lines, i) =>
                  lines === null ? null : (
                    <th
                      key={i}
                      onMouseEnter={() => setHoverCol(i)}
                      onMouseLeave={() => setHoverCol(null)}
                      style={{
                        ...headTh(),
                        background: C.mid,
                        color: C.ink,
                        boxShadow:
                          hoverCol === i
                            ? `inset 0 0 0 1000px rgba(140,37,99,0.10)`
                            : undefined,
                      }}
                      className="px-2 py-2 text-center text-[11.5px] font-medium leading-tight"
                    >
                      {lines.map((l, li) => (
                        <div key={li}>{l}</div>
                      ))}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {flatRows.map(({ gi, ri, group, row }) => {
                const zebra = gi % 2 === 0 ? "#FFFFFF" : "#FCF3F8";
                return (
                  <tr key={`${gi}-${ri}`} className="group">
                    {ri === 0 && (
                      <td
                        rowSpan={4}
                        style={{
                          background: C.rate[group.gauge - 1],
                          border: `1px solid ${C.border}`,
                          position: "sticky",
                          left: 0,
                          zIndex: 20,
                        }}
                        className="px-2 py-3 text-center align-middle"
                      >
                        <div
                          className="font-display text-[13px] font-semibold leading-tight"
                          style={{ color: C.deep }}
                        >
                          {group.rate}
                        </div>
                        <div className="font-body text-[11px] text-gray-600">
                          {group.unit}
                        </div>
                        <Gauge level={group.gauge} />
                      </td>
                    )}
                    <td
                      style={{
                        background: zebra,
                        border: `1px solid ${C.border}`,
                        position: "sticky",
                        left: COL1,
                        zIndex: 20,
                        boxShadow: stickyShadow,
                      }}
                      className="font-display px-2 py-3 text-center text-[13px] font-medium"
                    >
                      {row.process}
                    </td>
                    {row.values.map((lines, ci) => (
                      <td
                        key={ci}
                        onMouseEnter={() => setHoverCol(ci)}
                        onMouseLeave={() => setHoverCol(null)}
                        style={{
                          background: zebra,
                          border: `1px solid ${C.border}`,
                          boxShadow:
                            hoverCol === ci
                              ? `inset 0 0 0 1000px rgba(140,37,99,0.07)`
                              : undefined,
                        }}
                        className="px-3 py-3 align-top transition-shadow group-hover:bg-rose-50/40"
                      >
                        {lines.map((l, li) => (
                          <div
                            key={li}
                            className="font-mono-data text-[11.5px] leading-snug"
                            style={{ color: C.ink }}
                          >
                            {l}
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

       
      </div>
    </div>
  );
}