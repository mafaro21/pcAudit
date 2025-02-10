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
          <p className="text-4xl text-blue-600">Third Party Assessment</p>
          <div className="text-sm mt-4">
            <p className="italic text-gray-500">This third party assessment on Third Party Information Security Assessment (TIA) has been sent to you by PrivacyCure, due for the 14 June 2024.</p>
            <p className="italic mt-4 text-gray-500">To begin, select a category and select the [Start] button to generate the corresponding questionnaire. Click the document link that appears to navigate to and answer the questionnaire.</p>
            <p className="italic mt-4 text-gray-500">All the assigned question categories must be completed before the [Submit] button becomes available to complete the assessment and send it back to PrivacyCure for review and approval</p>
          </div>

          <div>
            <p className="text-2xl mt-8 text-blue-600">Summary</p>

            <table className="min-w-full border-collapse border-gray-300 text-sm ml-9" >
              <tbody>
                <tr className="">
                  <td className="px-4 py-2 text-left italic">Assessment Types:</td>
                  <td className="px-4 py-2 text-left">Third Party Information Security Assessment (TIA)</td>
                  <td className="px-4 py-2 text-left"></td>
                  <td className="px-4 py-2 text-left"></td>
                  <td className="px-4 py-2 text-left"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 italic">Sent By:</td>
                  <td className="px-4 py-2">PrivacyCure</td>
                  <td className="px-4 py-2 italic">Reviewer(s):</td>
                  <td className="px-4 py-2">Kisalaya Kurariya, Nithin Venkatesh</td>
                  <td className="px-4 py-2 italic">Date Sent:</td>
                  <td className="px-4 py-2">7 Jun 2024</td>

                </tr>
                <tr className="">
                  <td className="px-4 py-2 italic">To:</td>
                  <td className="px-4 py-2">Rafferty Investments TA Providence</td>
                  <td className="px-4 py-2 italic">Recipient(s):</td>
                  <td className="px-4 py-2">Farai, lainah, Tanyaradwza, Tineyi Zimbudzana, Tinotenda Zinyeka</td>
                  <td className="px-4 py-2 italic">Date Due:</td>
                  <td className="px-4 py-2">14 Jun 2024</td>
                </tr>

                {/* <tr className="">
                  <td className="px-4 py-2 text-left italic">Risk Rating Score:</td>
                  <td className="px-4 py-2 text-left"></td>
                  <td className="px-4 py-2 text-left"></td>
                  <td className="px-4 py-2 text-left"></td>
                  <td className="px-4 py-2 text-left italic">Assessment Compliance:</td>
                  <td className="px-4 py-2 text-left">Compliant</td>
                  <td className="px-4 py-2 text-left italic">Compliance Value:</td>
                  <td className="px-4 py-2 text-left">92%</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between ml-16 mt-16 text-sm">
            <div className="italic">Risk Rating Score:</div>
            <div></div>

            <div className="flex ">
              <div className="italic">Assessment Compliance:</div>
              <div className="ml-5">Compliant</div>
            </div>

            <div className="flex ">
              <div className="italic">Compliance Value:</div>
              <div className="ml-5">92%</div>
            </div>
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
                  <td className="px-4 py-2 hover:bg-blue-100"><button className="bg-blue-600 hover:bg-blue-800 p-1 px-3 rounded-md text-white "><b>Open</b></button></td>
                  <td className="px-4 py-2">8/8</td>
                  <td className="px-4 py-2">0/0</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">Compliant (100%)</td>

                </tr>
                <tr className="">
                  <td className="px-4 py-2">Security Organization</td>
                  <td className="px-4 py-2">External Parties, Internal Organization, Risk Management</td>
                  <td className="px-4 py-2">Third Party Information Security Assessment (TIA)</td>
                  <td className="px-4 py-2 hover:bg-blue-100"><button className="bg-blue-600 hover:bg-blue-800 p-1 px-3 rounded-md text-white "><b>Open</b></button></td>
                  <td className="px-4 py-2">11/11</td>
                  <td className="px-4 py-2">0/0</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">Not Compliant (78%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Human Resource Security</td>
                  <td className="px-4 py-2">Onboarding, Prior to Employment, Termination & Change of employment</td>
                  <td className="px-4 py-2">Third Party Information Security Assessment (TIA)</td>
                  <td className="px-4 py-2 hover:bg-blue-100"><button className="bg-blue-600 hover:bg-blue-800 p-1 px-3 rounded-md text-white "><b>Open</b></button></td>
                  <td className="px-4 py-2">6/6</td>
                  <td className="px-4 py-2">0/0</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">Not Compliant (70%)</td>
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
  );
}
