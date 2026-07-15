import TypeA from '../../assets/products/stationery/sff1.png'
import TypeB from '../../assets/products/stationery/sff2.png'
import TypeC from '../../assets/products/stationery/sff3.png'
import TypeD from '../../assets/products/stationery/sff4.png'
import TypeE from '../../assets/products/stationery/sff5.png'
import TypeF from '../../assets/products/stationery/sff6.png'
import TypeG from '../../assets/products/stationery/sff7.png'
import TypeH from '../../assets/products/stationery/sff8.png'



interface LickerinData {
  type: string
  image: string
  cardMake: string[]
  suitableFor: string[]
  ppsi: string
}
const lickerinData: LickerinData[] = [
  {
    type: 'A',
    image: TypeA,
    cardMake: ['LMW', 'Trutzschler'],
    suitableFor: [
      'LC300, LC300A (Above Lickerin 5½), Cards.',
      'Under Lickerin Strip LC333/LC363 Cards.',
      'DK760 and (with Aluminium Bar Flat).',
      'DK780, DK803 Cards.'
    ],
    ppsi: '70,90,110,150,250,350,450,550,650'
  },
  {
    type: 'B',
    image: TypeB,
    cardMake: ['Trutzschler', 'Crosrol', 'Rieter', 'Chinese'],
    suitableFor: [
      'DK740,740 (Cards with Cast Iron Bare Flat card)',
      'DK800,803, TC3.0/3.5/5.1/5.3/6.0/8.0, 11 cards',
      'MK4.5A card',
      'C4, C10, C50, C51 / C60, C70 / 40° / 60° Cards',
      'FA203A, FA204A, FA205, JWF1205',
      'JWF1215, JWF1225 Cards',
      'ICC and ECC-C Cleaner Conversion Rieter and LMW Cards'
    ],
    ppsi: '70,90,110,150,250,350,450,550,650'
  },
   {
    type: "C",
    image: TypeC,
    cardMake: ["Trutzschler", "Rieter"],
    suitableFor: [
      "Under Lickerin Segment - DK740, 760, 780, 800 Cards.",
      "Under Lickerin Segment - C10, 50, 51 Cards (LCC & UCC & Lakzer Segment)",
      "C1/2, C1/3, LC100, LC300, LC300AV3, TC360, TC450, SC2 Cards.",
      "CVT - FD6 Blowroom - S.F. Tops (1200mm)",
    ],
    ppsi: "70, 90",
  },
  {
    type: "D",
    image: TypeD,
    cardMake: ["Rieter"],
    suitableFor: [
      "C60-Uniflex Carding Segment 40 PPSI (FD 4)",
    ],
    ppsi: "40",
  },
  {
    type: "E",
    image: TypeE,
    cardMake: ["Rieter"],
    suitableFor: [
      "C4 Card",
    ],
    ppsi: "70, 90",
  },
  {
    type: "F",
    image: TypeF,
    cardMake: ["Trutzschler"],
    suitableFor: [
      "TC03, 05, 5/1, 5/3, 07, 08, 10 Cards Under Lickerin Segment",
    ],
    ppsi: "70",
  },
  {
    type: "G",
    image: TypeG,
    cardMake: [
      "Crosrol",
      "Trumac",
      "Rieter",
      "Chinese",
    ],
    suitableFor: [
      "MK4, MK5 Cards",
      "DK715, DK740 Cards",
      "C4 Card",
      "FA186F, FA20A, FA201B Cards",
    ],
    ppsi: "100, 150, 250, 350, 450, 550, 650",
  },
  {
    type: "H",
    image: TypeH,
    cardMake: ["LMW"],
    suitableFor: [
      "LC300A, 300AV3, 300AV4, 333, 361, 363",
      "LC300, 300A (Above Doffer SFD)",
      "LCC-'C' Cleaner - C1/2, C1/3, LC100, TC360, TC450, SC2",
      "LCC-'C' Cleaner - DK715, 740, 760, 780, C4, C10",
      "All UCC & Lakzer - Conversion",
    ],
    ppsi: "70, 90, 100, 150, 250, 350, 450, 550, 650",
  }
]

const StationeryFlatTable = () => {
  return (
    <section className='bg-white'>
      <div className=' px-15 pb-20'>
        <div className='overflow-hidden  mt-10'>
          <div className='overflow-x-auto'>
            <table className='min-w-full border-collapse'>
              <thead className='bg-[#4a5566] text-white'>
                <tr>
                  <th className='p-3'>Type</th>
                  <th className='p-3'>Image</th>
                  <th className='p-3'>Card Make</th>
                  <th className='p-3'>Suitable For</th>
                  <th className='p-3'>PPSI</th>
                </tr>
              </thead>

              <tbody>
                {lickerinData.map((item, index) => (
                  <tr
                    key={item.type}
                    className={
                      index % 2 === 0
                         ? 'bg-[#f5f5f5] text-black'
                        : 'bg-[#393939] text-white'
                    }
                  >
                    <td className='p-4 font-bold'>{item.type}</td>

                    <td className='p-4'>
                      <img
                        src={item.image}
                        alt={item.type}
                        className='w-34 object-contain'
                      />
                    </td>

                    <td className='p-4 align-top'>
                      {item.cardMake.map(make => (
                        <p key={make} className='font-semibold'>
                          {make}
                        </p>
                      ))}
                    </td>

                    <td className='p-4 align-top'>
                      {item.suitableFor.map(text => (
                        <p key={text} className='mb-2 flex items-start gap-2'>
                          <span>✔</span>
                          <span>{text}</span>
                        </p>
                      ))}
                    </td>

                    <td className='p-4 whitespace-nowrap'>{item.ppsi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StationeryFlatTable
