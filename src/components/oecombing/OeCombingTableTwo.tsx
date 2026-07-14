interface MaterialData {
  material: string
  wires: string[]
}

interface MachineModelData {
  models: string[]
}

interface WireRecommendationData {
  materials: MaterialData[]
  machineModels: MachineModelData[]
}

const wireRecommendationData: WireRecommendationData = {
  materials: [
    { material: 'Cotton', wires: ['OK40', 'OB20-OK40', 'OB20', 'OB20'] },
    {
      material: 'Polyester',
      wires: ['OK37', 'OK37-OK61-OS21', 'OS21', 'OS21']
    },
    { material: 'Acrylic', wires: ['OS21', 'OS21', 'OS21', 'OS21'] },
    { material: 'Polyester - Cotton', wires: ['OK61', 'OK61', 'OS21', 'OS21'] },
    { material: 'Acrylic - Cotton', wires: ['OK61', 'OK61', 'OS21', 'OS21'] },
    {
      material: 'Polynosic - Viscose',
      wires: ['OK61', 'OK61', 'OB20', 'OS21']
    },
    { material: 'Microfibre', wires: ['OB20', 'OK61', 'OB20', 'OB20'] },
    { material: 'Modal - Polynosic', wires: ['OS21', 'OK61', 'OB20', 'OB20'] },
    { material: 'Viscose - Rayon', wires: ['OS21', 'OS21', 'OS21', 'OS21'] },
    { material: 'Linen - Flax', wires: ['OK74', 'OB20', 'OB20', 'OB20'] }
  ],

  machineModels: [
    { models: ['SAVIO', 'BD-200D', 'R1', 'SE7'] },
    { models: ['BDA10-20', 'BD-D1', 'R20', 'SE8'] },
    { models: ['BD200ES', 'BD-D1K', 'RU11', 'SE9'] },
    { models: ['BD200RCF', 'BD-D2', 'RU14', 'SF10'] },
    { models: ['BN200RN', 'BD-D2K', '', 'SE11'] },
    { models: ['BT902-905', 'BD-D30', '', ''] },
    { models: ['FA601A', 'BD-D310', '', ''] },
    { models: ['F1603', 'BD-D320', '', ''] },
    { models: ['FA621', 'BD-D321', '', ''] },
    { models: ['RN', 'BD-D330', '', ''] },
    { models: ['S', 'BD-D340', '', ''] },
    { models: ['SN', 'BD-D350', '', ''] },
    { models: ['', 'BD-SD', '', ''] }
  ]
}

const OeCombingTableTwo = () => {
  return (
    <section className='py-10 bg-white'>
      <div className='overflow-hidden'>
        <div className='overflow-x-auto px-4 md:px-15'>
          <table className='min-w-full border-collapse'>
            {/* Header */}
            <thead className='bg-[#4a5566] text-white'>
              <tr>
                <th className='px-5 py-3 text-center'>Material</th>
                <th colSpan={4} className='px-5 py-3 text-center'>
                  Wires
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Material Rows */}
              {wireRecommendationData.materials.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? 'bg-[#f5f5f5] text-black'
                      : 'bg-[#393939] text-white'
                  }
                >
                  <td className='px-5 py-3 text-center font-medium'>
                    {item.material}
                  </td>

                  {item.wires.map((wire, i) => (
                    <td key={i} className='px-5 py-3 text-center'>
                      {wire}
                    </td>
                  ))}
                </tr>
              ))}
              <br />
              <br />
              {/* Section Header */}
              <tr className='bg-[#4a5566] text-white'>
                <td colSpan={5} className='py-4 text-center font-semibold'>
                  Suitable for Machine Models
                </td>
              </tr>

              {/* Machine Models */}
              {wireRecommendationData.machineModels.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? 'bg-[#f5f5f5] text-black'
                      : 'bg-[#393939] text-white'
                  }
                >
                  {row.models.map((model, i) => (
                    <td key={i} className='px-5 py-3 text-center'>
                      {model}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default OeCombingTableTwo
