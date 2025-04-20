"use client"
import React from 'react'
import STYLE from '../constants/style'
import prisma from '@/utils/db'
import Link from 'next/link'


export default function GuitarItem({id, index, name, brand, price, deleteGuitar}:{
    id: string;
    index: number;
    name: string;
    brand: string;
    price: number;
    deleteGuitar: (id: string) => void;
}){
  return (
    <li key={id} className='border-2 border-gray-500 rounded-xl p-2 my-2 text-l'>
            {index+1}. {name}
            <div>Brand: {brand}</div>
            <div>Price: ${price}</div>
            <button className={`${STYLE} bg-red-300 hover:bg-red-200`} onClick={() => deleteGuitar(id)}>delete</button>
        <Link className={`${STYLE} bg-yellow-200 hover:bg-yellow-100`}
            href={{pathname: '/guitar_hw/edit',
            query: { id, name, brand, price },}}>
                Edit
            </Link>
    </li>
  )
}
