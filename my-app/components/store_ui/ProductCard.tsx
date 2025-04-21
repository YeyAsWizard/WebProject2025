import Image from 'next/image';

export default function ProductCard({id, index, title, price, stock, sale, image}:{
    id: number,
    index: number,
    title: string,
    price: number,
    stock: number,
    sale: number,
    image: string,
}){
  return (
    <li key={id} className='flex flex-col justify-between border-2 border-gray-500 rounded-xl p-2 my-2'>
        <div className='flex justify-self-center max-h-[7rem] mx-auto my-auto max-w-[7rem] lg:max-w-[7rem] lg:max-h-[7rem]'>
            <Image src={image} alt="product_img" className='justify-self-center w-2xl' width={100} height={100}/>
        </div>
        <div>
            <p className='text-md lg:text-xl'>{title}</p>
            <hr />
            {sale>0?
            <p className='my-1'>
                <span className='text-xl lg:text-3xl font-[5px] mr-2'>${(price-((sale/100)*price))}</span>
                <span className='text-xs font-[5px] mr-2 text-red-500'>%{sale}</span>
                <span className='text-xs line-through font-[5px] text-red-500'>${price}</span>
            </p>
                :
            <p className='my-1'>
                <span className='text-xl lg:3xl font-[5px]'>${price}</span>
            </p>}
            <hr />
            <span className='text-sm lg:text-md'>Stock: {stock}</span>
        </div>
    </li>
  )
}