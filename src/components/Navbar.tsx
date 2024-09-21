"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Navbar = () => {
    const { user } = useUser();
    return (
        <div className="flex items-center justify-center py-12 align-middle">
            <div className="mr-28 text-3xl font-bold">Logo</div>
            <div className="flex gap-10 font-bold">
                <Link href="/home">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/aboutUs">About us</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="ml-auto flex gap-5">
                <LanguageSwitcher />
                {user ? (
                    <Link href="/api/auth/logout">
                        <Button variant="ghost">Logout</Button>
                    </Link>
                ) : (
                    <Link href="/api/auth/login">
                        <Button variant="default">Login</Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
