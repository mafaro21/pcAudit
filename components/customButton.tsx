import React from 'react'
import { Button } from '@/components/ui/button'

interface ButtonProps {
    name: string
}

export default function CustomButton({ name }: ButtonProps) {
    return (
        <Button className="bg-blue-600 hover:bg-blue-900 rounded-md text-white ">
            {name}
        </Button>
    )
}
