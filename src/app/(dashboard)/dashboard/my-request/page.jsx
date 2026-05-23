// 'use client';

// import { Button } from '@heroui/react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // রাউটার ইম্পোর্ট করা হলো
// import React, { useState, useEffect } from 'react';

// export default function MyRequestsPage() {
//     const [requests, setRequests] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();

//     // লগইন করা ইউজারের ইমেইল
//     const user = {
//         name: 'Nayem Ahmed',
//         email: 'nayem@gmail.com'
//     };

//     useEffect(() => {
//         if (!user?.email) return;

//         // 🌟 ট্রিক ১: Next.js কে ফোর্স করা যেন এই পেজের ক্লায়েন্ট ক্যাশ সে রিফ্রেশ করে নেয়
//         router.refresh();

//         const fetchMyRequests = async () => {
//             try {
//                 // 🌟 ট্রিক ২: ইউআরএল এ ডাইনামিক কুয়েরি জেনারেট করা হলো যেন ব্রাউজার বাধ্য হয় নতুন রিকোয়েস্ট করতে
//                 const res = await fetch(`http://localhost:5000/adoption-requests?email=${user.email}&v=${Math.random()}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     cache: 'no-store'
//                 });

//                 if (res.ok) {
//                     const data = await res.json();
//                     setRequests(data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching requests:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         setLoading(true);
//         fetchMyRequests();
        
//     }, [user?.email, router]); 

//     const stats = {
//         total: requests.length,
//         pending: requests.filter(req => req.status === 'pending').length,
//         approved: requests.filter(req => req.status === 'approved').length,
//         rejected: requests.filter(req => req.status === 'rejected').length
//     };

//     return (
//         <div className="p-6 md:p-10 max-w-6xl mx-auto w-full bg-gray-100 min-h-screen">
//             {/* Header Section */}
//             <div className="mb-8">
//                 <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
//                     My <span className="text-green-500">Adoption</span> Requests
//                 </h1>
//                 <p className="text-sm text-gray-500 mt-2 font-mono tracking-tight">
//                     Track the status of all your adoption requests here.
//                 </p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//                 <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
//                     <span className="text-4xl font-bold text-gray-800 mb-2">
//                         {loading ? '...' : stats.total}
//                     </span>
//                     <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Total</span>
//                 </div>

//                 <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
//                     <span className="text-4xl font-bold text-gray-800 mb-2">
//                         {loading ? '...' : stats.pending}
//                     </span>
//                     <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Pending</span>
//                 </div>

//                 <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
//                     <span className="text-4xl font-bold text-gray-800 mb-2">
//                         {loading ? '...' : stats.approved}
//                     </span>
//                     <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Approved</span>
//                 </div>

//                 <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
//                     <span className="text-4xl font-bold text-gray-800 mb-2">
//                         {loading ? '...' : stats.rejected}
//                     </span>
//                     <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Rejected</span>
//                 </div>
//             </div>

//             {/* Table Container */}
//             <div className="bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left border-collapse">
//                         <thead>
//                             <tr className="border-b border-gray-200 bg-gray-50">
//                                 <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pet Name</th>
//                                 <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Request Date</th>
//                                 <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pickup Date</th>
//                                 <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Status</th>
//                                 <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest text-right">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {loading ? (
//                                 <tr>
//                                     <td colSpan="5" className="p-20 text-center text-sm text-gray-400 font-mono tracking-wide animate-pulse">
//                                         Loading your latest requests...
//                                     </td>
//                                 </tr>
//                             ) : requests.length > 0 ? (
//                                 requests.map((req, index) => (
//                                     <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
//                                         <td className="p-4 text-sm font-medium text-gray-800">{req.petName}</td>
//                                         <td className="p-4 text-sm text-gray-600">{req.requestDate}</td>
//                                         <td className="p-4 text-sm text-gray-600">{req.pickupDate}</td>
//                                         <td className="p-4 text-sm">
//                                             <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                                                 req.status === 'approved' ? 'bg-green-100 text-green-800' :
//                                                 req.status === 'rejected' ? 'bg-rose-100 text-rose-800' :
//                                                 'bg-amber-100 text-amber-800'
//                                             }`}>
//                                                 {req.status}
//                                             </span>
//                                         </td>
//                                         <td className="p-4 text-sm text-right">
//                                             <Link href={`/all-pets/${req.petId}`}>
//                                                 <Button variant='outline' className="text-sm font-semibold text-green-600 hover:text-green-700 transition">View</Button>
//                                             </Link>
//                                         </td>
//                                         <td className="p-4 text-sm text-right">
//                                             <Link href={`/all-pets/${req.petId}`}>
//                                                 <Button variant='outline' className="text-sm font-semibold text-green-600 hover:text-green-700 transition">Cancel</Button>
//                                             </Link>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr> 
//                                     <td colSpan="5" className="p-20 text-center text-sm text-gray-400 font-mono tracking-wide">
//                                         No adoption requests found.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }   













