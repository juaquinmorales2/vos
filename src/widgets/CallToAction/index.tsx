import { FC, lazy } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button'
const BookForm = lazy(() => import('@/widgets/BookForm'))

interface Props { };

const Index: FC<Props> = () => {
  const router = useRouter()

  const handleFormToggle = () => {
    router.push('/book')
  }

  return (
    <section className="bg-bg-1 w-full flex flex-col justify-center border-t border-gray-1 h-screen relative">
      <div className=' w-full mx-auto max-w-[60vw] text-center flex flex-col flex-1 items-center justify-center'>
        <h3 className='text-[4vw] font-medium'>НАПИШИТЕ НАМ</h3>
        <p className='text-[1.7vw] text-gray-300 font-normal mt-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur ullam veniam omnis dolores cum.</p>
        <Button onClick={handleFormToggle} title='ОСТАВИТЬ ЗАЯВКУ' classes='px-6 py-8 w-[30vw] min-h-[6vw] text-[1.25vw] bg-bg-1 hover:bg-bg-1/80' btnClasses='mt-4' />

      </div>

      <footer className='flex justify-between px-16 py-6 border-t border-t-gray-800'>
        <div>© 2023. Все права защищены</div>
        <ul className='flex space-x-10 text-base'>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </footer>

    </section>
  )
};
export default Index