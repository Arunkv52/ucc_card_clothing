import Flat1 from '../../assets/products/flat-tops/flat1.png'
import Flat2 from '../../assets/products/flat-tops/flat2.png'
import Flat3 from '../../assets/products/flat-tops/flat3.png'
import Flat4 from '../../assets/products/flat-tops/flat4.png'
import Flat6 from '../../assets/products/flat-tops/flat6.png'

interface ProductSeries {
  type: string
  logo?: string
  specifications: {
    name: string
    ppsi: number
  }[]
  suitableFor: string
  features: string[]
}

const productSeries: ProductSeries[] = [
  {
    type: 'Stilo Series',
    logo: '/images/stilo-logo.png', // Optional
    specifications: [
      { name: 'STILO 330', ppsi: 330 },
      { name: 'STILO 430', ppsi: 430 },
      { name: 'STILO 480', ppsi: 480 },
      { name: 'STILO 530', ppsi: 530 },
      { name: 'STILO 580', ppsi: 580 },
      { name: 'STILO 600', ppsi: 600 },
      { name: 'STILO 700', ppsi: 700 }
    ],
    suitableFor: 'Cotton - medium, combed & fine counts',
    features: [
      'Tops with special setting pattern suitable for high production cards.',
      'Gives best NRE %.'
    ]
  },

  {
    type: 'Uno Series',
    specifications: [
      { name: 'UNO 310', ppsi: 310 },
      { name: 'UNO 410', ppsi: 410 },
      { name: 'UNO 450', ppsi: 450 },
      { name: 'UNO 510', ppsi: 510 },
      { name: 'UNO 550', ppsi: 550 }
    ],
    suitableFor: 'Cotton & PC Blends (Polyester & Cotton)',
    features: [
      'Uniform density - Flat tops wire PPSI uniform across the width of the top.',
      'Unique setting pattern of flat tops provides better fibre trapping.',
      'Better elimination of short fibre & neps at high production rates.'
    ]
  },

  {
    type: 'Uno-S Series',
    specifications: [
      { name: 'UNO-S 300', ppsi: 300 },
      { name: 'UNO-S 400', ppsi: 400 },
      { name: 'UNO-S 400 OE', ppsi: 400 },
      { name: 'UNO-S 450', ppsi: 450 },
      { name: 'UNO-S 500', ppsi: 500 }
    ],
    suitableFor:
      '100% polyester, Polyester & viscose blends, 100% viscose, MODAL & TENCEL fibre. For OE Process.',
    features: [
      'Synthetic tops with angle suitable for processing synthetic fibres.',
      'Reduces resistance in carding zone by reducing static electricity and prevents card loading.',
      'High tensile wires used to withstand load.'
    ]
  },

  {
    type: 'Uno-G Series',
    specifications: [
      { name: 'UNO-G 280', ppsi: 280 },
      { name: 'UNO-G 330', ppsi: 330 }
    ],
    suitableFor: 'Non woven material process, Surgical cotton application',
    features: [
      'Tops with open space in between.',
      'Reduced resistance to fibre flow.',
      'Lesser waste removal.'
    ]
  },

  {
    type: 'Recto Series',
    specifications: [{ name: 'RECTO 330', ppsi: 330 }],
    suitableFor: '100% Polyester, Acrylic, Recycled waste & bleached cotton.',
    features: [
      'Rectangular wire with no knee bend - Regrinding not required.',
      'Semi rigid tops - Extraction of low flat waste.',
      'Suitable for very coarse micronaire / denier fibres and sliver hanks.'
    ]
  }
]

const FlattopsTable = () => {
  return (
    <section className='bg-white'>
      <div className='md:px-20 px-5 pb-20'>
        <div className='overflow-hidden  border border-gray-200 shadow-lg mt-10'>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead className='bg-[#4a5566] text-white'>
                <tr>
                  <th className='px-4 py-3 text-left text-sm font-semibold'>
                    Type
                  </th>
                  <th className='px-4 py-3 text-left text-sm font-semibold'>
                    Specifications
                  </th>
                  <th className='px-4 py-3 text-center text-sm font-semibold'>
                    PPSI
                  </th>
                  <th className='px-4 py-3 text-center text-sm font-semibold'>
                    Suitable for
                  </th>
                  <th className='px-4 py-3 text-center text-sm font-semibold'>
                    Features
                  </th>
                </tr>
              </thead>

              <tbody>
                {productSeries.map((item, index) => (
                  <tr
                    key={item.type}
                    className={
                      index % 2 === 0
                        ? 'bg-[#f8f8f8]'
                        : 'bg-[#2d2d2d] text-white'
                    }
                  >
                    {/* Type */}
                    <td className='px-4 py-4 align-top font-semibold'>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.type}
                          className='w-20 mb-2'
                        />
                      ) : (
                        item.type
                      )}
                    </td>

                    {/* Specifications */}
                    <td className='px-4 py-4 align-top'>
                      {item.specifications.map(spec => (
                        <div
                          key={spec.name}
                          className='flex justify-between gap-8'
                        >
                          <span>{spec.name}</span>
                        </div>
                      ))}
                    </td>

                    {/* PPSI */}
                    <td className='px-4 py-4 align-top text-center'>
                      {item.specifications.map(spec => (
                        <div key={spec.name}>{spec.ppsi}</div>
                      ))}
                    </td>

                    {/* Suitable For */}
                    <td className='px-4 py-4 align-top'>{item.suitableFor}</td>

                    {/* Features */}
                    <td className='px-4 py-4 align-top'>
                      <ul className='list-decimal pl-5 space-y-2'>
                        {item.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='mt-5'>
          <div className='md:flex flex md:justify-between justify-around md:gap-0 gap-10 flex-wrap'>
            <img src={Flat1} alt='' />
            <img src={Flat2} alt='' />
            <img src={Flat3} alt='' />
            <img src={Flat4} alt='' />
            <img src={Flat6} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlattopsTable
