import { useState } from "react";

const C = {
  deep: "#8C2563",
  mid: "#BD4F8C",
  sub: "#E7A8CC",
  tint: "#F6DCEC",
  border: "#E3BBD9",
  ink: "#2B1830",
  rate: ["#FBF3F8", "#F8E6F0", "#F2CEE2"], // pale -> saturated, mirrors gauge level
};

const COL1 = 92; // px – "Production Rate" sticky column width
const COL2 = 104; // px – "Process & Count" sticky column width

const dataCols = [
  "Open end & Ring Spinning Count",
  "Surgical / Bleached Cotton",
  "Ring Spinning Medium Count — 20's-40's",
  "Ring Spinning Medium Count — 30's-40's (Combed)",
  "Ring Spinning Fine Count — 40's-60's",
  "Ring Spinning Fine Count — Above 60's",
]; 

const productionGroups = [
  {
    rate: "Below 20",
    unit: "Kgs / hr",
    gauge: 1,
    rows: [
      {
        process: "Cylinder",
        values: [
          ["CR 2030 x 0.5", "CR 2520 x 0.6", "CR 2030 x 0.6"],
          ["CR 2520 x 0.7", "CR 2520 x 0.6"],
          ["CR 2030 x 0.5", "CR 2035 x 0.5"],
          ["CR 2030 x 0.5", "CR 2040 x 0.5"],
          ["CR 2030 x 0.5", "CP 2035 x 0.4"],
          ["CP 2035 x 0.4", "CR 2030 x 0.5"],
        ],
      },
      {
        process: "Doffer",
        values: [
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
        ],
      },
      {
        process: "Flat Top",
        values: [
          ["PG 330", "UNO S300"],
          ["UNO S300", "RECTO 330"],
          ["PG 430", "PG 530", "UNO 410 / 450"],
          ["PG 530", "UNO 510"],
          ["PG 530", "UNO 510 / 550"],
          ["Stilo 580 & 600", "UNO 550"],
        ],
      },
      {
        process: "Lickerin",
        values: [
          ["GLE 5510"],
          ["GLD 5505"],
          ["GLE 5510"],
          ["GLE 5510"],
          ["GLE 5510"],
          ["GLE 5510", "GLD 5505"],
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
          ["CR 2030 x 0.5", "CR 2030 x 0.6", "CR 2520 x 0.6"],
          ["CR 2520 x 0.7", "CR 2520 x 0.6", "CR 2025 x 0.6"],
          ["CR 2030 x 0.5", "CR 2035 x 0.5", "CP 2035 x 0.4"],
          ["CR 2035 x 0.5", "CR 2040 x 0.5", "CP 2035 x 0.4"],
          ["CR 2035 x 0.5", "CR 2040 x 0.5", "CP 2035 x 0.4"],
          ["CR 2035 x 0.4", "CT₂ 2030 x 0.5", "CP 2040 x 0.4"],
        ],
      },
      {
        process: "Doffer",
        values: [
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
        ],
      },
      {
        process: "Flat Tops",
        values: [
          ["PG 430", "UNO S400 (OE)"],
          ["PG 330", "RECTO 330"],
          ["PG 530", "UNO 450 / 510"],
          ["PG 530", "UNO 510 / 550"],
          ["Stilo 580 & 600", "UNO 550"],
          ["Stilo 580, 600 & 700", "UNO 550"],
        ],
      },
      {
        process: "Lickerin",
        values: [
          ["GLE 5510", "LV8 5010"],
          ["GLD 5505", "LV8 5005"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510, GLD 5505", "LV8 5010, LV8 5005"],
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
          ["CR 2030 x 0.5", "CR 2030 x 0.6", "CR 2520 x 0.6"],
          ["CR 2030 x 0.5", "CR 2030 x 0.6"],
          ["CR 2030 x 0.5", "CR 2035 x 0.5", "CR 2035 x 0.4"],
          ["CR 2035 x 0.5", "CP 2035 x 0.4"],
          ["CP 2035 x 0.4", "CP 2040 x 0.4", "CT₂ 2030 x 0.5"],
          ["CR 2035 x 0.4", "CR 2040 x 0.4", "CT₂ 2030 x 0.5"],
        ],
      },
      {
        process: "Doffer",
        values: [
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DL 4030 X 0.9RC-310"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
          ["DN 4030 x 0.85R", "DM 4030 x 0.8"],
        ],
      },
      {
        process: "Flat Tops",
        values: [
          ["PG 430", "UNO S400 (OE)"],
          ["PG 430", "PG 530"],
          ["UNO 450 / 550"],
          ["Stilo 580 & 600", "UNO 550, PG 530"],
          ["Stilo 580 & 600", "UNO 550"],
          ["Stilo 580, 600 & 700", "UNO 550"],
        ],
      },
      {
        process: "Lickerin",
        values: [
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510", "LV8 5010"],
          ["GLE 5510, GLD 5505", "LV8 5010, LV8 5005"],
        ],
      },
    ],
  },
];

// Flatten groups into a single row list so rowSpan-ed cells line up cleanly
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
            background: i < level ? C.deep : "#E9D3E2",
          }}
        />
      ))}
    </div>
  );
}

