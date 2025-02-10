import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />

            {/* AUDIT GRID  */}
            <div className="w-full mt-24">
                <div className="mx-10 px-10">
                    <p className="text-4xl text-blue-600">Welcome to PC Assessment Audit</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 mt-3">
                        {[...Array(10)].map((_, i) => (
                            <Link href={'/primary'} key={i} className="p-4  bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-white text-center rounded-lg">
                                <div className="flex">
                                    <DocumentTextIcon height={'30px'} />
                                    <p className="mt-1 ml-2 mb-2">Audit {i + 1}</p>
                                </div>
                                <p className="text-left px-2 py-1">Audit Details</p>
                                <p className="text-left px-2 py-1">Audit Details</p>
                                <p className="text-left px-2 py-1">Audit Details</p>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
}
