
interface TableData {
  sno: number;
  type: string;
  height: number;
  rib: number;
  angle: number;
  ppsi: number;
}

const tableData: TableData[] = [
  { sno: 1, type: "CP 1735 x 0.4 - 960", height: 1.7, rib: 0.4, angle: 35, ppsi: 960 },
  { sno: 2, type: "CR 1730 x 0.5 - 860", height: 1.7, rib: 0.5, angle: 30, ppsi: 860 },
  { sno: 3, type: "CR 2035 x 0.4 - 1080", height: 2.0, rib: 0.4, angle: 35, ppsi: 1080 },
  { sno: 4, type: "CR 2040 x 0.4 - 1080", height: 2.0, rib: 0.4, angle: 40, ppsi: 1080 },
  { sno: 5, type: "CT 2030 x 0.5 - 990", height: 2.0, rib: 0.5, angle: 30, ppsi: 990 },
  { sno: 6, type: "CP 2035 x 0.4 - 960", height: 2.0, rib: 0.4, angle: 35, ppsi: 960 },
  { sno: 7, type: "CP 2040 x 0.4 - 960", height: 2.0, rib: 0.4, angle: 40, ppsi: 960 },
  { sno: 8, type: "CR 2025 x 0.5 - 860", height: 2.0, rib: 0.5, angle: 25, ppsi: 860 },
  { sno: 9, type: "CR 2030 x 0.5 - 860", height: 2.0, rib: 0.5, angle: 30, ppsi: 860 },
  { sno: 10, type: "CR 2035 x 0.5 - 860", height: 2.0, rib: 0.5, angle: 35, ppsi: 860 },
  { sno: 11, type: "CR 2040 x 0.5 - 860", height: 2.0, rib: 0.5, angle: 40, ppsi: 860 },
  { sno: 12, type: "CQ 2025 x 0.5 - 810", height: 2.0, rib: 0.5, angle: 25, ppsi: 810 },
  { sno: 13, type: "CR 2030 x 0.6 - 720", height: 2.0, rib: 0.6, angle: 30, ppsi: 720 },
  { sno: 14, type: "CQ 2525 x 0.5 - 810", height: 2.0, rib: 0.5, angle: 25, ppsi: 810 },
  { sno: 15, type: "CR 2530 x 0.5 - 860", height: 2.5, rib: 0.5, angle: 30, ppsi: 860 },
  { sno: 16, type: "CP 2530 x 0.5 - 760", height: 2.5, rib: 0.5, angle: 30, ppsi: 760 },
  { sno: 17, type: "CR 2530 x 0.6 - 720", height: 2.5, rib: 0.6, angle: 30, ppsi: 720 },
  { sno: 18, type: "CR 2525 x 0.6 - 720", height: 2.5, rib: 0.6, angle: 25, ppsi: 720 },
  { sno: 19, type: "CR 2520 x 0.6 - 720", height: 2.5, rib: 0.6, angle: 20, ppsi: 720 },
  { sno: 20, type: "CP 2520 x 0.7 - 550", height: 2.5, rib: 0.7, angle: 20, ppsi: 550 },
  { sno: 21, type: "CR 2520 x 0.7 - 620", height: 2.5, rib: 0.7, angle: 20, ppsi: 620 },
  { sno: 22, type: "CO 2815 x 0.7 - 620", height: 2.8, rib: 0.7, angle: 15, ppsi: 508 },
  { sno: 23, type: "CR 2820 x 0.7 - 620", height: 2.8, rib: 0.7, angle: 20, ppsi: 620 },
  { sno: 24, type: "CP 2815 x 0.8 - 480", height: 2.8, rib: 0.8, angle: 15, ppsi: 480 },
  { sno: 25, type: "CO 3210 x 0.9 - 400", height: 3.2, rib: 0.9, angle: 10, ppsi: 400 },
];

const CylinderwireTable = () => {
  return (
    <section className="bg-white">
      <div className=" px-2">

        <div className="overflow-hidden  border border-gray-200 shadow-lg">
          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead className="bg-[#4a5566] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    S.No
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Type
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Height
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Rib
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Angle
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    PPSI
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((item, index) => (
                  <tr
                    key={item.sno}
                    className={`transition duration-200 hover:bg-[#5d5c5c]
                    ${
                      index % 2 === 0
                        ? "bg-[#fcfcfc] text-black"
                        : "bg-[#393939] text-white"
                    }`}
                  >
                    <td className="px-4 py-3 text-sm">{item.sno}</td>

                    <td className="px-4 py-3 text-sm whitespace-nowrap">
                      {item.type}
                    </td>

                    <td className="px-4 py-3 text-center text-sm">
                      {item.height.toFixed(1)}
                    </td>

                    <td className="px-4 py-3 text-center text-sm">
                      {item.rib.toFixed(1)}
                    </td>

                    <td className="px-4 py-3 text-center text-sm">
                      {item.angle}
                    </td>

                    <td className="px-4 py-3 text-center text-sm">
                      {item.ppsi}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CylinderwireTable;