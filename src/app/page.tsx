"use client";
import { LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function HomeDisplay() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/signin");
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen bg-grey-medium">
      <LoaderPinwheel />;
    </div>
  );
}

export default HomeDisplay;
