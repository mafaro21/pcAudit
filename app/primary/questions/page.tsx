"use client"
import Navbar from '@/components/navbar'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    comment1: string
    comment2: string
    comment3: string
    file1: FileList
    file2: FileList
    file3: FileList
}

export default function Questions() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const formData = new FormData()

        // Append text fields
        formData.append("comment1", data.comment1)
        formData.append("comment2", data.comment2)
        formData.append("comment3", data.comment3)

        // Append files if they exist
        if (data.file1?.length > 0) {
            formData.append("file1", data.file1[0]) // Only first file
        }
        if (data.file2?.length > 0) {
            formData.append("file2", data.file2[0])
        }
        if (data.file3?.length > 0) {
            formData.append("file3", data.file3[0])
        }

        // Simulate API call
        console.log("Form Data Submitted", formData)

        // Use fetch or axios to send the formData to the backend
        // fetch('/api/upload', {
        //     method: 'POST',
        //     body: formData
        // })
    }

    return (
        <div>
            <Navbar />
            <div className="w-full mt-24 ">
                <div className="mx-2 px-10 ">
                    <p className="text-4xl text-blue-600">Primary Assessment</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-2xl mt-8 text-blue-600">Questions</p>

                        <table className="min-w-full border-collapse border-gray-300 text-sm">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Question</th>
                                    <th className="px-4 py-2 text-left">Answer</th>
                                    <th className="px-4 py-2 text-left">Comment</th>
                                    <th className="px-4 py-2 text-left">Evidence</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map((num) => (
                                    <tr key={num}>
                                        <td className="px-4 py-2 w-2/5">
                                            {num === 1 ? "Does your organization have a documented information security policy which is approved by management?"
                                                : num === 2 ? "Is the information security policy document communicated to employees and contractors?"
                                                    : "Do you have a disciplinary policy for security violations?"}
                                        </td>
                                        <td className="py-2 w-1/6">
                                            <div className="flex space-x-4">
                                                {["Yes", "No", "N/A"].map((option) => (
                                                    <label key={option} className="flex items-center space-x-2">
                                                        <input type="radio" value={option} {...register(`answer${num}` as any)} />
                                                        <span>{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-1 py-2 w-1/3">
                                            <Input placeholder='add your comments here' className='rounded-sm' {...register(`comment${num}` as any)} />
                                        </td>
                                        <td className="py-2">
                                            <Input type='file' {...register(`file${num}` as any)} className='w-96' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='flex justify-end mt-6'>
                            <button type='submit' className="bg-blue-600 p-1 px-3 rounded-md text-white"><b>Submit</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
