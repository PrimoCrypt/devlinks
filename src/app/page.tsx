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
      <div className="flex flex-col items-center text-white">
        <LoaderPinwheel />
        <h1 className="mt-4 text-2xl">Loading....</h1>
      </div>
    </div>
  );
}

export default HomeDisplay;
