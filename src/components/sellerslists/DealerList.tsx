'use client'

import { useMemo, useState } from 'react'
import { Mail, Phone, Smartphone, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ---------------------------------------------------------------------------
// Data. A dealer's "city" field may carry a region and a specific area,
// separated by " - " (e.g. "Rajasthan - Bhilwara"). splitLocation() below
// turns that into a clean { region, area } pair so every dealer surfaces
// under one sensible region tab — including the three Maharashtra dealers
// and the Dindigul dealer, which the original city-tab list couldn't reach
// (a "Maharastra" / "Maharashtra" spelling mismatch, and a missing
// Dindigul tab altogether).
// ---------------------------------------------------------------------------
interface Dealer {
  city: string
  title: string
  address: string
  contactperson?: string
  email: string
  mobile: string
  phone?: string
}

interface DealerWithLocation extends Dealer {
  region: string
  area: string | null
}

interface RegionTab {
  region: string
  count: number
}

const DEALERS: Dealer[] = [
  {
    city: 'Coimbatore',
    title: 'NIKASU TAPES BELTS',
    address:
      'New No.36, Old No.74, Krishnasamy Nagar, Lind Lay-out, School Road, Ramanathapuram, Coimbatore - 641045, Tamil Nadu, India.',
    contactperson: 'Mr. V. Karthikeyan',
    email: 'nikasukarthi@outlook.com / info@nikasutexspares.com',
    mobile: '+91 94422-22815',
    phone: '0422-2322592 / 94422-22935'
  },
  {
    city: 'Coimbatore',
    title: 'LAKZER INDIA',
    address:
      'Mallikai Illam, 28, Kongu Nagar, Ramanathapuram, Coimbatore - 641045, Tamil Nadu, India.',
    contactperson: 'Mr. A.R. Manoj Kumar, Partner',
    email: 'lakzerindia@gmail.com, sales@lakzerindia.com',
    mobile: '7397702954',
    phone: '0422-2322756'
  },
  {
    city: 'Coimbatore',
    title: 'YESPEE ASSOCIATES',
    address: '1/505 - W, Kathir College Road, Neelambur Post, Coimbatore - 641062.',
    contactperson: 'Mr. S.P. Palanisamy',
    email: 'sales@yespeeassociates.com',
    mobile: '98422 88815',
    phone: '0422-2627314'
  },
  {
    city: 'Dindigul',
    title: 'BALAJI SYNDICATE',
    address: 'N. 35, Cox Street, Kattoor, Coimbatore - 641025, Tamil Nadu, India.',
    contactperson: 'Sri S Kathiresan, Proprietor (CEO)',
    email: 'balajisyndicatebe@gmail.com',
    mobile: '+91 9976411000',
    phone: '+91 422-2231653 / 4379482'
  },
  {
    city: 'Salem',
    title: 'M/s. SUNDHAR TEXTILE SUPPLIERS',
    address: 'Post Box No: 103, 59/20 Mallicetty Street, Ponnamapet, Salem - 636001.',
    contactperson: 'Mr. Kuppusamy, Mr. Sundharalingam',
    email: 'sts@sundhar.com',
    mobile: '98427 44324, 98427 44325',
    phone: '0427-2296744 / 2295098 / 2296598'
  },
  {
    city: 'Madurai',
    title: 'MEC SUNDER TEXSPARES P. LTD',
    address: 'Jeevribhava, 14/BA1, Abdul Gaffar Khan Road, Chinna Chokkikulam, Madurai - 625002.',
    contactperson: 'Mr. N. Sundar',
    email: 'mectex1@gmail.com',
    mobile: '9442610771, 9344100771',
    phone: '0452-4200886'
  },
  {
    city: 'Bengaluru',
    title: 'NEEMA MARKETING COMPANY',
    address: '#178, 11th Cross, 1st Block, R.T. Nagar, Bengaluru - 560032.',
    contactperson: 'K.R. Natraj',
    email: 'forum.kuncham@gmail.com',
    mobile: '+91 9845374583',
    phone: '+91-80-23333591'
  },
  {
    city: 'Coimbatore',
    title: 'SPINFOTECZ',
    address: 'No 37, Chandra Gandhi Nagar, Sowripalayam, Coimbatore - 641028, Tamil Nadu, India.',
    contactperson: 'N. Mani',
    email: 'sales@spinfotecz.com',
    mobile: '+91 9894451333',
    phone: '+91 9566673660 / 61 / 62'
  },
  {
    city: 'Kolkata',
    title: 'M/s. SPINTEX CORPORATION',
    address: '45/6, Ram Lochan Shire Street, Belur, Howrah - 711202, West Bengal, India.',
    contactperson: 'Mr. Sunil Sarla',
    email: 'spintex29@gmail.com',
    mobile: '09903011141',
    phone: '+91 3322305598'
  },
  {
    city: 'Madhya Pradesh',
    title: 'GAURAV AGENCIES',
    address: '7-A, Gurukripa Colony, Airport Road, Indore - 452004.',
    contactperson: 'Mr. Manish Pancholi',
    email: 'gauravagencies73@gmail.com',
    mobile: '9827684899',
    phone: ''
  },
  {
    city: 'Uttar Pradesh & Uttarakhand',
    title: 'M/s. NEW WONDER MARKETING SERVICES',
    address: 'Ashok Nagar 63, Bhilwara - 311001, Rajasthan.',
    contactperson: 'Mr. Yogesh Maheswari',
    email: 'yogesh_3077@rediffmail.com',
    mobile: '09529672003',
    phone: ''
  },
  {
    city: 'Rajasthan - Bhilwara',
    title: 'M/s. ABHISHEK ENTERPRISES',
    address: 'A-157 RK Colony, Bhilwara - 311001, Rajasthan.',
    contactperson: 'Mr. Abhishek Jain',
    email: 'jainbh1@sancharnet.in',
    mobile: '9829045636',
    phone: '01482-264330'
  },
  {
    city: 'Maharashtra - Khadakpada',
    title: 'M/s. MAHALAXMI TECHNICAL & MARKETING SOLUTIONS',
    address: '303, AA5, Shree Complex IV, Khadakpada, Kalyan (West) - 421301.',
    contactperson: 'Mr. Manoj B Javlekar',
    email: 'mahalaxmitechmark@gmail.com',
    mobile: '09892461068',
    phone: ''
  },
  {
    city: 'Maharashtra',
    title: 'VIJAYSHRI ENGINEERING CORPORATION',
    address:
      "101, 'B' Wing Royal Apartment, Prathana Samaj Road, Vile Parle (East), Mumbai - 400057.",
    contactperson: 'Mr. Vimal Banka',
    email: 'vsecvb@gmail.com',
    mobile: '8369086316',
    phone: '9323452002'
  },
  {
    city: 'Maharashtra',
    title: 'VIJAYSHRI TEXCOM',
    address:
      "101, 'B' Wing Royal Apartment, Prathana Samaj Road, Vile Parle (East), Mumbai - 400057.",
    contactperson: '',
    email: 'vtexcom@gmail.com & vijay@vijayshri.co.in',
    mobile: '8779034792',
    phone: '9821033559'
  },
  {
    city: 'Punjab, Haryana & Himachal Pradesh - Panchkula',
    title: 'M/s. TECHNOSPIN',
    address: 'SCO 194-195, 1st Floor, Ansal Sampark, Sec.5, Panchkula - 134112.',
    contactperson: 'Mr. SANJEEV MAHINDRU',
    email: 'techno.spin@yahoo.com',
    mobile: '98555 55710',
    phone: '0172-2585557'
  },
  {
    city: 'Punjab, Haryana & Himachal Pradesh - Panchkula',
    title: 'Fateh Texultants',
    address: 'Plot No: 136-40/49, Industrial Area, Phase 1, Chandigarh (U.T) - 160002',
    contactperson: '',
    email: 'sales@fatehtexultants.com, service@fatehtexultants.com, fatehtexultants@gmail.com',
    mobile: '+91 9216582552, +91 7307921000',
    phone: ''
  },
  {
    city: 'Gujarat - Ahmedabad',
    title: 'M/s. TEXMACC',
    address: 'F102, Galaxy, 10th Floor, Judges Bungalow Road, Bodakdev, Ahmedabad - 380054.',
    contactperson: 'Mr. Sandeep Bakshi / Ms Ridhi Jain',
    email: 'sales@texmacc.com',
    mobile: '+91 8905777021 / 9328868190',
    phone: ''
  },
  {
    city: 'Kolhapur',
    title: 'VARAD ENGINEERS',
    address: '517, A/1, Plot No/114, Pooja Residency, Shivaji Park, Kolhapur - 416001.',
    contactperson: 'Mr. Vinayak Jadhav',
    email: 'varadeng1035@gmail.com',
    mobile: '+91 98232 85778',
    phone: ''
  }
]

const splitLocation = (raw: string): { region: string; area: string | null } => {
  const [region, area] = raw.split(' - ').map((part) => part.trim())
  return { region, area: area || null }
}

const getInitials = (title: string): string => {
  const clean = title.replace(/^M\/s\.?\s*/i, '').trim()
  const words = clean.split(/\s+/).filter(Boolean)
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

const cleanTitle = (title: string): string => title.replace(/^M\/s\.?\s*/i, '').trim()

const monoFont = { fontFamily: "'IBM Plex Mono', monospace" }

interface ContactRowProps {
  icon: LucideIcon
  value?: string
}

const ContactRow = ({ icon: Icon, value }: ContactRowProps) => {
  if (!value) return null
  return (
    <div className="mt-2.5 flex items-start gap-2.5">
      <Icon className="mt-0.5 shrink-0 text-[#c9a24b]" size={14} strokeWidth={1.75} aria-hidden="true" />
      <span className="break-words text-xs leading-relaxed text-[#f3ecda]" style={monoFont}>
        {value}
      </span>
    </div>
  )
}

const DealersList = () => {
  const dealers: DealerWithLocation[] = useMemo(
    () => DEALERS.map((d) => ({ ...d, ...splitLocation(d.city) })),
    []
  )

  const regions: RegionTab[] = useMemo(() => {
    const order: string[] = []
    const counts = new Map<string, number>()
    dealers.forEach(({ region }) => {
      if (!counts.has(region)) {
        counts.set(region, 0)
        order.push(region)
      }
      counts.set(region, (counts.get(region) ?? 0) + 1)
    })
    return order.map((region) => ({ region, count: counts.get(region) ?? 0 }))
  }, [dealers])

  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(regions[0]?.region)
  const activeRegion = selectedRegion ?? regions[0]?.region
  const filteredDealers = dealers.filter((d) => d.region === activeRegion)

  return (
    <section className="bg-[#11231c] md:px-6 px-0 py-20">
     

      <div className="mx-auto w-full px-5">
        

        <div className="mt-14 flex flex-col gap-10 md:flex-row md:gap-14">
          <nav aria-label="Filter dealers by region" className="md:sticky md:top-24 md:w-64 md:shrink-0 md:self-start">
            <ul className="flex list-none gap-2 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible md:pb-0">
              {regions.map(({ region, count }) => {
                const isActive = activeRegion === region
                return (
                  <li
                    key={region}
                    className="md:border-t md:border-[#c9a24b]/20 md:first:border-t-0"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedRegion(region)}
                      aria-current={isActive}
                      className={[
                        'flex w-full items-start justify-between gap-3 whitespace-nowrap px-4 py-2.5 text-left md:text-sm text-base transition-colors',
                        'border-b-2 md:whitespace-normal md:border-b-0 md:border-l-2 md:py-3.5',
                        'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#684bc9]',
                        isActive
                          ? 'border-[#f59044] text-[#f3ecda] md:pl-5'
                          : 'border-transparent text-[#93a99a] hover:text-[#f3ecda]'
                      ].join(' ')}
                    >
                      <span>{region}</span>
                      <span
                        className={`text-xs ${isActive ? 'text-[#c9a24b]' : 'text-[#93a99a]'}`}
                        style={monoFont}
                      >
                        {String(count).padStart(2, '0')}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredDealers.map((dealer, index) => (
              <article
                key={`${dealer.title}-${index}`}
                className="dd-card group relative border border-[#c9a24b]/20 bg-[#16271f] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a24b]/50"
                style={{ animation: 'dd-rise 0.5s ease backwards', animationDelay: `${index * 60}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 flex h-11 w-11 -rotate-6 items-center justify-center rounded-full border border-[#c9a24b] text-sm font-semibold text-[#e0c179] transition-transform duration-300 group-hover:rotate-0"
                
                >
                  {getInitials(dealer.title)}
                </span>

                <h3 className="pr-12 text-xl font-semibold leading-snug text-[#f3ecda]">
                  {cleanTitle(dealer.title)}
                </h3>

                {dealer.area && (
                  <span
                    className="mt-2 inline-block text-xs uppercase tracking-widest text-[#c9a24b]"
                    
                  >
                    {dealer.area}
                  </span>
                )}

                <p className="mt-3.5 text-sm leading-relaxed text-[#93a99a]">{dealer.address}</p>

                <hr className="my-5 border-t border-[#c9a24b]/20" />

                <ContactRow icon={User} value={dealer.contactperson} />
                <ContactRow icon={Mail} value={dealer.email} />
                <ContactRow icon={Smartphone} value={dealer.mobile} />
                <ContactRow icon={Phone} value={dealer.phone} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealersList