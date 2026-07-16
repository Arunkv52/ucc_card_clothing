import icon1 from "../../assets/products/nonowen/icons/img-1.png";
import icon2 from "../../assets/products/nonowen/icons/img-2.png";
import icon3 from "../../assets/products/nonowen/icons/img-3.png";
import icon4 from "../../assets/products/nonowen/icons/img-4.png";
import icon5 from '../../assets/products/nonowen/icons/img-4.png'
import ImgBel from '../../assets/products/nonowen/icons/icons-doffer.png'


const data = [
  {
    specification: "WD-N-4032x0.75",
    height: "4.0",
    angle: "32.0°",
    thickness: "0.75",
    points: "430",
  },
  {
    specification: "WD-N-4032x0.80",
    height: "4.0",
    angle: "32.0°",
    thickness: "0.80",
    points: "403",
  },
  {
    specification: "WD-N-4035x0.80",
    height: "4.0",
    angle: "35.0°",
    thickness: "0.80",
    points: "403",
  },
  {
    specification: "WD-N-4025x0.90",
    height: "4.0",
    angle: "25.0°",
    thickness: "0.90",
    points: "358",
  },
  {
    specification: "WD-O-4030x0.90",
    height: "4.0",
    angle: "30.0°",
    thickness: "0.90",
    points: "398",
  },
  {
    specification: "WD-N-4030x0.90",
    height: "4.0",
    angle: "30.0°",
    thickness: "0.90",
    points: "358",
  },
  {
    specification: "WD-K-4035x0.90",
    height: "4.0",
    angle: "35.0°",
    thickness: "0.90",
    points: "287",
  },
  {
    specification: "WD-K-4035x0.95",
    height: "4.0",
    angle: "35.0°",
    thickness: "0.95",
    points: "272",
  },
  {
    specification: "WD-L-4040x0.80",
    height: "4.0",
    angle: "40.0°",
    thickness: "0.80",
    points: "351",
  },
  {
    specification: "WD-K-4040x0.90",
    height: "4.0",
    angle: "40.0°",
    thickness: "0.90",
    points: "287",
  },
  {
    specification: "WD-K-4240x0.80",
    height: "4.2",
    angle: "40.0°",
    thickness: "0.80",
    points: "323",
  },
  {
    specification: "WD-O-4230x0.90",
    height: "4.2",
    angle: "30.0°",
    thickness: "0.90",
    points: "393",
  },
  {
    specification: "WD-M-4335x1.0",
    height: "4.3",
    angle: "35.0°",
    thickness: "1.00",
    points: "307",
  },
  {
    specification: "WD-M-4535x1.0",
    height: "4.5",
    angle: "35.0°",
    thickness: "1.00",
    points: "307",
  },
  {
    specification: "WD-K-4535x1.0",
    height: "4.5",
    angle: "35.0°",
    thickness: "1.00",
    points: "258",
  },
  {
    specification: "WD-K-5040x1.0",
    height: "5.0",
    angle: "40.0°",
    thickness: "1.00",
    points: "258",
  },
  {
    specification: "WD-J-5035x1.0",
    height: "5.0",
    angle: "35.0°",
    thickness: "1.00",
    points: "230",
  },
  {
    specification: "WD-J-5035x1.2",
    height: "5.0",
    angle: "35.0°",
    thickness: "1.20",
    points: "192",
  },
  {
    specification: "WD-K-5040x0.90",
    height: "5.0",
    angle: "40.0°",
    thickness: "0.90",
    points: "287",
  },
  {
    specification: "WD-K-4035Rx0.90",
    height: "4.0",
    angle: "35.0°",
    thickness: "0.90",
    points: "287",
  },
];

export default function NonowenDoffer() {
  return (
    <section className="py-12 bg-white">
      <div className="md:px-15 px-5">
        <h4 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>Non Woven Doffer</h4>

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
                  <td className="border border-slate-300 px-5 py-2 ">
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
  );
}