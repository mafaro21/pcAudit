"use client"
import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    contactName: string,
    companyName: string,
    companyContact: number,
}

export default function ClientAdd() {

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
        <div className="text-white">
            <div className='text-xl px-3 '>
                Add New Client
            </div>

            <div className='rounded-md p-3 w-1/2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {fields.map((item) => (
                            <div key={item.id} className="mt-2">
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
                    <Button className='mt-3 bg-orange-700 hover:bg-orange-900'>Add Client</Button>
                </form>
            </div>
        </div>
    )
}
