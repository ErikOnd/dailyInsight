"use client";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
    const { user } = useUser();

    const handleClick = async () => {
        try {
            const res = await fetch("/api/sendUserInfoToBe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user?.email),
            });

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error triggering function:", error);
        }
    };

    return (
        <Container>
            <Button onClick={handleClick}>Send User Data To Be</Button>
        </Container>
    );
}
