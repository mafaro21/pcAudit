"use client"
import Image from 'next/image'
import Logo from '../public/PrivacyCureLogo.png'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler, } from "react-hook-form";

type Inputs = {
  email: string
  password: string
}

export default function Home() {

  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()



  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="grid place-items-center h-screen bg-cover bg-center " style={{ backgroundImage: "url('/sky.jpg')" }}>
      <div className="text-black bg-blue-200 bg-opacity-30 p-6 rounded-xl w-96  flex flex-col items-center justify-center shadow-xl">
        <Image src={Logo} alt='Logo' height={80} className='' />
        <h2 className="text-xl font-semibold mb-4">Sign in with email</h2>
        <p className="text-sm mb-6">Enter your credentials below to access audits</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            className="w-80 p-1 px-3 rounded-md text-black mb-4 bg-white"
            required
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
              minLength: { value: 12, message: "Your email is too short" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mb-1">
              <b>{errors.email.message}</b>
            </p>
          )}

          <Input
            type="password"
            placeholder="Password"
            className="w-full p-1 px-3 rounded-md text-black mb-4 bg-white"
            required
            {...register('password', {
              required: "Password is required", // Validation for required field
              minLength: {
                value: 6,
                message: "Your password is less than 6 characters", // Validation for minimum length
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">
              <b>{errors.password.message}</b>
            </p>
          )}

          <Button type='submit' className='bg-blue-600 hover:bg-blue-900 text-white px-4 py-1 rounded-xl w-full mt-4 '>Sign In</Button>
        </form>
      </div>
    </div>

  );
}
