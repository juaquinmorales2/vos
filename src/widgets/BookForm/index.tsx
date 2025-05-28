'use client';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

// Tus credenciales de EmailJS
const SERVICE_ID  = 'service_02102004';
const TEMPLATE_ID = 'template_5q75jgb';
const PUBLIC_KEY  = 'eKNCQD46NMHntghcz';

const index: FC = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
  const formRef = useRef<HTMLFormElement>(null);
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          alert('¡Correo enviado correctamente!');
          setForm(BOOK_FORM_DEFAULT_STATE);
          push('/');
        },
        (error) => {
          console.error('Error enviando correo:', error);
          alert('Ocurrió un error. Intenta de nuevo.');
        }
      );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative mb-8">
        <button
          onClick={() => push('/')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200"
        >{/* SVG atrás */}</button>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          Hacer una solicitud
        </h1>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Radio fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RADIO_FIELDS.map((item) => (
            <div key={item.formKey}>
              <RadioGroup
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, [item.formKey]: value }))
                }
                required
              >
                <h4 className="mb-2 text-base sm:text-lg font-medium">
                  {item.title}
                </h4>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                  {item.radioArray.map((radio) => (
                    <label
                      key={radio.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={radio.value} id={radio.name} />
                      <span className="text-sm sm:text-base">
                        {radio.name}
                      </span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
              {/* espejo para EmailJS */}
              <input
                type="hidden"
                name={item.formKey}
                value={form[item.formKey] || ''}
              />
            </div>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INPUT_FIELDS.map((field) => (
            <div key={field.name} className="w-full">
              <label
                htmlFor={field.name}
                className="block mb-1 text-sm sm:text-base font-medium"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type || 'text'}
                required={field.required}
                value={form[field.name]}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, [field.name]: e.target.value }))
                }
                className="w-full h-10 sm:h-12 px-3 border rounded-md focus:outline-none"
              />
            </div>
          ))}

          {/* Mensaje */}
          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block mb-1 text-sm sm:text-base font-medium"
            >
              Cuéntame sobre tu proyecto
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              maxLength={500}
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full min-h-[150px] px-3 py-2 border rounded-md focus:outline-none"
            />
          </div>
        </div>

        <div>
          <Button
            type="submit"
            title="Enviar"
            classes="px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg bg-bg-1/90 hover:bg-bg-1/80"
            btnClasses="capitalize"
          />
        </div>
      </form>
    </div>
  );
};

export default index;