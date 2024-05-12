'use client';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

import { supabase } from '@/lib/supabase';

import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

//components
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props {}

const Index: FC<Props> = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);

  const { push } = useRouter()

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit form', form)
    if (form._budget && form._pages && form._quickness && form._service) {
      //better use zod fornm valudation
    }
    const { data, error, status, count, statusText } = await supabase.from('agncy_requests').insert(form)
    if (status === 201) {
      // perform modal window with redirect
      //  add snackbar as form validation
    }
  }
  return (
    <div className="mx-auto max-w-[70vw] px-[10vw]">
      <div className='relative'>
        <button className=' p-[0.5vw] box-content rounded-full bg-stone-800 hover:bg-stone-800 group absolute z-10 top-[25%] left-0' onClick={() => push('/')}>
          <svg focusable="false" className='w-[1.5vw] h-[1.5vw] fill-stone-400 group-hover:fill-stone-300 transition' viewBox="0 0 24 24" data-testid="ArrowBackOutlinedIcon" aria-label="fontSize medium"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path></svg>
        </button>
        <h1 className="mb-[1.75vw] text-center text-[3.5vw] font-bold leading-[100%]">Оставить заявку</h1>
      </div>
      <form className="flex h-full flex-col items-center" onSubmit={submit}>
        <div className="flex flex-wrap">
          {RADIO_FIELDS.map((item) => (
            <RadioGroup
              onValueChange={(value) => setForm(prev => ({ ...prev, [item.formKey]: value }))}
              key={item.title}
              className={`mb-[1.75vw] inline-block w-[calc(50%-16px)] ${item.classes}`}
              required={true}
            >
              <h4 className="mb-[0.2vw] max-w-[80%] text-[1.3vw] font-medium">{item.title}</h4>
              {item.radioArray.map((radio) => (
                <div key={radio.value} className="flex items-center space-x-[0.65vw] font-[400]">
                  <RadioGroupItem value={radio.value} id={radio.name} required={true} />
                  <label htmlFor={radio.name} className="text-[1vw] leading-[1.75vw]">
                    {radio.name}
                  </label>
                </div>
              ))}
            </RadioGroup>
          ))}

          <div className="w-full space-y-6 text-[1.1vw]">
            {INPUT_FIELDS.map((item) => (
              <div key={item.label} className={`w-full ${item.classes}`}>
                <label htmlFor={item.label} className="h-[4vw] ">
                  {item.label}
                </label>
                <input
                  onChange={({ target: { name, value } }) => setForm(prev => ({ ...prev, [name]: value }))}
                  type={item.type || 'text'}
                  name={item.name}
                  id={item.label}
                  className="w-full rounded-sm border border-primary/80 bg-transparent px-[1vw] py-[0.8vw] h-[3vw] appearance-none"
                  required={item.required}
                />
              </div>
            ))}
            <div className="w-full">
              <label className="requiredd" htmlFor="message" >
                Расскажите о вашем проекте
              </label>
              <textarea
                minLength={20}
                maxLength={500}
                onChange={({ target: { name, value } }) => setForm(prev => ({ ...prev, [name]: value }))}
                id="message"
                name="message"
                className="min-h-[10vw] w-full resize-none rounded-sm border border-primary/80 bg-transparent px-3 py-2"
              />
            </div>
          </div>

          <Button
            title="отправить"
            type="submit"
            classes="py-[10px] px-12 text-[1.1vw] bg-bg-1/90 hover:bg-bg-1/80"
            btnClasses="p-[2px] capitalize self-start !mt-4"
          />
        </div>
      </form>
    </div>
  );
};
export default Index;
