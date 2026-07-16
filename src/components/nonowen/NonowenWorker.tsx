import icon1 from '../../assets/products/nonowen/icons/img-1.png'
import icon2 from '../../assets/products/nonowen/icons/img-2.png'
import icon3 from '../../assets/products/nonowen/icons/img-3.png'
import icon4 from '../../assets/products/nonowen/icons/img-4.png'
import icon5 from '../../assets/products/nonowen/icons/img-4.png'

const data = [
  {
    specification: 'WW-K-4040x0.90',
    height: '4.0',
    angle: '40.0°',
    thickness: '0.90',
    points: '287'
  },
  {
    specification: 'WW-K-4235x1.2',
    height: '4.2',
    angle: '35.0°',
    thickness: '1.20',
    points: '215'
  },
  {
    specification: 'WW-M-4325x1.0',
    height: '4.3',
    angle: '25.0°',
    thickness: '1.00',
    points: '307'
  },
  {
    specification: 'WW-M-4325x1.2',
    height: '4.3',
    angle: '25.0°',
    thickness: '1.20',
    points: '256'
  },
  {
    specification: 'WW-M-4335x1.0',
    height: '4.3',
    angle: '35.0°',
    thickness: '1.00',
    points: '307'
  },
  {
    specification: 'WW-O-4525x1.0',
    height: '4.5',
    angle: '25.0°',
    thickness: '1.00',
    points: '354'
  },
  {
    specification: 'WW-M-4525x1.0',
    height: '4.5',
    angle: '25.0°',
    thickness: '1.00',
    points: '307'
  },
  {
    specification: 'WW-K-4525x1.0',
    height: '4.5',
    angle: '25.0°',
    thickness: '1.00',
    points: '258'
  },
  {
    specification: 'WW-G-4535x1.2',
    height: '4.5',
    angle: '35.0°',
    thickness: '1.20',
    points: '149'
  },
  {
    specification: 'WW-F-5030x2.1-V12',
    height: '5.0',
    angle: '30.0°',
    thickness: '2.10',
    points: '77'
  },
  {
    specification: 'WW-G-5040x1.2',
    height: '5.0',
    angle: '40.0°',
    thickness: '1.20',
    points: '149'
  },
  {
    specification: 'WW-K-5040x0.9',
    height: '5.0',
    angle: '40.0°',
    thickness: '0.90',
    points: '287'
  },
  {
    specification: 'WW-K-5040x1.0',
    height: '5.0',
    angle: '40.0°',
    thickness: '1.00',
    points: '258'
  },
  {
    specification: 'WW-G-4740x1.6-V16',
    height: '4.7',
    angle: '40.0°',
    thickness: '1.60',
    points: '112'
  },
  {
    specification: 'WW-K-4035Rx0.9',
    height: '4.0',
    angle: '35.0°',
    thickness: '0.90',
    points: '287'
  },
  {
    specification: 'WW-G-5035Rx1.0',
    height: '5.0',
    angle: '35.0°',
    thickness: '1.00',
    points: '179'
  }
]

export default function NonowenWorker () {
  return (
    <>
      <section className='py-12 bg-white'>
        <div className='md:px-15 px-5'>
          <h4 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            Non Woven Worker
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
        </div>
      </section>
    </>
  )
}
