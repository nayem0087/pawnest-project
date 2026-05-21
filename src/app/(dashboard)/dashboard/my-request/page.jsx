'use client';

export default function MyRequestsPage() {
    const stats = {
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0
    };

    const requests = []; 

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto w-full bg-gray-100 min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
                    My <span className="text-green-500">Adoption</span> Requests
                </h1>
                <p className="text-sm text-gray-500 mt-2 font-mono tracking-tight">
                    Track the status of all your adoption requests here.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Total Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{stats.total}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Total</span>
                </div>

                {/* Pending Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{stats.pending}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Pending</span>
                </div>

                {/* Approved Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{stats.approved}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Approved</span>
                </div>

                {/* Rejected Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{stats.rejected}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Rejected</span>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pet Name</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Request Date</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pickup Date</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Status</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length > 0 ? (
                                requests.map((req, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                                        <td className="p-4 text-sm font-medium text-gray-800">{req.petName}</td>
                                        <td className="p-4 text-sm text-gray-600">{req.requestDate}</td>
                                        <td className="p-4 text-sm text-gray-600">{req.pickupDate}</td>
                                        <td className="p-4 text-sm">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                                req.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                req.status === 'rejected' ? 'bg-rose-100 text-rose-800' :
                                                'bg-amber-100 text-amber-800'
                                            }`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-right">
                                            <button className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition">Cancel</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-20 text-center text-sm text-gray-400 font-mono tracking-wide">
                                        No adoption requests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}