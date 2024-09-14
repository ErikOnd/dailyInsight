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
            <div className="mt-28 flex max-w-2xl flex-col gap-8">
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
            <div className="flex animate-random-shift items-center">
                <Lottie options={defaultOptions} />
            </div>
        </Container>
    );
};

export default Home;
