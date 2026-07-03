interface TableData {
  sno: number;
  type: string;
  height: number;
  rib: string;
  angle: number;
  tpi: number;
}

const tableData: TableData[] = [
  {
    sno: 1,
    type: "GLC 5500 - 3T",
    height: 5.5,
    rib: "1.1 to 1.6",
    angle: 0,
    tpi: 3,
  },
  {
    sno: 2,
    type: "GLD 5505 - 4T",
    height: 5.5,
    rib: "1.1 to 1.6",
    angle: 5,
    tpi: 4,
  },
  {
    sno: 3,
    type: "GLF 5510 - 5T",
    height: 5.5,
    rib: "1.1 to 1.6",
    angle: 10,
    tpi: 5,
  },
  {
    sno: 4,
    type: "GLE 5500 - 5T",
    height: 5.5,
    rib: "1.1 to 1.6",
    angle: 0,
    tpi: 5,
  },
];

const GroovedlickedTable = () => {
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

export default GroovedlickedTable;