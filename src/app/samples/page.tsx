import type { Metadata } from "next";
import { samplesMetadata } from "@/content/site-content";
import { SamplesPage as SamplesFeaturePage } from "@/features/samples/samples-page";

export const metadata: Metadata = {
  title: samplesMetadata.title,
  description: samplesMetadata.description,
  keywords: [...samplesMetadata.keywords],
};

export default function SamplesPage() {
  return <SamplesFeaturePage />;
}
