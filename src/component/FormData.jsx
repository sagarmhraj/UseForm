import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormData() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [submittedData, setSubmittedData] = useState([]);

    // Function to handle form submission
    const onSubmit = (data) => {
        setSubmittedData((prevData) => [...prevData, data]); // Add new data to the table
    };

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">User Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            {...register('firstName', { required: 'First name is required' })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.firstName && (
                            <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Middle Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                        <input
                            type="text"
                            {...register('middleName', { required: 'Middle name is required' })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.middleName && (
                            <p className="text-sm text-red-600 mt-1">{errors.middleName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            {...register('lastName', { required: 'Last name is required' })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.lastName && (
                            <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Table to display submitted data */}
            {submittedData.length > 0 && (
                <div className="mt-8 max-w-4xl mx-auto">

                    {submittedData.length > 0 && (
                        <div className="mt-8 max-w-4xl mx-auto">
                            <h2 className="text-xl font-bold text-gray-700 mb-4">Submitted Data</h2>
                            <ol className="list-decimal pl-5 bg-white p-4 rounded-lg shadow-md">
                                {submittedData.map((data, index) => (
                                    <li key={index} className="mb-4">
                                        <div className="p-2 border-b border-gray-200">
                                            <p>
                                                <span className="font-semibold">First Name:</span> {data.firstName}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Middle Name:</span> {data.middleName}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Last Name:</span> {data.lastName}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}

export default FormData;
