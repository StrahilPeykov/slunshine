import type { Metadata } from "next";
import { MusicalMomentsPage } from "@/components/sections/moments-page";

export const metadata: Metadata = {
  title: "Musical Moments | SlunShine",
  description:
    "Intimate glimpses into sound and emotion through practice, performance, and inspiration.",
  keywords: [
    "musical moments",
    "harp videos",
    "practice sessions",
    "musical inspiration",
    "harpist journey",
  ],
};

export default function MomentsPage() {
  return <MusicalMomentsPage />;
}
