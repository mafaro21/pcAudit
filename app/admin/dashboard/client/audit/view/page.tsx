import React from 'react'
import Link from 'next/link'

export default function ViewClientAudit() {
    return (
        <div>
            <div className='text-xl px-3 text-white'>
                Select a Client to Access Audits
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 mt-3">
                {[...Array(10)].map((_, i) => (
                    <Link href={'/admin/dashboard/client/audit/view'} key={i} className="p-4  bg-orange-700 hover:bg-orange-900 hover:cursor-pointer text-white text-center rounded-lg">
                        <div className="flex">
                            <p className="mt-1 ml-2 mb-2">Audit {i + 1}</p>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}
