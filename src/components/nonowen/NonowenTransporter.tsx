import icon1 from "../../assets/products/nonowen/icons/img-1.png";
import icon2 from "../../assets/products/nonowen/icons/img-2.png";
import icon3 from "../../assets/products/nonowen/icons/img-3.png";
import icon4 from "../../assets/products/nonowen/icons/img-4.png";
import icon5 from '../../assets/products/nonowen/icons/img-4.png'


const data = [
  {
    specification: "WS-H-3325x1.2",
    height: "3.3",
    angle: "25.0°",
    thickness: "1.2",
    points: "168",
  },
  {
    specification: "WS-H-3325x1.5",
    height: "3.3",
    angle: "25.0°",
    thickness: "1.5",
    points: "134",
  },
  {
    specification: "WS-H-3630x1.2",
    height: "3.6",
    angle: "30.0°",
    thickness: "1.2",
    points: "168",
  },
  {
    specification: "WR-G-4030x1.5-V18",
    height: "4.0",
    angle: "30.0°",
    thickness: "1.5",
    points: "119",
  },
  {
    specification: "WS-H-4040x1.6-V16",
    height: "4.0",
    angle: "40.0°",
    thickness: "1.6",
    points: "126",
  },
  {
    specification: "WS-F-5020x1.8-V14",
    height: "5.0",
    angle: "20.0°",
    thickness: "1.8",
    points: "90",
  },
  {
    specification: "WR-F-5025x1.8-V14",
    height: "5.0",
    angle: "25.0°",
    thickness: "1.8",
    points: "90",
  },
  {
    specification: "WS-G-5040x1.6-V16",
    height: "5.0",
    angle: "40.0°",
    thickness: "1.6",
    points: "112",
  },
  {
    specification: "WS-G2-40-2Bx1.8",
    height: "4.0",
    angle: "-28.0°",
    thickness: "1.8",
    points: "105",
  },
  {
    specification: "WS-F-40-35x2.0",
    height: "4.0",
    angle: "-35.0°",
    thickness: "2.0",
    points: "77",
  },
  {
    specification: "WS-F-4225x2.5-V10",
    height: "4.2",
    angle: "25.0°",
    thickness: "2.5",
    points: "61",
  },
  {
    specification: "WS-G-4530x1.6-V16",
    height: "4.5",
    angle: "30.0°",
    thickness: "1.6",
    points: "112",
  },
  {
    specification: "WS-F-4530x1.6-V16",
    height: "4.5",
    angle: "30.0°",
    thickness: "1.6",
    points: "96",
  },
  {
    specification: "WS-G-4730x1.8-V14",
    height: "4.7",
    angle: "30.0°",
    thickness: "1.8",
    points: "100",
  },
];

export default function NonowenTransporter() {
  return (
   <>
       <section className="py-12 bg-white">
      <div className="md:px-15 px-5">
        <h4 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>Non Woven Transporter & Stripper</h4>

        <div className="overflow-x-auto border border-slate-300">

          <table className=" w-full border-collapse">

            <thead>

              <tr className="bg-white">

                <th className="border border-slate-300 w-[34%]">
                  <div className="py-5 text-base font-semibold text-sky-700">
                    Specification
                  </div>
                </th>

                <th className="border border-slate-300 w-[16%]">
                  <img
                    src={icon1}
                    alt=""
                    className="mx-auto h-12 object-contain"
                  />
                </th>

                <th className="border border-slate-300 w-[16%]">
                  <img
                    src={icon2}
                    alt=""
                    className="mx-auto h-12 object-contain"
                  />
                </th>

                <th className="border border-slate-300 w-[16%]">
                  <img
                    src={icon3}
                    alt=""
                    className="mx-auto h-12 object-contain"
                  />
                </th>

                <th className="border border-slate-300 w-[18%]">
                  <img
                    src={icon4}
                    alt=""
                    className="mx-auto h-12 object-contain"
                  />
                </th>
                  <th className="border border-slate-300 w-[18%]">
                  <img
                    src={icon5}
                    alt=""
                    className="mx-auto h-12 object-contain"
                  />
                </th>

              </tr>

            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
  key={index}
  className={`${
    index % 2 === 0
      ? "bg-[#f1f1f1] text-black"
      : "bg-[#2e2e2e] text-white"
  } text-sm`}
>
                  <td className="border border-slate-300 px-5 py-2">
                    {item.specification}
                  </td>

                  <td className="border border-slate-300 py-2 text-center">
                    {item.height}
                  </td>

                  <td className="border border-slate-300 py-2 text-center">
                    {item.angle}
                  </td>

                  <td className="border border-slate-300 py-2 text-center">
                    {item.thickness}
                  </td>

                  <td className="border border-slate-300 py-2 text-center">
                    {item.points}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        

      </div>
    </section>
   </>
  );
}