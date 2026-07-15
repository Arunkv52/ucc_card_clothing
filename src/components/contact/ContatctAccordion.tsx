import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const ContatctAccordion = () => {
  return (
    <>
      <Accordion type='single' collapsible defaultValue='item-1'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-lg'>Branch </AccordionTrigger>
          <AccordionContent className='h-1/2'>
            <div>
              <ul>
                <li className='py-1 text-lg'> <span className='font-semibold'>Address : </span> 
                  S.F No: 362/4, Angammal Layout, Annanagar Extension,
                  Neelikonampalayam (P.O), Coimbatore - 641 033. India.
                </li>
                <li className='py-1 text-lg'><span className='font-semibold'>Sales : </span>+91 99524 08450 / +91 99524 20282</li>
                <li className='py-1 text-lg'><span className='font-semibold'>E-mail: </span>sales@unispincardclothing.com</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-lg'>Managing Director</AccordionTrigger>
          <AccordionContent className='h-1/2'>
            <div>
              <ul>
                <li className='py-1 text-lg'> <span className='font-semibold'>Name : </span> 
                  Mr. L.Nachimuthu,
                </li>
                <li className='py-1 text-lg'><span className='font-semibold'>Mobile : </span>+91 9952420280</li>
                <li className='py-1 text-lg'><span className='font-semibold'>E-mail: </span>nachi@unispincardclothing.com</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-lg'>General Manager Marketing</AccordionTrigger>
          <AccordionContent className='h-1/2'>
            <div>
              <ul>
                <li className='py-1 text-lg'> <span className='font-semibold'>Name : </span> 
                  Mr. K.Ravichandran
                </li>
                <li className='py-1 text-lg'><span className='font-semibold'>Mobile : </span>+91 9952420278</li>
                <li className='py-1 text-lg'><span className='font-semibold'>E-mail: </span>ravichandran@unispincardclothing.com</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </>
  )
}

export default ContatctAccordion
