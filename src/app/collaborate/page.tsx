import type { Metadata } from "next";
import { collaborateMetadata } from "@/content/site-content";
import { CollaboratePage } from "@/features/collaborate/collaborate-page";

export const metadata: Metadata = {
  title: collaborateMetadata.title,
  description: collaborateMetadata.description,
  keywords: [...collaborateMetadata.keywords],
};

export default function Collaborate() {
  return <CollaboratePage />;
}
