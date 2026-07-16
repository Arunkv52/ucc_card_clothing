
const tableData = [
  {
    sno: 1,
    description: "Clearer Roller Clothing CF50",
    specification: "23.5 mtrs x 20 mm",
    qty: "23.5 mtrs",
  },
  {
    sno: 2,
    description: "CRC with clips",
    specification: "1520 mm x 58.5 mm",
    qty: "1 pc",
  },
  {
    sno: 3,
    description: "Clearer rod clothing",
    specification: "1522 mm x 33 mm",
    qty: "2 pcs",
  },
  {
    sno: 4,
    description: "Flat Clearer roller clothing",
    specification: "1570 mm x 33 mm",
    qty: "2 pcs",
  },
];

const Lmwlctable = () => {
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

export default Lmwlctable;