'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function MyRequestsPage() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🌟 মোডাল কন্ট্রোল করার জন্য স্টেটসমূহ
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequestId, setSelectedRequestId] = useState(null);

    // লগইন করা ইউজারের ইমেইল
    const user = {
        name: 'Nayem Ahmed',
        email: 'nayem@gmail.com'
    };

    // ডেটা ফেচ করার ফাংশন
    const fetchMyRequests = async () => {
        if (!user?.email) return;
        try {
            const res = await fetch(`http://localhost:5000/adoption-requests?email=${user.email}&v=${Date.now()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache'
                },
                cache: 'no-store'
            });

            if (res.ok) {
                const data = await res.json();
                setRequests(data);
            }
        } catch (error) {
            console.error("Error fetching requests:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchMyRequests();
    }, []);

    // 🌟 ১. ক্যানসেল বাটন ক্লিক হ্যান্ডলার (মোডাল ওপেন করবে)
    const handleCancelClick = (id) => {
        setSelectedRequestId(id);
        setIsModalOpen(true);
    };

    // 🌟 ২. মোডাল থেকে নিশ্চিত করার পর ডিলিট করার ফাংশন
    const handleConfirmDelete = async () => {
        if (!selectedRequestId) return;

        try {
            // এখানে আপনার ডাটাবেজের আইডি (_id) অনুযায়ী ডিলিট রিকোয়েস্ট যাবে
            const res = await fetch(`http://localhost:5000/adoption-requests/${selectedRequestId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                // স্টেট থেকে ওই ডেটাটি ফিল্টার করে রিমুভ করে দেওয়া হলো (ইনস্ট্যান্ট ইউআই আপডেট)
                setRequests(requests.filter(req => req._id !== selectedRequestId));
                setIsModalOpen(false); // মোডাল বন্ধ
                setSelectedRequestId(null);
            } else {
                alert("Failed to cancel the request.");
            }
        } catch (error) {
            console.error("Error deleting request:", error);
        }
    };

    const stats = {
        total: requests.length,
        pending: requests.filter(req => req.status === 'pending').length,
        approved: requests.filter(req => req.status === 'approved').length,
        rejected: requests.filter(req => req.status === 'rejected').length
    };

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto w-full bg-gray-100 min-h-screen relative">
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
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{loading ? '...' : stats.total}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Total</span>
                </div>
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{loading ? '...' : stats.pending}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Pending</span>
                </div>
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{loading ? '...' : stats.approved}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Approved</span>
                </div>
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">{loading ? '...' : stats.rejected}</span>
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
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-20 text-center text-sm text-gray-400 font-mono tracking-wide animate-pulse">
                                        Loading your latest requests...
                                    </td>
                                </tr>
                            ) : requests.length > 0 ? (
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
                                        <td className="p-4 text-sm text-right flex justify-end gap-2">
                                            <Link href={`/all-pets/${req.petId}`}>
                                                <Button variant='outline' className="text-sm font-semibold text-green-600 hover:text-green-700 transition">View</Button>
                                            </Link>
                                            {/* 🌟 ক্যানসেল বাটনে ক্লিক ইভেন্ট ও ফাংশন রান করা হলো */}
                                        </td>
                                        <td>
                                            <Button 
                                                variant='outline' 
                                                onPress={() => handleCancelClick(req._id)} 
                                                className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition"
                                            >
                                                Cancel
                                            </Button>
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

            {/* 🌟 কাস্টম হোয়াইট ব্যাকগ্রাউন্ড এবং গ্রিন বাটন মোডাল লেআউট */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
                    <div className="bg-white p-6 rounded-2xl max-w-md w-full mx-4 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
                        <h3 className="text-xl font-bold text-gray-900 font-mono mb-2">Confirm Cancellation</h3>
                        <p className="text-sm text-gray-600 tracking-wide leading-relaxed mb-6">
                            Are you sure you want to cancel this adoption request? This action cannot be undone.
                        </p>
                        
                        <div className="flex justify-end gap-3 font-semibold">
                            {/* No, Keep it বাটন */}
                            <button 
                                onClick={() => { setIsModalOpen(false); setSelectedRequestId(null); }}
                                className="px-4 py-2 text-sm bg-gray-100 text-green-500 border border-green-500 hover:bg-gray-200 rounded-xl transition-all"
                            >
                                No, Keep it
                            </button>
                            
                            {/* Yes, Cancel বাটন */}
                            <button 
                                onClick={handleConfirmDelete}
                                className="px-5 py-2 text-sm bg-gray-100 text-red-500 hover:bg-gray-200 border border-red-500  rounded-xl shadow-md shadow-green-500/20 transition-all"
                            >
                                Yes, Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}