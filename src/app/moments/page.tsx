import type { Metadata } from "next";
import { momentsMetadata } from "@/content/site-content";
import { MomentsPage as MomentsFeaturePage } from "@/features/moments/moments-page";

export const metadata: Metadata = {
  title: momentsMetadata.title,
  description: momentsMetadata.description,
  keywords: [...momentsMetadata.keywords],
};

export default function MomentsPage() {
  return <MomentsFeaturePage />;
}
