'use client';

import Link from "next/navigation";
import { usePathname } from "next/navigation";
import { LuClipboardList, LuCirclePlus, LuListTodo, LuLogOut } from "react-icons/lu";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "My Requests", href: "/dashboard/my-request", icon: <LuClipboardList className="text-xl" /> },
        { name: "Add Pet", href: "/dashboard/add-pet", icon: <LuCirclePlus className="text-xl" /> }, // এখানে পরিবর্তন করা হয়েছে
        { name: "My Listings", href: "/dashboard/my-listing", icon: <LuListTodo className="text-xl" /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100 text-slate-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-gray-100 border-slate-800/60 p-6 flex flex-col justify-between hidden md:flex">
                <div>
                    <p className="text-xl font-semibold text-green-500 tracking-wider uppercase mb-6">Menu</p>
                    <ul className="flex flex-col gap-3">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href || (pathname === '/dashboard' && item.href === '/my-request');
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive
                                                ? "bg-green-500 text-[#0B0F19] shadow-lg shadow-[#54D2D2]/20"
                                                : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                                            }`}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Logout Button */}
                <button className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-950/20 rounded-xl transition-all font-medium text-sm w-full text-left">
                    <LuLogOut className="text-xl" />
                    <span>Logout</span>
                </button>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 bg-[#0B0F19] min-h-screen">
                {children}
            </main>
        </div>
    );
}