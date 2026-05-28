import { useState } from 'react'

const Dealers = () => {
  const dealercities = [
    { title: 'Coimbatore' },
    { title: 'Madurai' },
    { title: 'Salem' },
    {title : 'Bengaluru'},
    {title : 'Madhya Pradesh'},
    {title : 'Uttar Pradesh & Uttarakhand'},
    {title : 'Kolkata'},
    {title : 'Rajasthan - Bhilwara'},
    {title : 'Maharastra - Khadakpada'},
    {title : 'Punjab, Haryana & Himachal Pradesh - Panchkula'},
    {title : 'Gujarat - Ahmedabad'},
    {title : 'Kolhapur'}
  ]

  const dealercard = [
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
    address:
      '1/505 - W, Kathir College Road, Neelambur Post, Coimbatore - 641062.',
    contactperson: 'Mr. S.P. Palanisamy',
    email: 'sales@yespeeassociates.com',
    mobile: '98422 88815',
    phone: '0422-2627314'
  },

  {
    city: 'Dindigul',
    title: 'BALAJI SYNDICATE',
    address:
      'N. 35, Cox Street, Kattoor, Coimbatore - 641025, Tamil Nadu, India.',
    contactperson: 'Sri S Kathiresan, Proprietor (CEO)',
    email: 'balajisyndicatebe@gmail.com',
    mobile: '+91 9976411000',
    phone: '+91 422-2231653 / 4379482'
  },

  {
    city: 'Salem',
    title: 'M/s. SUNDHAR TEXTILE SUPPLIERS',
    address:
      'Post Box No: 103, 59/20 Mallicetty Street, Ponnamapet, Salem - 636001.',
    contactperson: 'Mr. Kuppusamy, Mr. Sundharalingam',
    email: 'sts@sundhar.com',
    mobile: '98427 44324, 98427 44325',
    phone: '0427-2296744 / 2295098 / 2296598'
  },

  {
    city: 'Madurai',
    title: 'MEC SUNDER TEXSPARES P. LTD',
    address:
      'Jeevribhava, 14/BA1, Abdul Gaffar Khan Road, Chinna Chokkikulam, Madurai - 625002.',
    contactperson: 'Mr. N. Sundar',
    email: 'mectex1@gmail.com',
    mobile: '9442610771, 9344100771',
    phone: '0452-4200886'
  },

  {
    city: 'Bengaluru',
    title: 'NEEMA MARKETING COMPANY',
    address:
      '#178, 11th Cross, 1st Block, R.T. Nagar, Bengaluru - 560032.',
    contactperson: 'K.R. Natraj',
    email: 'forum.kuncham@gmail.com',
    mobile: '+91 9845374583',
    phone: '+91-80-23333591'
  },

  {
    city: 'Coimbatore',
    title: 'SPINFOTECZ',
    address:
      'No 37, Chandra Gandhi Nagar, Sowripalayam, Coimbatore - 641028, Tamil Nadu, India.',
    contactperson: 'N. Mani',
    email: 'sales@spinfotecz.com',
    mobile: '+91 9894451333',
    phone: '+91 9566673660 / 61 / 62'
  },

  {
    city: 'Kolkata',
    title: 'M/s. SPINTEX CORPORATION',
    address:
      '45/6, Ram Lochan Shire Street, Belur, Howrah - 711202, West Bengal, India.',
    contactperson: 'Mr. Sunil Sarla',
    email: 'spintex29@gmail.com',
    mobile: '09903011141',
    phone: '+91 3322305598'
  },

  {
    city: 'Madhya Pradesh',
    title: 'GAURAV AGENCIES',
    address:
      '7-A, Gurukripa Colony, Airport Road, Indore - 452004.',
    contactperson: 'Mr. Manish Pancholi',
    email: 'gauravagencies73@gmail.com',
    mobile: '9827684899',
    phone: ''
  },

  {
    city: 'Uttar Pradesh & Uttarakhand',
    title: 'M/s. NEW WONDER MARKETING SERVICES',
    address:
      'Ashok Nagar 63, Bhilwara - 311001, Rajasthan.',
    contactperson: 'Mr. Yogesh Maheswari',
    email: 'yogesh_3077@rediffmail.com',
    mobile: '09529672003',
    phone: ''
  },

  {
    city: 'Rajasthan - Bhilwara',
    title: 'M/s. ABHISHEK ENTERPRISES',
    address:
      'A-157 RK Colony, Bhilwara - 311001, Rajasthan.',
    contactperson: 'Mr. Abhishek Jain',
    email: 'jainbh1@sancharnet.in',
    mobile: '9829045636',
    phone: '01482-264330'
  },

  {
    city: 'Maharastra - Khadakpada',
    title: 'M/s. MAHALAXMI TECHNICAL & MARKETING SOLUTIONS',
    address:
      '303, AA5, Shree Complex IV, Khadakpada, Kalyan (West) - 421301.',
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
    address:
      'SCO 194-195, 1st Floor, Ansal Sampark, Sec.5, Panchkula - 134112.',
    contactperson: 'Mr. SANJEEV MAHINDRU',
    email: 'techno.spin@yahoo.com',
    mobile: '98555 55710',
    phone: '0172-2585557'
  },
    {
    city: 'Punjab, Haryana & Himachal Pradesh - Panchkula',
    title: ' Fateh Texultants',
    address:
      ' Plot No: 136-40/49, Industrial Area, Phase 1 , Chandigarh (U.T) - 160002',
    email: 'sales@fatehtexultants.com , service@fatehtexultants.com, fatehtexultants@gmail.com',
    mobile: '+91 9216582552, +91 7307921000',
  },

  {
    city: 'Gujarat - Ahmedabad',
    title: 'M/s. TEXMACC',
    address:
      'F102, Galaxy, 10th Floor, Judges Bungalow Road, Bodakdev, Ahmedabad - 380054.',
    contactperson: 'Mr. Sandeep Bakshi / Ms Ridhi Jain',
    email: 'sales@texmacc.com',
    mobile: '+91 8905777021 / 9328868190',
    phone: ''
  },

  {
    city: 'Kolhapur',
    title: 'VARAD ENGINEERS',
    address:
      '517, A/1, Plot No/114, Pooja Residency, Shivaji Park, Kolhapur - 416001.',
    contactperson: 'Mr. Vinayak Jadhav',
    email: 'varadeng1035@gmail.com',
    mobile: '+91 98232 85778',
    phone: ''
  }

]

  const [selectedCity, setSelectedCity] = useState('Coimbatore')

  const filteredDealers = dealercard.filter(
    dealer => dealer.city === selectedCity
  )

  return (
    <section>
      <div className='dealer-container py-20 px-3'>
        <div className='flex flex-col md:flex-row gap-10 relative'>
          {/* LEFT SIDE */}
          <div className='md:w-[30%] w-full'>
            <div className='sticky top-24'>
              <h2 className='text-5xl font-bold'>Dealer List's</h2>

              <p className='text-red-500 border-b border-black py-3 mt-3'>
                Cities
              </p>

              <div className='py-5'>
                <ul className='flex justify-start items-start flex-wrap gap-3'>
                  {dealercities.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedCity(item.title)}
                      className={`border py-2 px-5 text-sm cursor-pointer duration-300
                        
                        ${
                          selectedCity === item.title
                            ? 'bg-black text-white border-black'
                            : 'border-black hover:bg-black hover:text-white'
                        }
                      `}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='md:w-[70%] w-full'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
              {filteredDealers.map((item, index) => (
                <div
                  key={index}
                  className='relative overflow-hidden bg-white/20 backdrop-blur-md p-6 border-b border-red-400 min-h-[250px]'
                >
                  {/* Glow */}
                  <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/80 via-orange-400/30 to-transparent rounded-full blur-2xl'></div>

                  <div className='relative z-10'>
                    <h2 className='text-2xl font-bold text-red-600'>
                      {item.title}
                    </h2>

                    <p className='py-5'>{item.address}</p>

                    <div className='space-y-1 text-sm'>
                      <p>{item.contactperson}</p>
                      <p>{item.email}</p>
                      <p>{item.mobile}</p>
                      <p>{item.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dealers
