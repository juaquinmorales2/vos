'use client';
import { FC, useState } from 'react';

import Button from '@/components/ui/Button';
import { INPUT_FIELDS, RADIO_FIELDS } from '@/data';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props {}

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
};

const Index: FC<Props> = () => {
  const [form, setForm] = useState(defaultState);

  return (
    <div className="mx-auto max-w-[70vw] px-[10vw]">
      <h1 className="mb-[1.25vw] text-center text-[3.5vw] font-bold leading-[100%]">hello world</h1>
      <form className="flex h-full flex-col items-center">
        <div className="flex flex-wrap">
          {RADIO_FIELDS.map((item) => (
            <RadioGroup
              onValueChange={(value) => console.log(value)}
              key={item.title}
              className={`mb-[1.75vw] inline-block w-[calc(50%-16px)] ${item.classes}`}
            >
              <h4 className="mb-[0.2vw] max-w-[80%] text-[1.3vw] font-medium">{item.title}</h4>
              {item.radioArray.map((radio) => (
                <div key={radio.value} className="flex items-center space-x-2 font-[400]">
                  <RadioGroupItem value={radio.value} id={radio.name} />
                  <label htmlFor={radio.name} className="text-[1vw] leading-[1.75vw]">
                    {radio.name}
                  </label>
                </div>
              ))}
            </RadioGroup>
          ))}

          <div className="w-full space-y-6">
            {INPUT_FIELDS.map((item) => (
              <div key={item.label} className={`w-full ${item.classes}`}>
                <label htmlFor={item.label} className="">
                  {item.label}
                </label>
                <input
                  type="text"
                  id={item.label}
                  className="w-full rounded-sm border border-primary/80 bg-transparent px-3 py-2"
                />
              </div>
            ))}
            <div className={`w-full `}>
              <label htmlFor="message" className="">
                message
              </label>
              <textarea
                id="message"
                className="min-h-[10vw] w-full resize-none rounded-sm border border-primary/80 bg-transparent px-3 py-2"
              />
            </div>
          </div>

          <Button
            title="отправить"
            classes="py-[10px] px-12 text-[1.1vw] bg-bg-1/90 hover:bg-bg-1/80"
            btnClasses="p-[2px] capitalize self-start !mt-4"
          />
        </div>
      </form>
    </div>
  );
};
export default Index;
