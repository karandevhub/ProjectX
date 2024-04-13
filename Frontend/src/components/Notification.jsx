import React from 'react';

const Templates = () => {
    return (
        <div className="w-full max-w-sm mx-auto my-2 overflow-hidden rounded shadow-sm">
            <div className="Notifcation">
            <div className="relative flex items-center justify-between px-2 py-2 font-bold text-white bg-red-600">
                <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="inline w-6 h-6 mr-2 opacity-75">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Alert</span>
                </div>
                <span className="relative">
                    <svg className="w-5 h-5 text-red-300 fill-current hover:text-white" role="button"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>
            <div className="p-3 bg-white border border-gray-300 rounded-b shadow-lg">
                <p className="font-bold text-gray-700">Anomaly: </p>
                <p className="mt-2 text-sm text-gray-500">Camera:</p>
                <p className="mt-2 text-sm text-gray-500">Location:</p>
                <div className="block w-full mt-3 text-right">
                    <button
                        className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-md hover:bg-gray-100 focus:outline-none">
                        Dismiss
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Templates;
