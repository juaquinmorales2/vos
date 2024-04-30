'use client'
import { FC, useState } from 'react';

import Button from '@/components/ui/Button'
import { INPUT_FIELDS, RADIO_FIELDS } from '@/data';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props { };

const defaultState = {
  service: null,
  budget: null,
  pages: null,
  quickness: null,

  first: '',
  last: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',

}

const Index: FC<Props> = () => {
  const [form, setForm] = useState(defaultState)

  return (
    <div className="max-w-[70vw] px-[10vw] mx-auto">
        <h1 className='text-center font-bold text-[3.5vw] mb-[1.25vw] leading-[100%]'>hello world</h1>
        <form className="h-full flex flex-col items-center">
          <div className='flex flex-wrap'>

            {RADIO_FIELDS.map(item => (
              <RadioGroup onValueChange={(value) => console.log(value)} key={item.title} className={`inline-block w-[calc(50%-16px)] mb-[1.75vw] ${item.classes}`}>
                <h4 className='text-[1.3vw] font-semibold mb-[0.2vw] max-w-[80%]'>{item.title}</h4>
                {item.radioArray.map(radio => (
                  <div key={radio.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={radio.value} id={radio.name} />
                    <label htmlFor={radio.name} className='text-[1vw] leading-[1.75vw]'>{radio.name}</label>
                  </div>
                ))}
              </RadioGroup>
            ))}

            <div className='w-full space-y-6'>
              {INPUT_FIELDS.map((item) => (
                <div key={item.label} className={`w-full ${item.classes}`}>
                  <label htmlFor={item.label} className=''>{item.label}</label>
                  <input type="text" id={item.label} className='w-full bg-transparent border border-primary/80 rounded-sm px-3 py-2' />
                </div>
              ))}
              <div className={`w-full `}>
                <label htmlFor="message" className=''>message</label>
                <textarea id="message" className="w-full bg-transparent border border-primary/80 rounded-sm px-3 py-2 min-h-[10vw] resize-none" />
              </div>
            </div>

          <Button title='отправить' classes="py-[10px] px-12 text-[1.1vw] bg-bg-1/90 hover:bg-bg-1/80" btnClasses='p-[2px] capitalize self-start !mt-4' />
          </div>
        </form>
    </div>

  )
};
export default Index