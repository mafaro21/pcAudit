import Image from "next/image";
import Link from "next/link";
import Logo from '../public/PrivacyCureLogo.png'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
    return (
        <nav className="p-2 px-6 bg-blue-100 fixed min-w-full" style={{ top: 0 }}>
            <div className="flex justify-between ">
                <Link href={'/dashboard'}>
                    <Image src={Logo} alt="Logo" height={30} width={70} />
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="bg-blue-100 mt-2">
                            Company Name Here
                            <ChevronDownIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link href={'/dashboard/profile'} >
                                <DropdownMenuItem className="cursor-pointer">
                                    Profile
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
