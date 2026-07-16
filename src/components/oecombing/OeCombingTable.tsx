interface TableData {
  sno: number
  wire: string
  specification: string
  height: number
  rib: number
  pitch: number
  tpi: number
  angle: number
}

const tableData: TableData[] = [
  {
    sno: 1,
    wire: 'OK 37',
    specification: '3.60 x 0.90',
    height: 3.6,
    rib: 0.9,
    pitch: 4.7,
    tpi: 5.4,
    angle: -10
  },
  {
    sno: 2,
    wire: 'OK 36',
    specification: '3.60 x 0.90',
    height: 3.6,
    rib: 0.9,
    pitch: 4.0,
    tpi: 6.35,
    angle: 0
  },
  {
    sno: 3,
    wire: 'OK 61',
    specification: '3.60 x 0.90',
    height: 3.6,
    rib: 0.9,
    pitch: 4.0,
    tpi: 6.35,
    angle: 15
  },
  {
    sno: 4,
    wire: 'OS 21',
    specification: '3.60 x 0.90',
    height: 3.6,
    rib: 0.9,
    pitch: 3.25,
    tpi: 7.8,
    angle: 15
  },
  {
    sno: 5,
    wire: 'OK 40',
    specification: '3.60 x 0.90',
    height: 3.6,
    rib: 0.9,
    pitch: 2.62,
    tpi: 9.69,
    angle: 25
  },
  {
    sno: 6,
    wire: 'OB 20',
    specification: '3.60 x 0.90',
    height: 3.6,
    rib: 0.9,
    pitch: 2.12,
    tpi: 11.98,
    angle: 25
  },
  {
    sno: 7,
    wire: 'OK 21A',
    specification: '4.10 x 0.94',
    height: 4.1,
    rib: 0.94,
    pitch: 3.25,
    tpi: 7.81,
    angle: 15
  },
  {
    sno: 8,
    wire: 'OK 74A',
    specification: '4.10 x 0.94',
    height: 4.1,
    rib: 0.94,
    pitch: 6.0,
    tpi: 4.2,
    angle: 25
  },
  {
    sno: 9,
    wire: 'OB 20A',
    specification: '4.10 x 0.94',
    height: 4.1,
    rib: 0.94,
    pitch: 2.12,
    tpi: 11.98,
    angle: 25
  }
]

const OeCombingTable = () => {
  return (
    <section className='bg-white py-10'>
      <div className='px-5 md:px-15'>
        <div className='overflow-hidden border border-gray-200 shadow-md'>
          <div className='overflow-x-auto'>
            <table className='min-w-full border-collapse'>
              <thead className='bg-[#4a5566] text-white'>
                <tr>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                    S.No
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase'>
                    Wire
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase'>
                    Specification
                  </th>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                    Height
                  </th>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                    Rib
                  </th>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                    Pitch
                  </th>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                    TPI
                  </th>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                    Angle
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={row.sno}
                    className={`transition-colors duration-300 ${
                      index % 2 === 0
                        ? 'bg-[#f5f5f5] text-black'
                        : 'bg-[#393939] text-white'
                    } hover:bg-[#5b5b5b] hover:text-white`}
                  >
                    <td className='px-6 py-4 text-center font-semibold'>
                      {row.sno}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap'>{row.wire}</td>

                    <td className='px-6 py-4 whitespace-nowrap'>
                      {row.specification}
                    </td>

                    <td className='px-6 py-4 text-center'>
                      {row.height.toFixed(2)}
                    </td>

                    <td className='px-6 py-4 text-center'>
                      {row.rib.toFixed(2)}
                    </td>

                    <td className='px-6 py-4 text-center'>
                      {row.pitch.toFixed(2)}
                    </td>

                    <td className='px-6 py-4 text-center'>
                      {row.tpi.toFixed(2)}
                    </td>

                    <td className='px-6 py-4 text-center'>{row.angle}</td>
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

export default OeCombingTable
