import Prod1 from '../../assets/products/fillets/lc636.png'
import Prod2 from '../../assets/products/fillets/lc100.png'
import Prod3 from '../../assets/products/fillets/reiter-c1.png'
import Prod4 from '../../assets/products/fillets/trutzshler-dk715.png'
import Prod5 from '../../assets/products/fillets/crosrol-mk4.png'
import Prod6 from '../../assets/products/fillets/rieterc4.png'
import Prod7 from '../../assets/products/fillets/reiterc60.png'
import Prod9 from '../../assets/products/fillets/standard-fillets.png'
import Prod10 from '../../assets/products/fillets/hand-card-fillet.png'

import Lmwlctable from './Lmwlctable'
import Lmwlc100table from './Lmwlc100table'
import ReiterC1 from './ReiterC1'
import TrutzschlerDk75 from './TrutzschlerDk75'
import CrosrolM4 from './CrosrolM4'
import ReiterC4 from './ReiterC4'
import ReiterC60 from './ReiterC60'
import ReiterC70 from './ReiterC70'
import StandardFillets from './StandardFillets'
import HandCard from './HandCard'

const FilletsTable = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-10 py-20 px-18'>
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            LMW LC 636 (1.5 Meter Card)
          </h6>
          <div className='py-4'>
            <img src={Prod1} alt='' />
          </div>
        </div>
        <div>
          <Lmwlctable />
        </div>

        {/* Prod 2 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            LMW- LC100 / 300 / 300A / 300AV3 / 300AV4 / 333 / 361 / 363 CARDS
          </h6>
          <div className='py-4'>
            <img src={Prod2} alt='' />
          </div>
        </div>
        <div>
          <Lmwlc100table />
        </div>

        {/* Prod 3 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            LAKSHMI RIETER C 1/1 , C 1/2, C1/3 & TEXTOOL-TC360,450 & SHANTHI SC2
            CARDS
          </h6>
          <div className='py-4'>
            <img src={Prod3} alt='' />
          </div>
        </div>
        <div>
          <ReiterC1 />
        </div>

        {/* Prod 4 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            TRUTZSCHLER- DK 715, 740, 760, 780, 800, 803, 903 TC SERIES
            03,05,5/1,5/3,07,08,10,11, 15&19i CARDS
          </h6>
          <div className='py-4'>
            <img src={Prod4} alt='' />
          </div>
        </div>
        <div>
          <TrutzschlerDk75 />
        </div>

        {/* Prod 5 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            CROSROL MK 4, MK5, MK 6 & MK 7 SERIES CARDS
          </h6>
          <div className='py-4'>
            <img src={Prod5} alt='' />
          </div>
        </div>
        <div>
          <CrosrolM4 />
        </div>

         {/* Prod 6 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            RIETER C4,C10, C50, C51 CARDS
          </h6>
          <div className='py-4'>
            <img src={Prod6} alt='' />
          </div>
        </div>
        <div>
          <ReiterC4 />
        </div>

          {/* Prod 7 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            RIETER C 60 CARD
          </h6>
          <div className='py-4'>
            <img src={Prod7} alt='' />
          </div>
        </div>
        <div>
          <ReiterC60 />
        </div>
        {/* Prod 8 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            RIETER C 70 CARD
          </h6>
          <div className='py-4'>
            
          </div>
        </div>
        <div>
          <ReiterC70 />
        </div>
        {/* Prod 9 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            STANDARD FILLETS
          </h6>
          <div className='py-4'>
            <img src={Prod9} alt='' />
          </div>
        </div>
        <div>
          <StandardFillets />
        </div>
         {/* Prod 10 start */}
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            HAND CARD STRIPPING FILLET
          </h6>
          <div className='py-4'>
            <img src={Prod10} alt='' />
          </div>
        </div>
        <div>
          <HandCard />
        </div>
      </div>
    </>
  )
}

export default FilletsTable
