import { redirect } from "next/navigation";

export default function DashboardPage() {
    // ইউজার /dashboard এ আসলেই সে রিডাইরেক্ট হয়ে /my-request পেজে চলে যাবে
    redirect("/my-request"); 
}