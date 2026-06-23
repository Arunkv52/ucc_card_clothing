export interface TableRow {
  process: string
  values: string[][]
}

export interface TableSection {
  productionRate: string
  rows: TableRow[]
}

const TableData: TableSection[] = [
  {
    productionRate: 'Below 20 Kgs / hr',
    rows: [
      {
        process: 'Cylinder',
        values: [
          ['CR 2030 x 0.5', 'CR 2520 x 0.6', 'CR 2030 x 0.6'],
          ['CR 2520 x 0.7', 'CR 2520 x 0.6'],
          ['CR 2030 x 0.5', 'CR 2035 x 0.5'],
          ['CR 2030 x 0.5', 'CR 2040 x 0.5'],
          ['CR 2030 x 0.5', 'CP 2035 x 0.4'],
          ['CP 2035 x 0.4', 'CR 2030 x 0.5']
        ]
      },
      {
        process: 'Doffer',
        values: [
          ['DN 4030 x 0.85R', 'DL 4030 x 0.9RC-310'],
          ['DN 4030 x 0.85R', 'DL 4030 x 0.9RC-310'],
          ['DN 4030 x 0.85R', 'DL 4030 x 0.9RC-310'],
          ['DN 4030 x 0.85R', 'DL 4030 x 0.9RC-310'],
          ['DN 4030 x 0.85R', 'DL 4030 x 0.9RC-310'],
          ['DN 4030 x 0.85R', 'DL 4030 x 0.9RC-310']
        ]
      },
      {
        process: 'Flat Top',
        values: [
          ['PG 330', 'UNO S300'],
          ['UNO S300', 'RECTO 330'],
          ['PG 430', 'PG 530', 'UNO 410 / 450'],
          ['PG 530', 'UNO 510'],
          ['PG 530', 'UNO 510 / 550'],
          ['Stilo 580 & 600', 'UNO 550']
        ]
      },
      {
        process: 'Lickerin',
        values: [
          ['GLE 5510'],
          ['GLD 5505'],
          ['GLE 5510'],
          ['GLE 5510'],
          ['GLE 5510'],
          ['GLE 5510', 'GLD 5505']
        ]
      }
    ]
  }
]

export default TableData