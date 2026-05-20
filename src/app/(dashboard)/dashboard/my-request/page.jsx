'use client';

export default function MyRequestsPage() {
    // ডামি কাউন্টার ডাটা (আপনার ব্যাকএন্ড থেকে এই ডাটা আসবে)
    const stats = {
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0
    };

    // রিকোয়েস্ট লিস্ট (ফাঁকা রাখা হয়েছে স্ক্রিনশটের মতো লুক আনার জন্য)
    const requests = []; 

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto w-full">
            {/* Header Title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-wide">
                    My <span className="text-rose-400">Adoption</span> Requests
                </h1>
                <p className="text-sm text-slate-400 mt-2 font-mono tracking-tight">
                    Track the status of all your adoption requests here.
                </p>
            </div>

            {/* Stats Grid Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Total Card */}
                <div className="bg-[#0F1422] border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-slate-100 mb-2">{stats.total}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Total</span>
                </div>

                {/* Pending Card */}
                <div className="bg-[#0F1422] border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-amber-400 mb-2">{stats.pending}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Pending</span>
                </div>

                {/* Approved Card */}
                <div className="bg-[#0F1422] border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-emerald-400 mb-2">{stats.approved}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Approved</span>
                </div>

                {/* Rejected Card */}
                <div className="bg-[#0F1422] border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-rose-500 mb-2">{stats.rejected}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Rejected</span>
                </div>
            </div>

            {/* Adoption Requests Table Container */}
            <div className="bg-[#0F1422] border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-[#121829]">
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Pet Name</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Request Date</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Pickup Date</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length > 0 ? (
                                requests.map((req, index) => (
                                    <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                                        {/* যদি ডাটা থাকে তবে এখানে রেন্ডার হবে */}
                                    </tr>
                                ))
                            ) : (
                                /* ফাঁকা থাকলে স্ক্রিনশটের মতো দেখাবে */
                                <tr>
                                    <td colSpan="5" className="p-20 text-center text-sm text-slate-500 font-mono tracking-wide">
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