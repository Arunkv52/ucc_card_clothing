interface TableData {
  sno: number;
  type: string;
  height: number;
  rib: number;
  width: number;
}

const tableData: TableData[] = [
  {
    sno: 1,
    type: "Steel Border Wire (4.0 X 1.0)",
    height: 4.0,
    rib: 1.0,
    width: 0.0,
  },
  {
    sno: 2,
    type: "Anti Flock Border Wire - 1501",
    height: 3.2,
    rib: 1.2,
    width: 2.5,
  },
  {
    sno: 3,
    type: "Anti Flock Border Wire - 1504",
    height: 6.5,
    rib: 0.5,
    width: 4.0,
  },
];

const BorderWiresTable = () => {
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
                    Width
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
                      {item.width}
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

export default BorderWiresTable;