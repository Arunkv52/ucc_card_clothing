import icon1 from '../../assets/products/nonowen/icons/img-1.png'
import icon2 from '../../assets/products/nonowen/icons/img-2.png'
import icon3 from '../../assets/products/nonowen/icons/img-3.png'
import icon4 from '../../assets/products/nonowen/icons/img-4.png'
import icon5 from '../../assets/products/nonowen/icons/img-4.png'
import ImgBel from '../../assets/products/nonowen/icons/icons-below.png'

const data = [
  {
    specification: 'WC-J-2512x0.5',
    height: '2.5',
    angle: '12.0°',
    thickness: '0.50',
    points: '461'
  },
  {
    specification: 'WC-N-2512x0.6',
    height: '2.5',
    angle: '12.0°',
    thickness: '0.60',
    points: '538'
  },
  {
    specification: 'WC-N-2512x0.7',
    height: '2.5',
    angle: '12.0°',
    thickness: '0.70',
    points: '461'
  },
  {
    specification: 'WC-O-2510x0.8',
    height: '2.5',
    angle: '10.0°',
    thickness: '0.80',
    points: '443'
  },
  {
    specification: 'WC-O-2515x0.7',
    height: '2.5',
    angle: '15.0°',
    thickness: '0.70',
    points: '506'
  },
  {
    specification: 'WC-N-2812x0.65',
    height: '2.8',
    angle: '12.0°',
    thickness: '0.65',
    points: '496'
  },
  {
    specification: 'WC-P-2812x0.7',
    height: '2.8',
    angle: '12.0°',
    thickness: '0.70',
    points: '542'
  },
  {
    specification: 'WC-N-3015x0.8',
    height: '3.0',
    angle: '15.0°',
    thickness: '0.80',
    points: '403'
  },
  {
    specification: 'WC-O-3015x0.9',
    height: '3.0',
    angle: '15.0°',
    thickness: '0.90',
    points: '398'
  },
  {
    specification: 'WC-N-3207x0.8',
    height: '3.2',
    angle: '7.0°',
    thickness: '0.80',
    points: '403'
  },
  {
    specification: 'WC-N-3210x0.8',
    height: '3.2',
    angle: '10.0°',
    thickness: '0.80',
    points: '403'
  },
  {
    specification: 'WC-O-3215x0.8',
    height: '3.2',
    angle: '15.0°',
    thickness: '0.80',
    points: '443'
  },
  {
    specification: 'WC-O-3215x1.0',
    height: '3.2',
    angle: '15.0°',
    thickness: '1.00',
    points: '354'
  },
  {
    specification: 'WC-O-3513x1.0',
    height: '3.5',
    angle: '13.0°',
    thickness: '1.00',
    points: '354'
  },
  {
    specification: 'WC-M-3510x1.0',
    height: '3.5',
    angle: '10.0°',
    thickness: '1.00',
    points: '307'
  },
  {
    specification: 'WC-M-3510x1.1',
    height: '3.5',
    angle: '10.0°',
    thickness: '1.10',
    points: '279'
  },
  {
    specification: 'WC-O-3812x1.0',
    height: '3.8',
    angle: '12.0°',
    thickness: '1.00',
    points: '354'
  },
  {
    specification: 'WC-J-3815x1.2',
    height: '3.8',
    angle: '15.0°',
    thickness: '1.20',
    points: '192'
  },
  {
    specification: 'WC-H-3815x1.3',
    height: '3.8',
    angle: '15.0°',
    thickness: '1.30',
    points: '165'
  },
  {
    specification: 'WC-G-3820x1.8',
    height: '3.8',
    angle: '20.0°',
    thickness: '1.80',
    points: '100'
  },
  {
    specification: 'WC-K-4012x1.0',
    height: '4.0',
    angle: '12.0°',
    thickness: '1.00',
    points: '258'
  },
  {
    specification: 'WC-K-4012x1.2',
    height: '4.0',
    angle: '12.0°',
    thickness: '1.20',
    points: '215'
  },
  {
    specification: 'WC-F-4515x1.6-V16',
    height: '4.5',
    angle: '15.0°',
    thickness: '1.60',
    points: '96'
  }
]

export default function NonowenCylinder () {
  return (
    <section className='py-12 bg-white'>
      <div className=' px-15'>
        <h4 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
          Non Woven Cylinder
        </h4>

        <div className='overflow-x-auto border border-slate-300'>
          <table className=' w-full border-collapse'>
            <thead>
              <tr className='bg-white'>
                <th className='border border-slate-300 w-[34%]'>
                  <div className='py-5 text-base font-semibold text-sky-700'>
                    Specification
                  </div>
                </th>

                <th className='border border-slate-300 w-[16%]'>
                  <img
                    src={icon1}
                    alt=''
                    className='mx-auto h-12 object-contain'
                  />
                </th>

                <th className='border border-slate-300 w-[16%]'>
                  <img
                    src={icon2}
                    alt=''
                    className='mx-auto h-12 object-contain'
                  />
                </th>

                <th className='border border-slate-300 w-[16%]'>
                  <img
                    src={icon3}
                    alt=''
                    className='mx-auto h-12 object-contain'
                  />
                </th>

                <th className='border border-slate-300 w-[18%]'>
                  <img
                    src={icon4}
                    alt=''
                    className='mx-auto h-12 object-contain'
                  />
                </th>
                <th className='border border-slate-300 w-[18%]'>
                  <img
                    src={icon5}
                    alt=''
                    className='mx-auto h-12 object-contain'
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
                      ? 'bg-[#f1f1f1] text-black'
                      : 'bg-[#2e2e2e] text-white'
                  } text-sm`}
                >
                  <td className='border border-slate-300 px-5 py-2'>
                    {item.specification}
                  </td>

                  <td className='border border-slate-300 py-2 text-center'>
                    {item.height}
                  </td>

                  <td className='border border-slate-300 py-2 text-center'>
                    {item.angle}
                  </td>

                  <td className='border border-slate-300 py-2 text-center'>
                    {item.thickness}
                  </td>

                  <td className='border border-slate-300 py-2 text-center'>
                    {item.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <img src={ImgBel} alt='' />
        </div>
      </div>
    </section>
  )
}
