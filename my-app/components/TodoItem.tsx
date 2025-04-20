"use client"
import React from 'react'
import STYLE from '../constants/style'
import prisma from '@/utils/db'
import Link from 'next/link'


export default function TodoItem({id, index, title, done, deleteTask, toggleTask}:{
    id: string,
    index: number,
    title: string,
    done: boolean,
    deleteTask: (id: string) => void,
    toggleTask: (id: string, done:boolean) => void,
}){
  return (
    <li key={id} className='border-2 border-gray-500 rounded-xl p-2 my-2 text-l'>
            {index+1}. {title} {done? "✅": "❌"}
            <button className={`${STYLE}`} onClick={() => deleteTask(id)}>x</button>
            <input id={id}
                type="checkbox"
                className="cursor-pointer peer"
                defaultChecked={done}
                onChange={e => toggleTask(id, e.target.checked)}
            />
        <Link className={STYLE}
            href={{pathname: '/simple_db/edit',
            query: { id, title },}}>
                Edit
            </Link>
    </li>
  )
}
