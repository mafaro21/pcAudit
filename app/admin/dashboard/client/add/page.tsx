import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ClientAdd() {
    return (
        <div className="text-white">
            <div className='text-xl px-3 '>
                Add New Client
            </div>

            <div className='rounded-md p-3 w-1/2 mt-4'>
                <form >
                    <Input />
                    <Input className='mt-3' />
                    <Input className='mt-3' />
                    <Input className='mt-3' />
                    <Button className='mt-3 bg-orange-700 hover:bg-orange-900'>Add Client</Button>
                </form>
            </div>
        </div>
    )
}
