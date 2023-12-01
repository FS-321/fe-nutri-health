import React, { useState } from 'react';
import foto from '../assets/Frame 2.png';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <body className="custom-d-green p-16">
      <main className="">
        <div className="container flex">
            <div className="left w-2/5">
                <img className="w-full" src={foto} alt="" />
            </div>
            <div className="right text-center w-3/5 bg-white px-8 pt-12">
                <h1 className="font-medium custom-hijau text-3xl">Sign In for Account</h1>
                <p className="custom-hijau mt-2">Sign in to your account so you can continue building
                    onboarding experience.
                </p>
                <div className="gap-x-24 mt-12">
                    <div className="w-full text-left custom-hijau font-medium">
                        <div className="mb-3"><label for="">Email</label></div>
                        
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                            className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3" />
                    </div>
                    <div className="w-full text-left custom-hijau font-medium">
                        <div className="mb-3 mt-5"><label for>Password</label></div>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}  
                            className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center">
                    <input id="link-checkbox" type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} className="accent-green-500" />
                    <label for="link-checkbox"
                        className="ml-2 text-sm font-medium custom-hijau">Remember me</label>
                    </div>
                    <div>
                        <label for=" " className="ml-2 text-sm font-medium custom-hijau">Forgot Password</label>
                    </div>
                </div>
                <div className="flex gap-4 mt-4 justify-around px-12">
                    
                    <button className="rounded-md bg-green-500 text-white px-16 py-2 hover:bg-green-600" onSubmit={handleSubmit}>Sign In</button>
                    <button className="rounded-md border border-green-600 hover:border-green-500 outline-none text-green-500 px-16 py-2">Sign Up</button>
                </div>
                <div className="mt-10 justify-around px-12">
                    <p className="text-gray-400 mt-5">Or sign in using</p>
                    
                    <div className="flex mt-4 justify-center gap-5">
                        <div className="border-2 p-1 rounded-lg border-gray-300 outline-none">
                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="left-0 w-7" alt="google logo" />
                        </div>
                        <div className="facebook border-2 p-1 rounded-lg border-gray-300 outline-none">
                            <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="left-0 w-7" alt="Facebook logo" />
                        </div>
                        <div className="twitter border-2 p-1 rounded-lg border-gray-300 outline-none w-10">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Twitter_new.svg/640px-Twitter_new.svg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
  )
}

export default SignIn