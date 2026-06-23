type Table = {
  title: string
  headers: string[]
  values: string[]
}
type ListItem = {
  head?: string
  list?: string
  items?: string[]
  table?: Table
}
type AboutSection = {
  no: string
  title: string
  listitem: ListItem[]
}

const Aboutdata = () => {
  const Prodabt: AboutSection[] = [
    {
      no: '01',
      title: 'Reliable Carding Solutions',
      listitem: [
        {
          list: 'Found in the year 2002. Started by team of experts having years of experience in card clothing manufacturing.'
        },
        {
          list: '2002 – Lakzer India Pvt Ltd. Manufacturing and supplying stationary flat tops and C cleaner conversion kits.'
        },
        {
          list: '2009 – Unirols Card Clothing India Pvt Ltd, imported a modern manufacturing plant from Europe. Started manufacturing and supplying of full range to card clothing products.'
        },
        {
          list: '2017 – Renamed as Unispin Card Clothing India Pvt Ltd. Manufacturing and supplying card clothing for short staple processing cards, metallic wires for non-woven carding machines and raising fillets for fabric raising machines.'
        },
        {
          list: 'Supplying products to customers all over India.'
        },
        {
          list: 'Exporting to Indonesia, Vietnam, Thailand, Bangladesh, Pakistan, Egypt and Turkey.'
        },
        {
          list: '3rd Indian company to have in-house manufacturing facility to produce complete range of card clothing products.'
        }
      ]
    },

    {
      no: '02',
      title: 'Services',
      listitem: [
        {
          list: 'Has trained team of service engineers to attend card wire mounting, resetting,fine tuning & performance improvement.'
        },
        {
          list: 'We offer card survey services to estimate card clothing condition and torecommend replacement schedule.'
        }
      ]
    },

    {
      no: '03',
      title: 'Sales Network',
      listitem: [
        {
          list: 'Represented by 15 selling agents located at Chandigarh, Ahmedabad, Bhilwara, Indore, Mumbai, Kolhapur, Kolkata, Guntur, Coimbatore, Salem, Dindigul & Madurai.'
        },
        {
          list: 'Having regional service personal located at south and north India.'
        }
      ]
    },

    {
      no: '04',
      title: 'Advantages',
      listitem: [
        {
          list: 'Products made out of quality raw material, manufactured in modern machines.'
        },
        {
          list: 'Wide range of specifications & products. Meets end to end card roomrequirements.'
        },
        {
          list: 'High price performance ratio (PPR). Competitive pricing.'
        },
        {
          list: 'Local sales and service support.'
        },
        {
          list: 'Timely deliveries.'
        },
        {
          list: 'Assured life of card clothing.'
        }
      ]
    },
    {
      no: '05',
      title: 'Infrastructure',

      listitem: [
        {
          head: 'Metallic Wires',
          items: [
            'Consisting of heavy duty rolling mills, which can produce the finest of cylinder wires (example 1.5 mm height, 0.4 mm thickness) to coarsest blow room beater wires (example 10 mm height , 1.5 mm thickness).',
            'Punching and hardening lines, sequentially does the punching, hardening and final packing of metallic wires. Equipped with advanced dye and cutter arrangement, ensures uniform punching quality throughout the length of metallic wires. Combination of flame and electrical hardening and annealing process ensures uniform hardness values (VPN).',
            'Concentrically wound heavy duty hard board spools, facilitates high speed wire mounting at customer site.',
            'Products: Cylinder wire, doffer wire, grooved & interlocking wires, stripper wires, border wires, blow room and chute beater wires.'
          ]
        },

        {
          head: 'Flat Tops',
          items: [
            'Facility to manufacture 40" width and 60" width flat tops (for Rieter and LMW wider width cards).',
            'Facility to manufacture (a) various setting pattern tops (uniform density, variable density etc) and (b) flat tops with 300 points / square inch to 600 points / square inch density.',
            'Steel - Flat tops are made out of special grade oil tempered steel with high fatigue properties imported from Germany.',
            'Hardening - Advanced HAQ method (Hydrogen fuel flaming and cryogenic quenching).'
          ]
        },

        {
          head: 'Fillets',
          items: [
            'Have one of the largest facility to manufacture fillets.',
            'Made of German steel.',
            'Confirming to OEM supply standards and specifications.'
          ]
        },

        {
          head: 'Stationary Flat Tops',
          items: [
            'High speed semi-automatic manufacturing machines',
            'Stationary flat tops are made of Nano alloy steel wires – Stilo series. Life tonnage at par with OEM supplies.',
            'Precision aluminium stationary flat tops for Trutzschler cards. Uniform gauging and lesser heat expansion.',
            'Various density stationary flat tops – 70 ppsi, 90 ppsi, 100 ppsi, 150 ppsi, 250 ppsi, 350 ppsi, 450 ppsi, 550 ppsi and 650 ppsi.'
          ]
        },

        {
          head: 'Metallurgy',
          items: [
            'Unistar – Nano alloy steel wire for Super production cards.',
            'Unichrome – Made from Chrome vanadium steel for high production cards.',
            'Unicarb – Special high tenacity carbon steel for medium production cards.'
          ],
          table: {
            title: 'CHEMICAL COMPOSITION IN %',
            headers: [
              'Carbon',
              'Silicon',
              'Manganese',
              'Chromium',
              'Vanadium',
              'Niobium'
            ],
            values: ['0.80', '0.22', '1.00', '0.80', '0.30', '0.09']
          }
        }
      ]
    }
  ]

  return (
    <div className='py-0 md:px-10 px-5 bg-[#0c1714] text-white'>
      {Prodabt.map((item: AboutSection) => (
        <div
          key={item.no}
          className='grid grid-cols-1 md:grid-cols-2 gap-10 py-20 bg-[#0c1714] md:sticky top-10'
        >
          {/* Title */}
          <div className='border-t border-gray-400 py-5'>
            <h2 className='text-2xl font-medium'>{item.title}</h2>
          </div>

          {/* Content */}
          <div className='border-t border-gray-400 py-5 text-base text-white/60'>
            <div className='space-y-3'>
              {item.listitem.map((section, index) => (
                <div key={index}>
                  {/* Heading */}
                  {section.head && (
                    <h4 className='text-white text-lg font-semibold mb-4'>
                      {section.head}
                    </h4>
                  )}

                  {/* Normal list */}
                  {section.list && (
                    <ul className='list-disc pl-5'>
                      <li>{section.list}</li>
                    </ul>
                  )}

                  {/* Nested list */}
                  {section.items && (
                    <ul className='list-disc pl-5 space-y-3'>
                      {section.items.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {/* Table */}
                  {section.table && (
                    <div className='mt-6 overflow-x-auto rounded-md'>
                      <div className='bg-[#353535] text-white text-center py-3 font-semibold'>
                        {section.table.title}
                      </div>

                      <table className='w-full border-collapse'>
                        <thead>
                          <tr className='bg-[#686767] text-white'>
                            {section.table.headers.map((header, i) => (
                              <th key={i} className='px-4 py-3 text-center'>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          <tr className='bg-[#686767] text-black'>
                            {section.table.values.map((value, i) => (
                              <td key={i} className='px-4 py-3 text-center'>
                                {value}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Aboutdata
