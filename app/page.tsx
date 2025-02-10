import Image from 'next/image'
import Logo from '../public/PrivacyCureLogo.png'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default function Home() {
  return (
    <div className="grid place-items-center h-screen bg-cover bg-center " style={{ backgroundImage: "url('/sky.jpg')" }}>
      <div className="text-black bg-blue-200 bg-opacity-30 p-6 rounded-xl w-96  flex flex-col items-center justify-center shadow-xl">
        <Image src={Logo} alt='Logo' height={80} className='' />
        <h2 className="text-xl font-semibold mb-4">Sign in with email</h2>
        <p className="text-sm mb-6">Enter your credentials below to access audits</p>

        <Input
          type="email"
          placeholder="Email"
          className="w-full p-1 px-3 rounded-md text-black mb-4 bg-white"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full p-1 px-3 rounded-md text-black mb-4 bg-white"
        />

        <Button className='bg-blue-600 hover:bg-blue-900 text-white px-4 py-1 rounded-xl w-full mt-4 '>Sign In</Button>
      </div>
    </div>

  );
}
