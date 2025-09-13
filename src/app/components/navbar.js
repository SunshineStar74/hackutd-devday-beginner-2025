import React from "react";
import Link from "next/link";
import { CircleUserRound, Settings } from "lucide-react";


function Navbar() {
    return (
        <nav className="flex justify-between items-center py-8 px-8 bg-gray-100 border-b border-gray-300">
            <div className="flex gap-4">
                <Link href="/settings" className="group relative">
                    <Settings size={48} className="cursor-pointer text-gray-900"/>
                </Link>
            </div>

            <div>
                <Link href="https://youtu.be/dQw4w9WgXcQ?si=40stDI22AECNIj0-" className="font-bold text-5xl">
                    <span  className="cursor-pointer text-gray-900">DevGPA</span>
                </Link>
            </div>

            <div className="flex gap-4">
                <Link href="/profile" className="group relative">
                    <CircleUserRound size={48} className="cursor-pointer text-gray-900"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;