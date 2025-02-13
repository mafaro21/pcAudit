"use client"
import React from 'react'
import Image from 'next/image'
// import Logo from '../public/PrivacyCureLogo.png'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler, } from "react-hook-form";

type Inputs = {
    username: string
    password: string
}


export default function adminLogin() {
    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()



    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div className="grid place-items-center h-screen bg-zinc-800">
            <div className="text-black bg-slate-600 p-6 rounded-xl w-96  flex flex-col items-center justify-center shadow-xl">
                {/* <Image src={Logo} alt='Logo' height={80} className='' /> */}
                <h2 className="text-xl font-semibold mb-4 text-white">Admin Login</h2>
                <p className="text-sm mb-6 text-white">Enter your credentials below to access the admin portal</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        placeholder="Username"
                        className="w-full p-1 px-3 rounded-md text-black mb-4 bg-white"
                        required
                        {...register("username", {
                            required: "Username is required",
                            minLength: { value: 5, message: "Your username is too short" },
                        })}
                    />
                    {errors.username && (
                        <p className="text-red-500 mb-1">
                            <b>{errors.username.message}</b>
                        </p>
                    )}

                    <Input
                        type="password"
                        placeholder="Password"
                        className="w-full p-1 px-3 rounded-md text-black mb-4 bg-white"
                        required
                        {...register('password', {
                            required: "Password is required", // Validation for required field
                            minLength: {
                                value: 6,
                                message: "Your password is less than 6 characters", // Validation for minimum length
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500">
                            <b>{errors.password.message}</b>
                        </p>
                    )}

                    <Button type='submit' className='bg-orange-700 hover:bg-orange-900 text-white px-4 py-1 rounded-xl w-full mt-4 '>Sign In</Button>
                </form>
            </div>
        </div>

    );
}
