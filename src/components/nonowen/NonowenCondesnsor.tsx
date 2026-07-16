import icon1 from "../../assets/products/nonowen/icons/img-1.png";
import icon2 from "../../assets/products/nonowen/icons/img-2.png";
import icon3 from "../../assets/products/nonowen/icons/img-3.png";
import icon4 from "../../assets/products/nonowen/icons/img-4.png";
import icon5 from '../../assets/products/nonowen/icons/img-4.png'


const data = [
  {
    specification: "WO-K-4035x1.0",
    height: "4.0",
    angle: "35.0°",
    thickness: "1.0",
    points: "258",
  },
  {
    specification: "WO-K-4535x1.0",
    height: "4.0",
    angle: "35.0°",
    thickness: "1.0",
    points: "258",
  },
  {
    specification: "WO-J-5035x1.0",
    height: "5.0",
    angle: "35.0°",
    thickness: "1.0",
    points: "230",
  },
  {
    specification: "WO-J-5035x1.2",
    height: "5.0",
    angle: "35.0°",
    thickness: "1.2",
    points: "192",
  },
  {
    specification: "WO-G-5040x1.0",
    height: "5.0",
    angle: "40.0°",
    thickness: "1.0",
    points: "179",
  },
  {
    specification: "WO-G-5040x1.2",
    height: "5.0",
    angle: "40.0°",
    thickness: "1.2",
    points: "149",
  },
  {
    specification: "WO-F-5540x1.3",
    height: "5.5",
    angle: "40.0°",
    thickness: "1.3",
    points: "118",
  },
  {
    specification: "WO-H-5740x1.2",
    height: "5.7",
    angle: "40.0°",
    thickness: "1.2",
    points: "168",
  },
  {
    specification: "WO-G-5740x1.2",
    height: "5.7",
    angle: "40.0°",
    thickness: "1.2",
    points: "149",
  },
];

export default function NonowenCondensor() {
  return (
   <>
       <section className="py-12 bg-white">
      <div className="md:px-15 px-5">
        <h4 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>Non Woven Condensor</h4>

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
                  <td className="border border-slate-300 px-5 py-2 font-medium">
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