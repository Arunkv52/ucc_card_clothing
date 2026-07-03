
interface TableData {
  sno: number;
  type: string;
  height: number;
  rib: number | string;
  angle: number;
  tpi: number;
}

const tableData: TableData[] = [
  {
    sno: 1,
    type: "LV8 - D5005 - 4T",
    height: 5.0,
    rib: "V8",
    angle: 5,
    tpi: 4.0,
  },
  {
    sno: 2,
    type: "LV8 - E5010 - 5T",
    height: 5.0,
    rib: "V8",
    angle: 10,
    tpi: 5.0,
  },
  {
    sno: 3,
    type: "LV8 - E5000 - 5T",
    height: 5.0,
    rib: "V8",
    angle: 0,
    tpi: 5.0,
  },
  {
    sno: 4,
    type: "LV12 J2-5010 - 9.5T",
    height: 5.0,
    rib: "V12",
    angle: 10,
    tpi: 9.5,
  },
  {
    sno: 5,
    type: "LV12 E-5010 - 5T",
    height: 5.0,
    rib: "V12",
    angle: 10,
    tpi: 5.0,
  },
  {
    sno: 6,
    type: "LV16 K-5020 - 10T",
    height: 5.0,
    rib: "V16",
    angle: 20,
    tpi: 10.0,
  },
  {
    sno: 7,
    type: "LV16 N-5020 - 13T",
    height: 5.0,
    rib: "V16",
    angle: 20,
    tpi: 13.0,
  },
];

const InterlockingTable = () => {
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

export default InterlockingTable;