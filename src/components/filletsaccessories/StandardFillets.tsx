const tableData = [
  {
    sno: "1",
    description: "Metallic stripping fillet",
    specification: "14 mtrs x 40.0 mm",
    qty: "14 mtrs",
  },
  {
    sno: "2",
    description: "Burnishing fillet",
    specification: "14 mtrs x 40.0 mm",
    qty: "14 mtrs",
  },
  {
    sno: "3",
    description: "Zig zag flat cleaning fillet",
    specification: "11.5 mtrs x 40 mm width",
    qty: "11.5 mtrs",
  },
  {
    sno: "4",
    description: "Burnishing pad",
    specification: "200 x 100 x 25 mm",
    qty: "1 pc",
  },
  {
    sno: "5",
    description: "Handle for burnishing pad",
    specification: "-",
    qty: "1 pc",
  },
];


const StandardFillets = () => {
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

export default StandardFillets;