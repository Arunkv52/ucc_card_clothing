interface ConversionData {
  cardModel: string;
  wireTypes: string[];
  conversions: string[];
}

const conversionData: ConversionData[] = [
  {
    cardModel: "LR C1/1, C1/2, C1/3, TC360",
    wireTypes: [
      "Above Lickerin",
      "Above Doffer",
      "Combing segment with Knife",
      "Combing segment without Knife",
    ],
    conversions: [
      "3F",
      "3F+1K+1SD",
      "6F+1K+1SD",
      "2Pcs 2Pcs",
    ],
  },
  {
    cardModel: "DK 715, DK 740",
    wireTypes: [
      "Above Lickerin",
      "Above Doffer",
      "Combing segment",
    ],
    conversions: [
      "7F+1K+1SD",
      "5F+1K+1SD",
      "1 Pc",
    ],
  },
  {
    cardModel: "DK 760, 780, 800 / RIETER C4 & C10",
    wireTypes: [
      "Above Lickerin",
      "Above Doffer",
    ],
    conversions: [
      "8F+1K+1SD",
      "6F+1K+1SD",
    ],
  },
  {
    cardModel: "DK 803",
    wireTypes: [
      "Above Lickerin",
      "Above Doffer",
    ],
    conversions: [
      "6F+1K+1SD",
      "6F+1K+1SD",
    ],
  },
  {
    cardModel: "LC 300, 300A, 300Av3",
    wireTypes: [
      "Above Lickerin",
      "Above Doffer",
    ],
    conversions: [
      "Combing Bar 2 Pcs",
      "6F+1K+1SD",
    ],
  },
];

const CardconversationTable = () => {
  return (
    <section className="px-18 py-10 bg-white">
      <div className="overflow-hidden border border-gray-200 shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#4a5566] text-white">
              <tr>
                <th className="px-5 py-4 text-left font-semibold uppercase">
                  Card Model
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase">
                  Wire Type
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase">
                  Type of Conversion
                </th>
              </tr>
            </thead>

            <tbody>
              {conversionData.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-[#f1f1f1] text-black"
                      : "bg-[#2e2e2e] text-white"
                  }
                >
                  {/* Card Model */}
                  <td className="px-5 py-4 align-top font-semibold whitespace-nowrap">
                    {row.cardModel}
                  </td>

                  {/* Wire Types */}
                  <td className="px-5 py-4 align-top">
                    <div className="space-y-2">
                      {row.wireTypes.map((wire, i) => (
                        <div key={i}>{wire}</div>
                      ))}
                    </div>
                  </td>

                  {/* Conversion */}
                  <td className="px-5 py-4 align-top">
                    <div className="space-y-2 font-semibold">
                      {row.conversions.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CardconversationTable;