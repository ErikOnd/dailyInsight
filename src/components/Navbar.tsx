"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
    const { user } = useUser();
    return (
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-16 align-middle sm:px-6 lg:px-8">
            <div className="mr-28 text-3xl font-bold">Logo</div>
            <div className="flex gap-10 font-bold">
                <Link href="/home">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/aboutUs">About us</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="ml-auto">
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
