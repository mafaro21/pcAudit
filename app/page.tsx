import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="p-3 px-6">
        {/* search form  */}
        <div className="flex">
          <form className="flex w-full">
            <input placeholder="Search" className="rounded-md w-5/6 p-1" />
            <button className="bg-blue-600 ml-2 w-24 p-1 rounded-md text-white">Search</button>
          </form>

          <button className="border-2 border-blue-300 w-96 text-left p-1 rounded-md ">Company Name Here</button>
        </div>
      </nav>

      <div className="w-full mt-5">
        <div className="mx-10 px-10 ">
          <p className="text-4xl text-blue-600">Assessment</p>
          <div className="text-sm mt-4">
            <p className="italic">blafdlkafhdlkhaflkdhsaflkdhsal khfdlksahf dlsahf lkdshaf lkdhafldhsflkdhaklfhdklsahfdklshaflkdhsaklfhdslka hlkdsah kldhsa flkdhsa lk</p>
            <p className="italic">blafdlkafhdlkhaflkdhsaflkdhsal lafjdkla jlkd jafld jakfldjak khfdlksahf dlsahf lkdshaf lkdhafldhsflkdhaklfhdklsahfdklshaflkdhsaklfhdslka hlkdsah kldhsa flkdhsa lk</p>
            <p className="italic">blafdlkafhdlkhaflkdhsaflkdhsal khfdlksahf  dlajfk ldja lkfjd lkajf dklsajfkldlsahf lkdshaf lkdhafldhsflkdhaklfhdklsahfdklshaflkdhsaklfhdslka hlkdsah kldhsa flkdhsa lk</p>
          </div>

          <div>
            <p className="text-2xl mt-8 text-blue-600">Question Categories</p>

            <table className="min-w-full border-collapse border-gray-300 text-sm" >
              <thead>
                <tr className="">
                  <th className="px-4 py-2 text-left">Domain</th>
                  <th className="px-4 py-2 text-left">Sub-Domain</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Questionnaire</th>
                  <th className="px-4 py-2 text-left">Questions</th>
                  <th className="px-4 py-2 text-left">Remediations</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Compliance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Policy and Process</td>
                  <td className="px-4 py-2">Information Security Policy</td>
                  <td className="px-4 py-2">Third Party Information Security Assessment (TIA)</td>
                  <td className="px-4 py-2"><button className="bg-blue-600 p-1 px-3 rounded-md text-white "><b>Open</b></button></td>
                  <td className="px-4 py-2">8/8</td>
                  <td className="px-4 py-2">0/0</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">Compliant (100%)</td>

                </tr>
                <tr className="">
                  <td className="px-4 py-2">Security Organization</td>
                  <td className="px-4 py-2">External Parties, Internal Organization, Risk Management</td>
                  <td className="px-4 py-2">Third Party Information Security Assessment (TIA)</td>
                  <td className="px-4 py-2"><button className="bg-blue-600 p-1 px-3 rounded-md text-white "><b>Open</b></button></td>
                  <td className="px-4 py-2">11/11</td>
                  <td className="px-4 py-2">0/0</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">Not Compliant (78%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Human Resource Security</td>
                  <td className="px-4 py-2">Onboarding, Prior to Employment, Termination & Change of employment</td>
                  <td className="px-4 py-2">Third Party Information Security Assessment (TIA)</td>
                  <td className="px-4 py-2"><button className="bg-blue-600 p-1 px-3 rounded-md text-white "><b>Open</b></button></td>
                  <td className="px-4 py-2">6/6</td>
                  <td className="px-4 py-2">0/0</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">Not Compliant (70%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
