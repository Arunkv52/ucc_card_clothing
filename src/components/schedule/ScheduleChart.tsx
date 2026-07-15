
/* ---------- Colors (sampled from source chart) ---------- */
const ORANGE = "#F39018";
const GREEN = "#A0D010";
const BLUE = "#004F93";
const RED = "#DB2B1C";
const INK = "#231F20";

/* ---------- Scale ---------- */
const TON_MIN = 100;
const TON_MAX = 1200;
const TICKS: number[] = [];
for (let t = TON_MIN; t <= TON_MAX; t += 50) TICKS.push(t);

const MARGIN_LEFT = 232;
const PLOT_WIDTH = 900;
const tonToX = (ton: number) =>
  MARGIN_LEFT + ((ton - TON_MIN) / (TON_MAX - TON_MIN)) * PLOT_WIDTH;

/* ---------- Row geometry ---------- */
const ROW_Y = {
  cylinder: 92,
  doffer: 142,
  flatTops: 190,
  sfTops: 238,
  lickerin: 296,
};
const AXIS_Y = 328;
const TOP_Y = 14; // top of the full-height guide lines / label area

/* ---------- Full-height guide lines (every 150 tons) ---------- */
const GRID_TONS = [150, 300, 450, 600, 750, 900, 1050, 1200];

/* ---------- Special dashed lines ---------- */
const DASHED_BLACK = 350;
const DASHED_ORANGE = 650;
const DASHED_RED = 800;


/* ---------- Top annotation labels (above the Unistar Cylinder row) ---------- */
type TopLabel = { ton: number; lines: { text: string; color: string; bold?: boolean }[] };
const TOP_LABELS: TopLabel[] = [
  { ton: 350, lines: [{ text: "Resharp", color: INK }, { text: "(if needed)", color: INK }] },
  {
    ton: 450,
    lines: [
      { text: "Recloth", color: INK },
      { text: "Unicarb", color: RED, bold: true },
      { text: "Wire", color: INK },
    ],
  },
  {
    ton: 650,
    lines: [
      { text: "Recloth", color: INK },
      { text: "Unichorme", color: RED, bold: true },
      { text: "Wire", color: INK },
    ],
  },
   {
    ton: 800,
    lines: [
      { text: "Recloth", color: INK },
      { text: "Stilo", color: RED, bold: true },
      { text: "Wire", color: INK },
    ],
  },
  {
    ton: 900,
    lines: [
      { text: "Recloth", color: INK },
      { text: "Unistar, Unistar Plus", color: RED, bold: true },
      { text: "Wire", color: INK },
    ],
  },
  {
    ton: 1200,
    lines: [
      { text: "Recloth", color: INK },
      { text: "Unimax", color: RED, bold: true },
      { text: "Wire", color: INK },
    ],
  },
];

/* ---------- Row marker data ---------- */
type Marker = {
  ton: number;
  kind: "green" | "blue";
  above?: string;
  below?: string;
};

const CYLINDER_MARKERS: Marker[] = [
  { ton: 350, kind: "green" },
  { ton: 450, kind: "blue" },
  { ton: 600, kind: "blue" },
  { ton: 650, kind: "green" },
   { ton: 800, kind: "green" },
  { ton: 900, kind: "blue" },
  { ton: 1200, kind: "blue" },
];

const DOFFER_MARKERS: Marker[] = [
  { ton: 150, kind: "green", below: "Resharp" },
  { ton: 300, kind: "green", below: "Resharp" },
  { ton: 450, kind: "green", below: "Resharp" },
  { ton: 600, kind: "green", below: "Resharp" },
  { ton: 750, kind: "green", below: "Resharp" },
  
  { ton: 900, kind: "green", below: "Resharp" },
  { ton: 1050, kind: "green", below: "Resharp" },
  { ton: 1200, kind: "blue" },
];

const FLATTOPS_MARKERS: Marker[] = [
  { ton: 150, kind: "green", below: "Resharp" },
  { ton: 300, kind: "green", below: "Resharp" },
  { ton: 450, kind: "blue", above: "Recloth" },
  { ton: 900, kind: "blue" },
  { ton: 1200, kind: "blue" },
];

