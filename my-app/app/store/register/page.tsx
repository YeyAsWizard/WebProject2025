"use client"

import STYLE from '@/constants/style'
import { register } from 'module'
import React, { useActionState } from 'react'
import registerUser from '../_actions/registerUser'
import { redirect } from 'next/navigation'

export default function Register() {
    const [state, action] = useActionState(registerUser, {error:"", message:""})

    console.log("State:", state)

    if(state.error !== ""){
        return(
            <div>
                <h1>Register</h1>
                <p>{state.error}</p>
                <p>{state.message}</p>
            </div>
        )
    }
    if(state.message !== ""){
        redirect("/store")
    }
  return (
    <div>
        <h1>Register</h1>
        <div>
            <form action={action}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input className={STYLE} name="name" type="text" maxLength={20} required />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input className={STYLE} name="email" type="email" maxLength={20} required />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input className={STYLE} name="password" type="password" maxLength={20} required />
                </div>
                <div>
                    <button className={STYLE} type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}
