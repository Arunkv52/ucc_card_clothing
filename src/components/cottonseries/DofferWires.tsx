import type { ReactNode } from 'react'
import DofferImg from '../../assets/products/cotton-series/doffer-banner.jpg'

// All the row content lives in one place, so adding/removing/editing a spec
// is a one-line change instead of copy-pasting a whole <Row /> block.
type SpecRow = {
  label: string
  value: ReactNode
}

const specs: SpecRow[] = [
  { label: 'Doffer wire available in', value: '340, 370, 390 & 400 ppsi' },
  { label: 'Metallurgy', value: 'Unistar, Unichrome, Unicarb & Stillo' },
  {
    label: 'Specifications',
    value: (
      <span className='text-[13px] leading-relaxed sm:text-sm'>
        DM 4030 * 0.8 * 400 <br />
        DN 4030X0.85R 390 <br />
        DN 4730X0.9 370 <br />
        DM 5030X0.9 340
      </span>
    )
  }
]

export default function DofferWires () {
  return (
    <section className='w-full'>
      <div className='px-6 py-16 md:px-20 md:py-20'>
        {/* Title */}
        <h2 className='text-2xl font-semibold tracking-tight text-[#010101] md:text-3xl'>
          Doffer Wires
        </h2>
        <div className='mt-4 h-px w-12 bg-[#ff671c]' />

        <div className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-14'>
          {/* Product image */}
          <img
            src={DofferImg}
            alt='Unistar, Unistar Plus, and Unimax cylinder wire profiles'
            className='w-full '
            draggable={false}
          />

          {/* Spec table */}
          <div>
            

            <div className='mt-6 divide-y divide-white/[0.08] border border-white/[0.08]'>
              {specs.map(row => (
                <Row key={row.label} label={row.label} value={row.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



function Row ({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className='grid grid-cols-2 gap-1'>
      <div className="flex items-center bg-[#383838] px-5 py-6">
        <span className="text-[15px] text-[#ffffff] sm:text-base">
          {label}
        </span>
      </div>
      <div className="flex items-center bg-[#d8d8d8] px-5 py-6">
        <span className="text-[15px] font-medium text-[#0a0a0a] sm:text-base">
          {value}
        </span>
      </div>
    </div>
  )
}
