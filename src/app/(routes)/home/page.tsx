"use client";
import React from "react";
import Container from "@/components/ui/container";
import Headline from "@/components/ui/headline";
import Lottie from "react-lottie";
import heroAnimation from "@/assets/hero_animation.json";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const Home = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: heroAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Container>
            <div className="mt-16 flex max-w-2xl flex-col gap-8">
                <Text
                    className="font-bold uppercase"
                    variant="secondary"
                    size="small">
                    - Free 30 days trail
                </Text>
                <Headline as="h1">Discover & save insights from books and movies!</Headline>
                <Text>Here you can put a short description about your project.</Text>
                <div className="flex gap-4">
                    <Button>Try for free</Button>
                    <Button variant="outline">See how it works</Button>
                </div>
            </div>
            <div className="mx-auto flex hidden w-full animate-random-shift items-center justify-center md:flex">
                <div className="w-full">
                    <Lottie options={defaultOptions} />
                </div>
            </div>
        </Container>
    );
};

export default Home;
