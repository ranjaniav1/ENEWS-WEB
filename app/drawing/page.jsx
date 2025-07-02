"use client";

import dynamic from "next/dynamic";

const DrawingPage = dynamic(() => import("../components/features/DrawingPage"), {
  ssr: false,
});

export default function Drawing() {
  return <DrawingPage />;
}