const SFTOPS_MARKERS: Marker[] = [
  { ton: 400, kind: "blue", above: "Recloth" },
  { ton: 900, kind: "blue" },
  { ton: 1200, kind: "blue" },
];

const LICKERIN_MARKERS: Marker[] = GRID_TONS.map((ton, i) => ({
  ton,
  kind: "blue" as const,
  above: "Recloth",
  below: i % 2 === 0 ? "SFL 1" : "SFL1&2",
}));

/* ---------- Small building blocks ---------- */
const Diamond: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <rect
    x={x - 5}
    y={y - 5}
    width={10}
    height={10}
    fill={GREEN}
    stroke="white"
    strokeWidth={0.5}
    transform={`rotate(45 ${x} ${y})`}
  />
);

const Dot: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <circle cx={x} cy={y} r={6} fill={BLUE} stroke="white" strokeWidth={0.5} />
);

const ScheduleChart: React.FC = () => {
  const width = 1250;
  const height = 430;

  return (
    <div className="w-full overflow-x-auto bg-white px-15">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        
      >
        {/* ---------- Full height grid lines (every 150 tons) ---------- */}
        {GRID_TONS.map((ton) => (
          <line
            key={`grid-${ton}`}
            x1={tonToX(ton)}
            x2={tonToX(ton)}
            y1={TOP_Y + 46}
            y2={AXIS_Y}
            stroke={ORANGE}
            strokeWidth={2.5}
          />
        ))}

        {/* ---------- Dashed special lines ---------- */}
        <line
          x1={tonToX(DASHED_BLACK)}
          x2={tonToX(DASHED_BLACK)}
          y1={TOP_Y + 46}
          y2={AXIS_Y}
          stroke={INK}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
        <line
          x1={tonToX(DASHED_ORANGE)}
          x2={tonToX(DASHED_ORANGE)}
          y1={TOP_Y + 46}
          y2={AXIS_Y}
          stroke={ORANGE}
          strokeWidth={2.5}
          strokeDasharray="6 5"
        />

        {/* ---------- Top annotation text (above Unistar Cylinder row) ---------- */}
        {TOP_LABELS.map((tl) => {
          const x = tonToX(tl.ton);
          return (
            <text
              key={`toplabel-${tl.ton}`}
              x={x}
              y={TOP_Y}
              textAnchor="middle"
              fontSize={13}
            >
              {tl.lines.map((ln, i) => (
                <tspan
                  key={i}
                  x={x}
                  dy={i === 0 ? 0 : 15}
                  fill={ln.color}
                  fontWeight={ln.bold ? 700 : 400}
                >
                  {ln.text}
                </tspan>
              ))}
            </text>
          );
        })}

        {/* ---------- Row label text (left side) ---------- */}
        <text x={4} y={ROW_Y.cylinder + 10} fontSize={14} fill={INK}>
          Unistar Cylinder
        </text>
        <text x={4} y={ROW_Y.doffer + 10} fontSize={14} fill={INK}>
          Unistar Doffer
        </text>
        <text x={4} y={ROW_Y.flatTops + 10} fontSize={14} fill={INK}>
          Flat Tops
        </text>
        <text x={4} y={ROW_Y.sfTops + 8} fontSize={14} fill={INK}>
          <tspan x={4} dy={0}>S.F Tops</tspan>
          <tspan x={4} dy={17}>POS&amp;SFD</tspan>
        </text>
        <text x={4} y={ROW_Y.lickerin + 8} fontSize={14} fill={INK}>
          <tspan x={4} dy={0}>UniStar Lickerin &amp; S.F top</tspan>
          <tspan x={4} dy={17}>(SFL side)</tspan>
        </text>

        {/* ---------- Row baselines ---------- */}
        {Object.values(ROW_Y).map((y, i) => (
          <line
            key={`rowline-${i}`}
            x1={tonToX(TON_MIN)}
            x2={tonToX(TON_MAX)}
            y1={y}
            y2={y}
            stroke="#FDCB6E"
            strokeWidth={2.5}
          />
        ))}

        {/* ---------- Bottom axis baseline ---------- */}
        <line
          x1={tonToX(TON_MIN)}
          x2={tonToX(TON_MAX)}
          y1={AXIS_Y}
          y2={AXIS_Y}
          stroke={ORANGE}
          strokeWidth={2}
        />

        {/* ---------- Axis ticks + rotated numbers ---------- */}
        {TICKS.map((t) => (
          <g key={`tick-${t}`}>
            <line
              x1={tonToX(t)}
              x2={tonToX(t)}
              y1={AXIS_Y}
              y2={AXIS_Y + 14}
              stroke={ORANGE}
              strokeWidth={2.5}
            />
            <text
              x={tonToX(t) - 6}
              y={AXIS_Y + 20}
              fontSize={12}
              fill={INK}
              textAnchor="end"
              transform={`rotate(-90 ${tonToX(t) - 6} ${AXIS_Y + 20})`}
            >
              {t}
            </text>
          </g>
        ))}
        <text
          x={tonToX(TON_MAX) + 24}
          y={AXIS_Y + 20}
          fontSize={13}
          fill={INK}
          fontWeight={700}
          textAnchor="end"
          transform={`rotate(-90 ${tonToX(TON_MAX) + 24} ${AXIS_Y + 20})`}
        >
          TONS
        </text>

        {/* ---------- Markers: Unistar Cylinder ---------- */}
        {CYLINDER_MARKERS.map((m) =>
          m.kind === "green" ? (
            <Diamond key={`cyl-${m.ton}`} x={tonToX(m.ton)} y={ROW_Y.cylinder} />
          ) : (
            <Dot key={`cyl-${m.ton}`} x={tonToX(m.ton)} y={ROW_Y.cylinder} />
          )
        )}

        {/* ---------- Markers + labels: Unistar Doffer ---------- */}
        {DOFFER_MARKERS.map((m) => (
          <g key={`dof-${m.ton}`}>
            {m.kind === "green" ? (
              <Diamond x={tonToX(m.ton)} y={ROW_Y.doffer} />
            ) : (
              <Dot x={tonToX(m.ton)} y={ROW_Y.doffer} />
            )}
            {m.below && (
              <text
                x={tonToX(m.ton)}
                y={ROW_Y.doffer - 8}
                fontSize={13}
                fill={INK}
                textAnchor="middle"
              >
                {m.below}
              </text>
            )}
          </g>
        ))}

        {/* ---------- Markers + labels: Flat Tops ---------- */}
        {FLATTOPS_MARKERS.map((m) => (
          <g key={`ft-${m.ton}`}>
            {m.kind === "green" ? (
              <Diamond x={tonToX(m.ton)} y={ROW_Y.flatTops} />
            ) : (
              <Dot x={tonToX(m.ton)} y={ROW_Y.flatTops} />
            )}
            {m.below && (
              <text
                x={tonToX(m.ton)}
                y={ROW_Y.flatTops - 8}
                fontSize={13}
                fill={INK}
                textAnchor="middle"
              >
                {m.below}
              </text>
            )}
            {m.above && (
              <text
                x={tonToX(m.ton)}
                y={ROW_Y.flatTops - 8}
                fontSize={13}
                fill={INK}
                textAnchor="middle"
              >
                {m.above}
              </text>
            )}
          </g>
        ))}

        {/* ---------- Markers + labels: S.F Tops POS&SFD ---------- */}
        {SFTOPS_MARKERS.map((m) => (
          <g key={`sft-${m.ton}`}>
            <Dot x={tonToX(m.ton)} y={ROW_Y.sfTops} />
            {m.above && (
              <text
                x={tonToX(m.ton)}
                y={ROW_Y.sfTops - 8}
                fontSize={13}
                fill={INK}
                textAnchor="middle"
              >
                {m.above}
              </text>
            )}
          </g>
        ))}

        {/* ---------- Markers + labels: UniStar Lickerin & S.F top ---------- */}
        {LICKERIN_MARKERS.map((m) => (
          <g key={`lick-${m.ton}`}>
            <Dot x={tonToX(m.ton)} y={ROW_Y.lickerin} />
            <text
              x={tonToX(m.ton)}
              y={ROW_Y.lickerin - 8}
              fontSize={13}
              fill={INK}
              textAnchor="middle"
            >
              {m.above}
            </text>
            <text
              x={tonToX(m.ton)}
              y={ROW_Y.lickerin + 18}
              fontSize={11}
              fill={INK}
              textAnchor="middle"
            >
              {m.below}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ScheduleChart;