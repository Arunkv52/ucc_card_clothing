const tableData = [
  {
    sno: "1",
    description: "Zig-Zag No.10 (LC 100)",
    specification: "8.6 mtrs x 38 mm",
    qty: "8.6 mtrs",
  },
  {
    sno: "2",
    description: "CRC CF50 (LC300 to 363)",
    specification: "15.0 mtrs x 20 mm",
    qty: "15.0 mtrs",
  },
  {
    sno: "3",
    description: "Flat clearer roller clothing",
    specification: "1050 x 33 mm",
    qty: "2 pcs",
  },
  {
    sno: "4",
    description: "Clearer rod clothing",
    specification: "1010 x 33 mm",
    qty: "1 pcs",
  },
  {
    sno: "5",
    description: "Flat stripping ( LC 100 )",
    specification: "1030 x 47.5 mm",
    qty: "1 pc",
  },
  {
    sno: "6",
    description: "CRC with clips (LC300 to LC300AV4)",
    specification: "1010 x 58.5 mm",
    qty: "1 pc",
  },
  {
    sno: "6A",
    description: "CRC with clips (LC361 to LC363)",
    specification: "1020 x 58.5 mm",
    qty: "1 pc",
  },
];
const Lmwlc100table = () => {
  return (
    <section className="">
      <div className="md:max-w-7xl w-full mx-auto md:px-4 px-0">
        <div className="overflow-x-auto shadow-lg">
          <table className="min-w-full border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-[#4a5566] text-white">
                <th className="px-4 py-4 text-left text-sm md:text-base font-semibold w-20">
                  S.No
                </th>
                <th className="px-4 py-4 text-left text-sm md:text-base font-semibold">
                  Description
                </th>
                <th className="px-4 py-4 text-left text-sm md:text-base font-semibold">
                  Specification
                </th>
                <th className="px-4 py-4 text-left text-sm md:text-base font-semibold whitespace-nowrap">
                  Qty / Card
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {tableData.map((item, index) => {
                const darkRow = index % 2 === 0;

                return (
                  <tr
                    key={item.sno}
                    className={`${
                      darkRow
                        ? "bg-[#ffffff] text-black"
                        : "bg-[#2e2e2e] text-white"
                    }`}
                  >
                    <td className="px-4 py-3 align-top text-lg ">
                      {item.sno}
                    </td>

                    <td className="px-4 py-3 align-top text-base md:text-base ">
                      {item.description}
                    </td>

                    <td className="px-4 py-3 align-top text-base md:text-base ">
                      {item.specification}
                    </td>

                    <td className="px-4 py-3 align-top text-base md:text-base  whitespace-nowrap">
                      {item.qty}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Lmwlc100table;