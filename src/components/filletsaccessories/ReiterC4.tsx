const tableData = [
  {
    sno: "1",
    description: "Zig Zag No.10 (C4)",
    specification: "8 mtrs x 40 mm",
    qty: "8 mtrs",
  },
  {
    sno: "1A",
    description: "Clearer Roller Clothing CF50 (C50, C51)",
    specification: "13 mtrs x 20 mm",
    qty: "13 mtrs",
  },
  {
    sno: "1B",
    description: "Special CRC (C4-Advanced)",
    specification: "11 mtrs x 28 mm",
    qty: "11 mtrs",
  },
  {
    sno: "2",
    description: "Flat clearer roller clothing (C4, C4A, C10)",
    specification: "1030 mm x 33 mm",
    qty: "2 pcs",
  },
  {
    sno: "3",
    description: "C Rod C",
    specification: "1010 mm x 33 mm",
    qty: "1 pc",
  },
  {
    sno: "4",
    description: "Flat Stripping",
    specification: "1030 mm x 47.5 mm",
    qty: "1 pc",
  },
];


const ReiterC4 = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
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

export default ReiterC4;