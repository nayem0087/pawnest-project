import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center px-6">
            <div className="text-center">
                <p className="text-7xl mb-6">🐾</p>
                <h1 className="text-6xl font-extrabold text-orange-400 mb-2">404</h1>
                <h2 className="text-2xl font-bold text-white mb-3">Pet Not Found</h2>
                <p className="text-gray-500 text-sm mb-8">
                    The pet you are looking for does not exist or may have been adopted.
                </p>
                <Link
                    href="/allPets"
                    className="inline-block px-6 py-3 bg-orange-400 hover:bg-orange-500 text-gray-950 font-semibold rounded-lg transition-colors"
                >
                    Browse All Pets
                </Link>
            </div>
        </div>
    );
};

export default NotFound;