import React from 'react';
import { Link } from 'react-router';

const EmptyCard = () => {
    return (
        <div className="text-center mt-20">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">You have no booked any appointment yet!</h2>
            <p className="text-sm p-2 text-gray-500">
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <Link to="/">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-4">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default EmptyCard;