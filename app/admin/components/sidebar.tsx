"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import Logo from '../../../public/PrivacyCureLogoWhite.png'
import { usePathname } from 'next/navigation'

export default function AdminSidebar() {
    const data = {
        navMain: [
            {
                title: "Getting Started",
                url: "#",
                items: [
                    {
                        title: "Installation",
                        url: "#",
                    },
                    {
                        title: "Project Structure",
                        url: "#",
                    },
                ],
            },
            {
                title: "Client Management",
                url: "#",
                items: [
                    {
                        title: "Add Client",
                        url: "/admin/dashboard/client/add",
                    },
                    {
                        title: "Edit Client Details",
                        url: "/admin/dashboard/client/edit",
                    },
                    {
                        title: "Client Audits",
                        url: "/admin/dashboard/client/audit",
                    },
                ],
            },
            {
                title: "User Management",
                url: "#",
                items: [
                    {
                        title: "Add Admin",
                        url: "#",
                    },
                    {
                        title: "Data Fetching",
                        url: "#",
                    },
                    {
                        title: "Rendering",
                        url: "#",
                    },
                ],
            },
        ],
    }

    const pathname = usePathname()


    return (
        <Sidebar >
            <SidebarHeader className='bg-gray-800'>
                <Link href={'/admin/dashboard'}>
                    <Image src={Logo} alt='Logo' height={54} className='pl-2 ' />
                </Link>
            </SidebarHeader>
            <SidebarContent className='bg-gray-800 text-white'>
                {/* We create a SidebarGroup for each parent. */}
                {data.navMain.map((item) => (

                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel className='text-gray-500'>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu >
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={pathname === item.url ? true : false} className='hover:bg-orange-900 hover:text-white'>
                                            <a href={item.url}>{item.title}</a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter className='bg-gray-800 hover:bg-gray-900 hover:cursor-pointer border-t'>
                <div className='flex p-2 '>
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block size-9 mt-1 rounded-full"
                    />
                    <div>
                        <div className='ml-3 text-white text-sm'>Elongating</div>
                        <div className='ml-3 text-white text-sm'>Muskrat</div>
                    </div>

                </div>

            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
