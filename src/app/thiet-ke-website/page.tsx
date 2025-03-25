"use client";

import HeroSection from "@/app/thiet-ke-website/sections/Hero";
import AboutSection from "@/app/thiet-ke-website/sections/About";
import HomeServicesSection from "@/app/thiet-ke-website/sections/HomeServices";
import WhyChooseUs from "@/app/thiet-ke-website/sections/WhyChooseUs";
import StatsSection from "@/app/thiet-ke-website/sections/Stats";
import WorkProcess from "@/app/thiet-ke-website/sections/Workflow";

export default function PageWebDesign() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <HomeServicesSection />
            <WhyChooseUs />
            <StatsSection />
            <WorkProcess />
        </div>
    );
}

