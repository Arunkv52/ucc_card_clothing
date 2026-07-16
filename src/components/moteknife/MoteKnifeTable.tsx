type Row = {
  model: string
  marks: boolean[] // ULK1, ULK2, ULK3, BKB, BKM, BKT, FKB, FKT
}

const columns = ['ULK1', 'ULK2', 'ULK3', 'BKB', 'BKM', 'BKT', 'FKB', 'FKT']

const rows: Row[] = [
  {
    model: 'LC 333, 361, 363',
    marks: [true, true, false, true, true, false, true, false]
  },
  {
    model: 'LC 300, 300A, LC 300V3',
    marks: [true, true, false, true, true, false, true, false]
  },
  {
    model: 'LR C1/3, LC100',
    marks: [true, true, false, true, false, false, true, false]
  },
  {
    model: 'DK 740',
    marks: [true, false, false, false, false, true, false, false]
  },
  {
    model: 'DK 803 & 903',
    marks: [true, true, true, false, false, true, false, false]
  },
  {
    model: 'DK 760, 780, 800',
    marks: [true, true, false, false, false, true, true, true]
  },
  {
    model: 'TC 03, 05 & 5/3, 06, 07 08, 10, 11, 12, 15, 19 MODEL',
    marks: [true, false, false, false, true, true, true, false]
  }
]

const Star: React.FC = () => (
  <span className='text-[#f58433] text-lg leading-none'>&#9733;</span>
)

const MoteKnifeTable: React.FC = () => {
  return (
    <div className='w-full overflow-x-auto md:px-15 px-5'>
      <table className='min-w-full border-separate border-spacing-0 overflow-hidden shadow-sm'>
        <thead>
          <tr>
            <th className='bg-[#4a5566] text-white text-left font-bold px-4 py-3 text-sm md:text-base whitespace-nowrap'>
              CARD MODEL
            </th>
            {columns.map((col, i) => (
              <th
                key={col}
                className={`px-4 py-3 text-center font-bold text-sm md:text-base whitespace-nowrap ${
                  i % 2 === 0
                    ? 'bg-[#4a5566] text-white'
                    : 'bg-[#4a5566] text-white'
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={row.model}>
              <td
                className={`px-4 py-3 text-sm md:text-base font-medium text-slate-900 whitespace-nowrap ${
                  rIdx % 2 === 0 ? 'bg-white' : 'bg-[#383838] text-white'
                }`}
              >
                {row.model}
              </td>
              {row.marks.map((mark, cIdx) => (
                <td
                  key={cIdx}
                  className={`px-4 py-3 text-center ${
                    rIdx % 2 === 0 ? 'bg-white' : 'bg-[#383838] text-white'
                  }`}
                >
                  {mark && <Star />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-5">
        <p>
          <span className="font-bold text-[#f58433]">NOTE: </span>Knife for all card Models other than specified also can be
          supplied Knife for Blow rooms LMW, ERM, RIETER, CVT Also available
        </p>
      </div>
    </div>
  )
}

export default MoteKnifeTable
