import React, { useState } from 'react';
import foto from '../assets/Frame 3 (1).png';

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <body className="custom-d-green p-16">
     <main className="">
        <div className="container flex justify-center">
            <div className="left w-2/5 hidden lg:block">
                <img className="w-full" src={foto} alt="" />
            </div>
            <div className="right text-center w-3/5 bg-white px-8 pt-12">
                <h1 className="font-medium custom-hijau text-3xl">Sign Up for Account</h1>
                <p className="custom-hijau my-8">Let’s get you all set up so you can start creating your
                    first onboarding experience.
                </p>
                <div >
                    <div className="block lg:flex w-full text-left custom-hijau font-medium gap-5">
                        <div className="w-full">
                            <div className="mb-3">
                                <label for="first">First Name</label>
                            </div>
                            <input type="text"
                                className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3"
                                id="first" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                        </div>
                        <div className="w-full">
                            <div className="mb-3">
                                <label for="last">Last Name</label>
                            </div>
                            
                            <input type="text"
                                className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3"
                                id="last" value={lastName} onChange={(event) => setLastName(event.target.value)}/>

                        </div>
                    </div>
                    <div className="w-full text-left custom-hijau font-medium">
                        <div className="mb-3 mt-5"><label for="birth">Birth of Year</label></div>
                        <input type="date"
                            className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3" id="birth" />
                    </div>
                    <div className="w-full text-left custom-hijau font-medium">
                        <div className="mb-3 mt-5"><label for="email">Email</label></div>
                        <input type="email"
                            className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="w-full text-left custom-hijau font-medium">
                        <div className="mb-3 mt-5"><label for="password">Password</label></div>
                        <input type="password"
                            className="border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none w-full h-12 px-3" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center">
                    <input id="link-checkbox" type="checkbox" className="accent-green-500" value={accept} onChange={(event) => setAccept(event.target.value)} />
                    <label for="link-checkbox"
                        className="ml-2 text-sm font-medium text-gray-400">I accept all <span className="text-green-400">Term & Conditions</span></label>
                    </div>
                </div>
                <div className="flex gap-7 mt-4 px-12 justify-center">
                    
                    <button className="rounded-md border border-green-500 hover:border-green-600 outline-none text-green-500 px-16 py-2 lg-125">Sign In</button>
                    <button className="rounded-md bg-green-500 text-white px-16 py-2 hover:bg-green-600" onSubmit={handleSubmit}>Sign Up</button>
                </div>
            
            </div>
        </div>
    </main>
</body>
  )
}

export default SignUp