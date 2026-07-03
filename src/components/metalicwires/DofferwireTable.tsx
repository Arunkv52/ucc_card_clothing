
interface TableData {
  sno: number;
  type: string;
  height: number;
  rib: number;
  angle: number;
  ppsi: number;
}

const tableData: TableData[] = [
  {
    sno: 1,
    type: "DL 4030 x 0.85 RC - 330",
    height: 4.0,
    rib: 0.85,
    angle: 30,
    ppsi: 330,
  },
  {
    sno: 2,
    type: "DN 4030 x 0.85 R - 390",
    height: 4.0,
    rib: 0.85,
    angle: 30,
    ppsi: 390,
  },
  {
    sno: 3,
    type: "DM 4030 x 0.8 - 380",
    height: 4.0,
    rib: 0.8,
    angle: 30,
    ppsi: 380,
  },
  {
    sno: 4,
    type: "DL 4030 x 0.9 RC - 310",
    height: 4.0,
    rib: 0.9,
    angle: 30,
    ppsi: 310,
  },
  {
    sno: 5,
    type: "DK 4035 x 0.8 UC - 320",
    height: 4.0,
    rib: 0.8,
    angle: 35,
    ppsi: 320,
  },
  {
    sno: 6,
    type: "DL 4030 x 1.0 RC - 280",
    height: 4.0,
    rib: 1.0,
    angle: 30,
    ppsi: 280,
  },
  {
    sno: 7,
    type: "DM 4730 x 1.0 - 305",
    height: 4.7,
    rib: 1.0,
    angle: 30,
    ppsi: 305,
  },
  {
    sno: 8,
    type: "DM 5030 x 0.9 - 340",
    height: 5.0,
    rib: 0.9,
    angle: 30,
    ppsi: 340,
  },
];

const DofferwireTable = () => {
  return (
    <section className="bg-white">
      <div className=" px-0">

        <div className="overflow-hidden  border border-gray-200 shadow-lg mt-10">
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

export default DofferwireTable;