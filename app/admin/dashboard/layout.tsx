
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import AdminSidebar from "../components/sidebar"

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider className='bg-gray-800'>
            <AdminSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-gray-900">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger className="text-white" />
                        <Separator orientation="vertical" className="mr-2 h-4 bg-white" />

                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-gray-900">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>

    )
}
