import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="min-h-screen dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center">
                <header className="h-full text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Stay Informed with the Latest News
                    </h1>
                    <p className="mb-6 text-xl">
                        Get the latest updates and stories from around the world.
                    </p>
                    <Link to="/general" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg">
                        Read More
                    </Link>
                </header>
            </div>
        </div>
    );
};

export default Home;
