"use client";

import CreatePlan from "@/components/Subscribe/CreatePlanSection";
import HowItWorksBlack from "@/components/Subscribe/HowItWorksBlack";
import SubscriptionSection from "@/components/Subscribe/SubscriptionSection";

const sections = [
  CreatePlan,
  HowItWorksBlack,
  SubscriptionSection,
];

export default function Subscribe() {
  return (
    <div>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
