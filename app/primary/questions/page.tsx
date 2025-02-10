import Navbar from '@/components/navbar'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Questions() {
    return (
        <div>
            <Navbar />

            <div className="w-full mt-24 ">
                <div className="mx-2 px-10 ">
                    <p className="text-4xl text-blue-600">Primary Assessment</p>

                    <div>
                        <p className="text-2xl mt-8 text-blue-600">Details</p>

                        <table className="min-w-full border-collapse border-gray-300 text-sm">
                            <tbody>
                                <tr className="">
                                    <td className="px-4 py-2 text-left italic">Assessment Types:</td>
                                    <td className="px-4 py-2 text-left">Primary Information Security Assessment (TIA)</td>
                                    <td className="px-4 py-2 text-left">Date Due:</td>
                                    <td className="px-4 py-2 text-left">14 Jun 2024</td>
                                    <td className="px-4 py-2 text-left"></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 italic">Category:</td>
                                    <td className="px-4 py-2">Category Type</td>
                                    <td className="px-4 py-2 italic">Description:</td>
                                    <td className="px-4 py-2">Primary Information Security Assessment (TIA)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <p className="text-2xl mt-8 text-blue-600">Questions</p>

                        <table className="min-w-full border-collapse border-gray-300 text-sm" >
                            <thead>
                                <tr className="">
                                    <th className="px-4 py-2 text-left">Question</th>
                                    <th className="px-4 py-2 text-left">Answer</th>
                                    <th className="px-4 py-2 text-left">Comment</th>
                                    <th className="px-4 py-2 text-left">Evidence</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 w-2/5">Does your organization have a documented information security policy which is approved by the management?</td>
                                    <td className="px-4 py-2">
                                        <div className="flex space-x-4">
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="Yes" />
                                                <span>Yes</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="No" />
                                                <span>No</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="N/A" />
                                                <span>N/A</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-1 py-2 w-1/3"><Input placeholder='add your comments here' className='rounded-sm ' /></td>

                                    <td className=" py-2 "><Input type='file' multiple placeholder='add your file here' className='w-96' /></td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-2">Is the information security policy document communicated and published to your employees, contractors and other relevant external parties?</td>
                                    <td className="px-4 py-2">
                                        <div className="flex space-x-4">
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="Yes" />
                                                <span>Yes</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="No" />
                                                <span>No</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="N/A" />
                                                <span>N/A</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-1 py-2 w-1/3"><Input placeholder='add your comments here' className='rounded-sm ' /></td>

                                    <td className="py-2"><Input type='file' multiple placeholder='add your file here' /></td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-2">Do you have a formal established disciplinary or sanction policy for your employees who have violated security policies and controls?</td>
                                    <td className="px-4 py-2">
                                        <div className="flex space-x-4">
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="Yes" />
                                                <span>Yes</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="No" />
                                                <span>No</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="options" value="N/A" />
                                                <span>N/A</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-1 py-2 w-1/3"><Input placeholder='add your comments here' className='rounded-sm ' /></td>

                                    <td className=" py-2 "><Input type='file' multiple placeholder='add your file here' /></td>
                                </tr>

                            </tbody>

                        </table>
                        <div className='flex justify-end mt-6'>
                            <button className="bg-blue-600 p-1 px-3 rounded-md text-white "><b>Submit</b></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
