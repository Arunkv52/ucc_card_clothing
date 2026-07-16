import icon1 from "../../assets/products/nonowen/icons/img-1.png";
import icon2 from "../../assets/products/nonowen/icons/img-2.png";
import icon3 from "../../assets/products/nonowen/icons/img-3.png";
import icon4 from "../../assets/products/nonowen/icons/img-4.png";
import icon5 from '../../assets/products/nonowen/icons/img-4.png'
import ImgBel from '../../assets/products/nonowen/icons/icons-lickerin.png'


const data = [
  {
    specification: "WL-D2-5615x1.1",
    height: "5.6",
    angle: "15.0°",
    thickness: "1.09",
    points: "-",
  },
  {
    specification: "WL-D2-5610x1.1",
    height: "5.6",
    angle: "10.0°",
    thickness: "1.09",
    points: "-",
  },
  {
    specification: "WL-D-6020x1.5",
    height: "6.0",
    angle: "20.0°",
    thickness: "1.50",
    points: "-",
  },
  {
    specification: "WL-C-6015x1.6",
    height: "6.0",
    angle: "15.0°",
    thickness: "1.65",
    points: "-",
  },
  {
    specification: "WL-C-60-27x1.6",
    height: "6.0",
    angle: "-27.0°",
    thickness: "1.65",
    points: "-",
  },
  {
    specification: "WL-B-1105x2.0",
    height: "11.0",
    angle: "5.0°",
    thickness: "2.0",
    points: "-",
  },
  {
    specification: "WL-B2-1115x2.0",
    height: "11.0",
    angle: "15.0°",
    thickness: "2.0",
    points: "-",
  },
  {
    specification: "WL-B-1005x2.2",
    height: "10.0",
    angle: "5.0°",
    thickness: "2.16",
    points: "-",
  },
  {
    specification: "WL-E-5010x3.0-V8",
    height: "5.0",
    angle: "10.0°",
    thickness: "3.0",
    points: "43",
  },
  {
    specification: "WL-E-5010x3.2-V8",
    height: "5.0",
    angle: "10.0°",
    thickness: "3.2",
    points: "40",
  },
  {
    specification: "WL-E-5015x2.5-V10",
    height: "5.0",
    angle: "15.0°",
    thickness: "2.5",
    points: "52",
  },
  {
    specification: "WL-E-5015x2.5-V10",
    height: "5.0",
    angle: "15.0°",
    thickness: "2.5",
    points: "47",
  },
  {
    specification: "WL-D-5510x3.2-V8",
    height: "5.5",
    angle: "10.0°",
    thickness: "3.2",
    points: "32",
  },
  {
    specification: "WL-D-5513x3.0-V8",
    height: "5.5",
    angle: "13.0°",
    thickness: "3.0",
    points: "34",
  },
  {
    specification: "WL-D-5515x4.0-V6",
    height: "5.5",
    angle: "15.0°",
    thickness: "4.0",
    points: "28",
  },
  {
    specification: "WL-C-5530x3.2-V8",
    height: "5.5",
    angle: "30.0°",
    thickness: "3.2",
    points: "27",
  },
  {
    specification: "WL-C-7510x3.0-V8",
    height: "7.5",
    angle: "10.0°",
    thickness: "3.0",
    points: "29",
  },
  {
    specification: "WL-C-7510x4.2-V6",
    height: "7.5",
    angle: "10.0°",
    thickness: "4.2",
    points: "21",
  },
];

export default function NonowenLickerin() {
  return (
   <>
       <section className="py-12 bg-white">
      <div className="md:px-15 px-5">
        <h4 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>Non Woven Lickerin & Feed</h4>

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
         <div>
            <img src={ImgBel} alt="" />
        </div>

        

      </div>
    </section>
   </>
  );
}