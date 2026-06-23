import { useState } from 'react'

import HeroImage from '../../assets/safety-industry.jpg'

const tabs = [
  {
    id: 'general',
    title: 'CYLINDER WIRES',
    content: (
      <div>
        <ul className='text-sm'>
          <li>
            ✓ A Mounting tension of 6-8 kgs has to be applied during cylinder
            wire mounting.
          </li>
          <li>
            ✓ Tension should be sufﬁcient enough to make the wire bend and sit
            straight vertically on the cylinder surface.
          </li>
          <li>✓ ding required for cylinder wire.</li>
          <li>
            ✓ Only re-sharpening has to be done to cylinder wire in speciﬁed
            intervals using speciﬁed resharpening machines with 100's grit
            stones.
          </li>
          <li>
            ✓ Periodical replacement of Licker-in wire, Stationary flat tops,
            flat tops enhances cylinder wire life and vice versa.
          </li>
          <li>
            ✓ Different height and thickness cylinder wires require different
            mounting tension. Hence, tension varies depending on wire
            speciﬁcation.
          </li>
          <li>
            ✓ Example: 2.5 mm Height x 0.6 Thickness and 2.0mm Height x 0.4
            Thickness.
          </li>
        </ul>
      </div>
    )
  },

  {
    id: 'surface',
    title: 'DOFFER WIRE',
    content: (
      <div>
        <ul className='space-y-1 text-sm text-gray-300'>
          <li>
            {' '}
            ✓ A Mounting tension of 8 kgs has to be applied during wire doffer
            wire mounting.
          </li>
          <li>
            {' '}
            ✓ Being coarser wire, doffer wire may be having raised wire prints
            at starting and ﬁnishing.
          </li>
          <li>
            {' '}
            ✓ The raised wire points may be leveled by applying grinding machine
            [full width or traversing stone grinder] to the extent required.
          </li>
          <li>
            {' '}
            ✓ An initial grinding on doffer wire may be required <br />
            1. To achieve uniform gauge between Cylinder & Doffer. <br /> 2. To
            activate the Doffer wire points for better transfer of ﬁber from
            Cylinder to Doffer.
          </li>
        </ul>
      </div>
    )
  },

  {
    id: 'products',
    title: 'FLAT TOPS',
    content: (
      <div className='space-y-1 text-sm'>
        <ul>
          <li>✓ The card sliver quality, quality consistency and life of clothing
            depend on flat tops. Hence, due care has to be taken during clipping
            of flat tops.
          </li>
          <li>✓ While clipping prescribed load of around 35 kgs, has to be applied
            on bare flat. Ensure the bare flat and flat tops are clipped tight
            with each other.
          </li>
          <li>✓ Loose clipping will result in height variation in flat tops uneven
            grinding of flat wire points, bulging of flat tops during working
            and poor sliver quality.
          </li>
          <li>✓ The ﬁnished set of flat tops should have a maximum variation of +
            0.03 mm to + 0.05 mm only, within flat and flat to flat.
          </li>
          <li>✓ An initial grinding after 15 days of working may be done to achieve
            required quality levels.
          </li>
          <li>✓ Periodical grinding of flat tops using emery roller enhances card
            sliver quality.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'generalitem',
    title: 'GENERAL INSTRUCTIONS',
    content: (
      <div className='space-y-2 text-sm'>
         <ul>
          <li>
            ✓ Cards are initially commissioned with wider settings between all
            organs for safe and smooth working. Based on the raw materials and
            production rates cards have to be worked at least few days to 2
            weeks' time to complete running in. After the running in period,
            settings may be closed as per requirement, subsequently quality of
            sliver can be tested.
          </li>
          <li>
            ✓ The production rate of the card [meters / minute or kgs / hour],
            has to be reduced initially by 30-40%. After completing running in
            period, speed or production can be increased gradually by steps of
            10%.
          </li>
          <li>
            ✓ Do not commission the cards during evening hours, please
            commission the card in day time only. Run the empty card for 1 or 2
            hours, stop the card, check the gauges and then restart with
            material. The ﬁrst day after working with the material card may be
            stopped by evening. Second day the card has to be cleansed, settings
            checked restarted and can be handled over to regular production.
          </li>
          <li>
            ✓ During cylinder, doffer, flat tops change, it is advisable to
            change licker-in wire, stationary flat tops, cleaning ﬁllets and
            stripper wire. This will improve quality as well as performance of
            newly mounted card.
          </li>
          <li>
            ✓ Please refer to our brochure page no.12 for detailed card clothing
            maintenance schedule.
          </li>
        </ul>
      </div>
    )
  }
]

export default function ProductShowcase () {
  const [activeTab, setActiveTab] = useState('general')

  const currentTab = tabs.find(tab => tab.id === activeTab)

  return (
    <section className='bg-white py-12'>
        
      <div className='px-5'>
        <div className='grid gap-4 xl:grid-cols-[1fr_1.35fr]'>
          {/* LEFT IMAGE SECTION */}
          <div className='relative overflow-hidden'>
            <img
              src={HeroImage}
              alt=''
              className='h-full min-h-[500px] w-full object-cover'
            />

            <div className='absolute inset-0 bg-black/15' />

            <div className='absolute md:left-10 left-5 md:top-10 top-5 text-white'>
              <h2 className='mt-2 text-2xl font-light leading-tight '>
                PRECAUTIONS TO BE TAKEN WHILE INSTALLING NEW CARD CLOTHING
              </h2>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className=' bg-black p-5 text-white'>
            {/* Tabs */}
            <div className='md:grid md:grid-cols-4 md:gap-4 grid grid-cols-2 gap-5'>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`md:text-xs text-xs border px-2 py-3 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-black border-white'
                      : 'border-zinc-700 text-white hover:border-white'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className='mt-10 min-h-[420px]'>{currentTab?.content}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