export default function CardClothingGuide() {
  const [hoverCol, setHoverCol] = useState(null);

  const stickyShadow = "2px 0 5px -2px rgba(43,24,48,0.18)";

  const headTh = (extra = {}) => ({
    color: "#fff",
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,
    letterSpacing: "0.01em",
    border: `1px solid ${C.border}`,
    ...extra,
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-pink-50 px-3 py-8 sm:px-6">
      

      <div className="mx-auto max-w-screen-2xl">
        {/* Title */}
        <div className="mb-6">
         
          <h1
            className="font-display text-2xl font-semibold sm:text-3xl"
            style={{ color: C.ink }}
          >
            Card Clothing Recommendation Chart - Cotton
          </h1>
         
        </div>

        {/* Table card */}
        <div
          className="overflow-x-auto"
          style={{ border: `1px solid ${C.border}` }}
        >
          <table className="ccg-table w-full" style={{ minWidth: 1180 }}>
            <colgroup>
              <col style={{ width: COL1 }} />
              <col style={{ width: COL2 }} />
              {dataCols.map((_, i) => (
                <col key={i} style={{ width: 175 }} />
              ))}
            </colgroup>

            <thead>
              {/* Header row 1 */}
              <tr>
                <th
                  rowSpan={3}
                 
                  className="px-2 py-3 text-center text-[13px] bg-[#c1ecd1]"
                >
                  Production
                  <br />
                  Rate
                </th>
                <th
                  rowSpan={2}
                 
                  className="px-2 py-3 text-center text-[13px] "
                >
                  Process &amp; Count
                </th>
                <th
                  rowSpan={2}
                  className="bg-[#c1ecd1] px-2 py-3 text-center text-[12.5px] leading-snug"
                >
                  Open end &amp; Ring
                  <br />
                  Spinning Count
                </th>
                <th
                  rowSpan={2}
                  
                  className="px-2 py-3 text-center text-[12.5px] leading-snug"
                >
                  Surgical /<br />
                  Bleached Cotton
                </th>
                <th
                  colSpan={2}
                  className="px-2 py-2 text-center text-[13px] bg-[#c1ecd1]"
                >
                  Ring Spinning Medium Count
                </th>
                <th
                  colSpan={2}
                  className="px-2 py-2 text-center text-[13px]"
                >
                  Ring Spinning Fine Count
                </th>
              </tr>

              {/* Header row 2 */}
              <tr>
                <th
                  style={{ ...headTh(), background: C.sub, color: C.ink }}
                  className="px-2 py-2 text-center text-[12px]"
                >
                  20's – 40's
                </th>
                <th
                  style={{ ...headTh(), background: C.sub, color: C.ink }}
                  className="px-2 py-2 text-center text-[12px]"
                >
                  30's – 40's (Combed)
                </th>
                <th
                  style={{ ...headTh(), background: C.sub, color: C.ink }}
                  className="px-2 py-2 text-center text-[12px]"
                >
                  40's – 60's
                </th>
                <th
                  style={{ ...headTh(), background: C.sub, color: C.ink }}
                  className="px-2 py-2 text-center text-[12px]"
                >
                  Above 60's
                </th>
              </tr>

              {/* Header row 3 — micronaire / staple length */}
              <tr>
                <th
                  style={{
                    ...headTh(),
                    background: C.tint,
                    color: C.ink,
                    position: "sticky",
                    left: COL1,
                    zIndex: 30,
                    boxShadow: stickyShadow,
                  }}
                  className="px-2 py-2 text-center text-[11px] font-medium leading-tight"
                >
                  Micronaire
                  <br />
                  Staple length (mm)
                </th>
                {[
                  ["< 5.0", "20–22 mm"],
                  ["3.5–5.0 / ≈27 mm"],
                  ["3.5–5.0 / ≈27 mm"],
                  ["3.5–5.0 / ≈27 mm"],
                  ["2.5–3.0 ≈ 30"],
                  ["2.5–3.0 ≈ 30"],
                ].map((lines, i) => (
                  <th
                    key={i}
                    onMouseEnter={() => setHoverCol(i)}
                    onMouseLeave={() => setHoverCol(null)}
                    style={{
                      ...headTh(),
                      background: C.tint,
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
                ))}
              </tr>
            </thead>

            <tbody>
              {flatRows.map(({ gi, ri, group, row }) => {
                const zebra = gi % 2 === 0 ? "#FFFFFF" : "#FCF4F9";
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
                        className="px-3 py-3 align-top transition-shadow group-hover:bg-pink-50/40"
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