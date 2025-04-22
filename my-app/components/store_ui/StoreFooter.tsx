import Image from 'next/image';
import Link from 'next/link'

export default function StoreFooter(){
  return (
    <footer className='flex w-[100%] bg-black py-2'>
        <div className='flex mx-5 my-2 lg:my-2 justify-between w-[100%]'>
            <div className='flex'>
                <div className='w-[2rem] h-[2rem] border-4 border-white rounded-xl mr-2 lg:w-[2.5rem] lg:h-[2.5rem] lg:border-8 lg:rounded-2xl'>
                    <Image src="/computer.png" alt="logo" className='bg-white w-sm h-sm' width={100} height={100}/>
                </div>
                <span className='text-2xl lg:text-3xl font-bold text-white'>ShopLite.com</span>
            </div>
            <div className='text-md lg:text-lg font-semibold my-1.5 lg:my-2 text-white '>
                <Link className='ml-5' href='/'>Home</Link>
                <Link className='ml-5' href='/store/refresh'>Refresh</Link>
                <Link className='ml-5' href='/store/login'>Login</Link>
                <Link className='ml-5' href='/store/register'>Register</Link>
            </div>
        </div>
    </footer>
  )
}