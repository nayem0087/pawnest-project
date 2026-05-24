'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuClipboardList, LuCirclePlus, LuListTodo, LuLogOut } from "react-icons/lu";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "My Requests", href: "/dashboard/my-request", icon: <LuClipboardList className="text-xl" /> },
        { name: "Add Pet", href: "/dashboard/add-pet", icon: <LuCirclePlus className="text-xl" /> }, 
        { name: "My Listings", href: "/dashboard/my-listing", icon: <LuListTodo className="text-xl" /> },
    ];

    return (
        
        <div className="flex h-full min-h-screen bg-gray-100 text-gray-800 font-sans">
            
            <aside className="w-64 border-r bg-gray-50 border-gray-200 p-6 flex flex-col justify-between hidden md:flex sticky top-0 h-screen">
                <div>
                    <p className="text-sm font-bold text-green-600 tracking-wider uppercase mb-6">Menu</p>
                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href || (pathname === '/dashboard' && item.href === '/dashboard/my-request');
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${isActive
                                                ? "bg-green-500 text-white shadow-md shadow-green-500/20"
                                                : "text-gray-600 hover:bg-gray-200/60 hover:text-gray-900"
                                            }`}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Logout Button */}
                <button className="flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-all font-semibold text-sm w-full text-left">
                    <LuLogOut className="text-xl" />
                    <span>Logout</span>
                </button>
            </aside>

            <main className="flex-1 bg-gray-100 min-h-screen flex flex-col justify-between">
                <div className="w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}