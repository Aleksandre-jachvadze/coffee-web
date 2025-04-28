"use client";

import AboutUs from "@/components/About/AboutUsSection";
import CommitmentSection from "@/components/About/CommitmentSection";
import QualitySection from "@/components/About/QualitySection";
import HeadquartersSection from "@/components/About/HeadquartersSection";

const sections = [
  AboutUs,
  CommitmentSection,
  QualitySection,
  HeadquartersSection,
];

export default function About() {
  return (
    <div>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
