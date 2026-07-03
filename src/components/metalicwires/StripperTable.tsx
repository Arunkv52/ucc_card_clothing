interface TableData {
  sno: number;
  type: string;
  height: number;
  rib: string | number;
  angle: number;
  tpi: number;
}

const tableData: TableData[] = [
  {
    sno: 1,
    type: "Stripper wire TR12 (SG2 4028 x 1.8)",
    height: 4.0,
    rib: 1.8,
    angle: -28,
    tpi: 7.5,
  },
  {
    sno: 2,
    type: "Stripper wire (H3530 x 1.0)",
    height: 3.5,
    rib: 1.0,
    angle: -30,
    tpi: 8.0,
  },
  {
    sno: 3,
    type: "Feed Roller wire FV6-TR5",
    height: 5.0,
    rib: 4.2,
    angle: 15,
    tpi: 2.0,
  },
  {
    sno: 4,
    type: "Chute Beater Wire-TR11",
    height: 5.5,
    rib: "V6",
    angle: 0,
    tpi: 4.5,
  },
  {
    sno: 5,
    type: "J 2500 x 2.0",
    height: 2.5,
    rib: 2.0,
    angle: 0,
    tpi: 9.0,
  },
  {
    sno: 6,
    type: "F2 3500 x 3.0",
    height: 3.5,
    rib: 3.0,
    angle: 0,
    tpi: 6.5,
  },
];

const StripperTable = () => {
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
                      {item.rib}
                    </td>

                    <td className="px-4 py-3 text-center text-sm">
                      {item.angle}
                    </td>

                    <td className="px-4 py-3 text-center text-sm">
                      {item.tpi}
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

export default StripperTable;