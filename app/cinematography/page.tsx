import type { Metadata } from "next";
import CinematographyPageLayout from "@/components/CinematographyPageLayout";

export const metadata: Metadata = {
  title: "Cinematography — Amanveer Singh Sando",
  description: "Composed Between Cuts",
};

export default function CinematographyPage() {
  return <CinematographyPageLayout />;
}
