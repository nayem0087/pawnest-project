"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Form, Input, Label, Separator, TextField, FieldError } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import Link from "next/link";

const SignUpPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const {data, error} = await authClient.signUp.email({
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.image,
        confirmPassword: user.confirmPassword
    })
    
    if(data) {
        redirect('/')
    }
    if(error) {
        alert('added failed')
    }
   }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/'
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans text-black">
            <div className="w-full max-w-md mt-3">
                
                {/* Header Text */}
                <div className="text-center space-y-1">
                    <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Create Account</h2>
                    <p className="text-slate-500 text-sm font-medium">Start your adventure with PawNest</p>
                </div>

                {/* Form Card */}
                <Card className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl mt-3">
                    <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
                        
                        {/* Username Input */}
                        <TextField isRequired name="name" type="text" className="w-full">
                            <Label className="text-sm font-semibold text-slate-700 mb-1 ml-0.5">Name</Label>
                            <div className="w-full h-11 bg-slate-50 border border-slate-200 focus-within:border-slate-400 focus-within:bg-white transition-all duration-200 rounded-xl px-3.5 flex items-center">
                                <Input 
                                    placeholder="Enter your full name" 
                                    className="w-full h-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <FieldError className="text-xs text-red-500 mt-1 ml-0.5" />
                        </TextField>

                        {/* Image URL Input */}
                        <TextField isRequired name="imageUrl" type="url" className="w-full">
                            <Label className="text-sm font-semibold text-slate-700 mb-1 ml-0.5">Photo URL</Label>
                            <div className="w-full h-11 bg-slate-50 border border-slate-200 focus-within:border-slate-400 focus-within:bg-white transition-all duration-200 rounded-xl px-3.5 flex items-center">
                                <Input 
                                    placeholder="Enter your photo URL" 
                                    className="w-full h-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <FieldError className="text-xs text-red-500 mt-1 ml-0.5" />
                        </TextField>

                        {/* Email Input */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="w-full"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-sm font-semibold text-slate-700 mb-1 ml-0.5">Email</Label>
                            <div className="w-full h-11 bg-slate-50 border border-slate-200 focus-within:border-slate-400 focus-within:bg-white transition-all duration-200 rounded-xl px-3.5 flex items-center">
                                <Input 
                                    placeholder="Enter your email" 
                                    className="w-full h-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <FieldError className="text-xs text-red-500 mt-1 ml-0.5" />
                        </TextField>

                        {/* Password Input */}
                        <TextField
                            isRequired
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="w-full"
                            validate={(value) => {
                                // ⚠️ Requirement: At least 6 characters
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }
                                // ⚠️ Requirement: One uppercase letter
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                // ⚠️ Requirement: One lowercase letter
                                if (!/[a-z]/.test(value)) {
                                    return "Password must contain at least one lowercase letter";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-sm font-semibold text-slate-700 mb-1 ml-0.5">Password</Label>
                            <div className="w-full h-11 bg-slate-50 border border-slate-200 focus-within:border-slate-400 focus-within:bg-white transition-all duration-200 rounded-xl px-3.5 flex items-center justify-between">
                                <Input 
                                    placeholder="Enter your password" 
                                    className="w-full h-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors ml-2 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <FieldError className="text-xs text-red-500 mt-1 ml-0.5" />
                        </TextField>

                        {/* ⚠️ Added Confirm Password Input (As per Requirement) */}
                        <TextField isRequired name="confirmPassword" type={showConfirmPassword ? "text" : "password"} className="w-full">
                            <Label className="text-sm font-semibold text-slate-700 mb-1 ml-0.5">Confirm Password</Label>
                            <div className="w-full h-11 bg-slate-50 border border-slate-200 focus-within:border-slate-400 focus-within:bg-white transition-all duration-200 rounded-xl px-3.5 flex items-center justify-between">
                                <Input 
                                    placeholder="Confirm your password" 
                                    className="w-full h-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors ml-2 focus:outline-none"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <FieldError className="text-xs text-red-500 mt-1 ml-0.5" />
                        </TextField>

                        {/* Form Note */}
                        <p className="text-xs text-slate-400 font-normal -mt-2 ml-0.5">
                            Must be at least 6 characters with 1 uppercase and 1 lowercase letter.
                        </p>

                        {/* Submit Button */}
                        <Button 
                            className="w-full h-11 text-sm font-bold rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-colors mt-2" 
                            type="submit"
                        >
                            Create Account
                        </Button>
                    </Form>

                    {/* Divider Separator */}
                    <div className="flex justify-center items-center gap-3 pb-2 mt-4">
                        <Separator className="flex-1 bg-slate-200" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                            Or sign up with
                        </span>
                        <Separator className="flex-1 bg-slate-200" />
                    </div>

                    {/* Google OAuth Button */}
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="bordered"
                        className="w-full h-11 text-sm font-semibold rounded-xl border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-slate-700 mb-4"
                    >
                        <FcGoogle className="text-lg" /> Sign in with Google
                    </Button>

                    {/* Footer Login Link */}
                    <div className="text-center">
                        <p className="text-sm text-slate-600">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-cyan-600 font-semibold hover:underline underline-offset-4 transition-all"
                            >
                                Login
                            </Link>
                        </p>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default SignUpPage;