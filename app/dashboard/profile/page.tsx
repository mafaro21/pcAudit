"use client"
import Navbar from '@/components/navbar'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CustomButton from '@/components/customButton'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    contactName: string,
    companyName: string,
    companyContact: number,
}

export default function CompanyProfilePage() {

    const fields = [
        { id: 3, idName: 'companyName', name: 'Company Name', type: 'text', validation: { required: "Company Name is required", minLength: { value: 4, message: "Must be at least 4 characters" } } },
        { id: 1, idName: 'email', name: 'Company Email', type: 'email', validation: { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } } },
        { id: 2, idName: 'contactName', name: 'Contact Name', type: 'text', validation: { required: "Contact Name is required", minLength: { value: 6, message: "Must be at least 6 characters" } } },
        { id: 4, idName: 'companyContact', name: 'Company Contact', type: 'tel', validation: { required: "Company Contact is required", minLength: { value: 10, message: "Must be 10 digits" } } },
    ];

    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Navbar />

            <div className="w-full mt-24">
                <div className="mx-10 px-10">
                    <p className="sm:text-3xl md:text-3xl lg:text-4xl  text-blue-600">Company Profile</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2'>
                            {fields.map((item) => (
                                <div key={item.id} className="mt-2">
                                    <Label htmlFor="email">{item.name}</Label>
                                    <Input
                                        type={item.type}
                                        id={item.idName}
                                        placeholder={item.name}
                                        {...register(item.idName as keyof Inputs, item.validation)}
                                    />
                                    {errors[item.idName as keyof Inputs] && (
                                        <p className="text-red-500 text-sm">
                                            {errors[item.idName as keyof Inputs]?.message}
                                        </p>
                                    )}
                                </div>
                            ))}

                        </div>

                        <div className='flex justify-center mt-8'>
                            <CustomButton name='Save' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
