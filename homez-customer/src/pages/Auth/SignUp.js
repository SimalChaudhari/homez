import React, { useState } from 'react';
import { TbEyeClosed } from 'react-icons/tb';
import { VscEye } from 'react-icons/vsc';

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handle confirm password visibility toggle
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    // Validate form fields
    const validateForm = () => {
        let formErrors = { email: '', password: '', confirmPassword: '', termsAccepted: '' };
        let valid = true;

        if (!formData.email) {
            formErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        if (!formData.password) {
            formErrors.password = 'Password is required';
            valid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        if (!formData.termsAccepted) {
            formErrors.termsAccepted = 'You must accept the terms and conditions';
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log(formData); // You can add the logic for submitting the form data
        }
    };

    return (
        <div className="flex flex-col justify-center items-center font-sans sm:h-screen p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white">
                <div className="text-center mb-12">
                    <a href="javascript:void(0)">
                        <img
                            src="https://readymadeui.com/readymadeui.svg"
                            alt="logo"
                            className="w-40 inline-block"
                        />
                    </a>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter email"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {passwordVisible ? <VscEye className='text-2xl' /> : <TbEyeClosed className='text-2xl' /> }
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <div className="relative">
                                <input
                                    name="confirmPassword"
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {confirmPasswordVisible ? <VscEye className='text-2xl' /> : <TbEyeClosed className='text-2xl' /> }
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                        </div>

                        {/* Terms and Conditions Checkbox */}
                        <div className="flex items-center">
                            <input
                                id="termsAccepted"
                                name="termsAccepted"
                                type="checkbox"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="termsAccepted" className="text-gray-800 ml-3 block text-sm">
                                I accept the{' '}
                                <a
                                    href="javascript:void(0);"
                                    className="text-blue-600 font-semibold hover:underline ml-1"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                            {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-12">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        >
                            Create an account
                        </button>
                    </div>
                </form>

                {/* Link to SignIn */}
                <p className="text-gray-800 text-sm mt-6 text-center">
                    Already have an account?{' '}
                    <a href="/signin" className="text-blue-600 font-semibold hover:underline ml-1">
                        Sign In here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;