import React from 'react'

const tableData = [
  {
    no: 1,
    machine: 'Feed Roller',
    type: 'Interlocking',
    height: '5.0 - 8.0',
    thickness: 'V6 / V8',
    points: '8 - 60',
    angle: '30/20',
    color: 'bg-[#b9d5ce]',
    circle: 'bg-[#d6ece4]'
  },
  {
    no: 2,
    machine: 'Lickerin Wires',
    type: 'Interlocking',
    height: '5.0 - 6.0',
    thickness: 'V8 / V16',
    points: '24 - 200',
    angle: '10/20',
    color: 'bg-[#e6c4bb]',
    circle: 'bg-[#d88f79]'
  },
  {
    no: 3,
    machine: 'Breast Cylinder',
    type: (
      <>
        Plain Wires
        <br />
        Interlocking
      </>
    ),
    height: '2.5 - 4.5',
    thickness: '1.10 / 2.0',
    points: '250 - 350',
    angle: '10/20',
    color: 'bg-[#a9d1f1]',
    circle: 'bg-[#78b8ea]'
  },
  {
    no: 4,
    machine: 'Worker Roller',
    type: 'Plain Wires',
    height: '4.0 - 5.0',
    thickness: '0.9 / 1.20',
    points: '250 - 350',
    angle: '30/40',
    color: 'bg-[#eb9ac8]',
    circle: 'bg-[#dd4b95]'
  },
  {
    no: 5,
    machine: 'Stripper Roller',
    type: 'Plain Wires',
    height: '3.0 - 4.0',
    thickness: '1.0 / 1.5',
    points: '130 - 150',
    angle: '20/30',
    color: 'bg-[#b9e2a7]',
    circle: 'bg-[#8dc46d]'
  },
  {
    no: 6,
    machine: 'Transfer Roller',
    type: (
      <>
        Interlocking
        <br />
        Plain Wires
      </>
    ),
    height: '4.0 - 5.0',
    thickness: 'V10 / V20',
    points: '40 - 100',
    angle: '30/40',
    color: 'bg-[#d7b5d1]',
    circle: 'bg-[#c186b8]'
  },
  {
    no: 7,
    machine: 'Main Cylinder',
    type: 'Plain Wires',
    height: '2.5 - 4.5',
    thickness: '0.9 / 1.20',
    points: '50 - 500',
    angle: '10/20',
    color: 'bg-[#bcb8dc]',
    circle: 'bg-[#9b95c9]'
  },
  {
    no: 8,
    machine: 'Random Roller',
    type: 'Plain Wires',
    height: '3.0 - 3.5',
    thickness: '0.6 / 1.0',
    points: '500',
    angle: '10/25',
    color: 'bg-[#f5cfaa]',
    circle: 'bg-[#f0ab62]'
  },
  {
    no: 9,
    machine: 'Doffer',
    type: 'Plain Wires',
    height: '4.0 - 5.0',
    thickness: '0.9 / 1.20',
    points: '230 - 300',
    angle: '30/45',
    color: 'bg-[#c5dee7]',
    circle: 'bg-[#9dcad9]'
  },
  {
    no: 10,
    machine: 'Condensor Roller',
    type: 'Plain Wires',
    height: '4.0 - 5.0',
    thickness: '1.10 / 1.20',
    points: '90 - 200',
    angle: '40',
    color: 'bg-[#e8c2a9]',
    circle: 'bg-[#ddb08e]'
  },
  {
    no: 11,
    machine: 'Take off Roller',
    type: 'Plain Wires',
    height: '4.0',
    thickness: '1.8',
    points: '100 - 120',
    angle: '30',
    color: 'bg-[#dbe59b]',
    circle: 'bg-[#c5d954]'
  }
]

const Metalicwirechart = () => {
  return (
    <section className='bg-white py-10'>
      <div className='px-15'>
        <div className='overflow-x-auto border border-gray-200'>
          <table className='w-full border-collapse'>
            {/* Header */}
            <thead className='bg-sky-600 text-white'>
              <tr>
                <th className='w-20 border border-white p-4'></th>
                <th className='border border-white p-4'></th>
                <th className='border border-white p-4 text-center'>
                  Type Interlocking/
                  <br />
                  Plain Wires
                </th>
                <th className='border border-white p-4 text-center'>
                  Height in mm
                </th>
                <th className='border border-white p-4 text-center'>
                  Thickness
                  <br />
                  Rib
                </th>
                <th className='border border-white p-4 text-center'>
                  Points /
                  <br />
                  Square inch
                </th>
                <th className='border border-white p-4 text-center'>Angle</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map(item => (
                <tr key={item.no} className={item.color}>
                  <td className='border border-white p-3 text-center'>
                    <div
                      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full font-semibold text-gray-700 ${item.circle}`}
                    >
                      {item.no}
                    </div>
                  </td>

                  <td className='border border-white p-4 font-medium'>
                    {item.machine}
                  </td>

                  <td className='border border-white p-4 text-center'>
                    {item.type}
                  </td>

                  <td className='border border-white p-4 text-center'>
                    {item.height}
                  </td>

                  <td className='border border-white p-4 text-center'>
                    {item.thickness}
                  </td>

                  <td className='border border-white p-4 text-center'>
                    {item.points}
                  </td>

                  <td className='border border-white p-4 text-center'>
                    {item.angle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='grid grid-cols-2 px-15 mt-5'>
        <div>
          <h4 className='bg-red-300 text-lg max-w-fit px-5 py-2 mb-5'>
            Suitable for Process Table
          </h4>
          <ul className='list-disc'>
            <li>Carbon fiber material.</li>
            <li>Glass fiber material.</li>
            <li>High temperature resistance material.</li>
            <li>Low interior non-woven.</li>
            <li>Carpet Materials.</li>
            <li>Blended Materials.</li>
            <li>Hot air non-woven.</li>
            <li>Spunlace non-woven.</li>
            <li>Island fiber material.</li>
            <li>And for other process as per customer requirement.</li>
          </ul>
        </div>
        <div>
          <h4 className='bg-red-300 text-lg max-w-fit px-5 py-2 mb-5'>
            Suitable for Card type Table:
          </h4>
          <ul className='list-disc'>
            <li>JACE-2220 Card (1.5-2.5d)</li>
            <li>Air-flow Card (1d-2.5d)</li>
            <li>
              Thibeau Ca11 wet-punching & thermal calendaring card (0.8d-1.5d)
            </li>
            <li>AP-1754 card (1.5d-3d)</li>
            <li>Spinnbou-216.c.c card</li>
            <li>Spinnbou-288.c.c card</li>
            <li>Paper makers'felt double Cards (1d-2.5d)</li>
            <li>Single cylinder & double doffer card (3d-9d)</li>
            <li>Thin wet-punching tail-end card (1.5d-2.2d)</li>
            <li>Wet-punching card (1.5d-2.2d)</li>
            <li>And for other card models as per customer requirement.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Metalicwirechart
