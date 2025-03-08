"use client";
import { useRouter } from "next/navigation";
import { Frown } from "lucide-react"; // Optional: to add a small error icon

const Error = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen p-6">
      {/* Error Icon and Message */}
      <div className="flex flex-col items-center text-center text-white">
        <Frown className="text-red-500 text-5xl mb-4" />
        <p className="text-3xl font-semibold text-white mb-2">
          Oops! Something went wrong.
        </p>
        <p className="text-lg text-gray-300">
          We couldn't complete your request. Please try again later.
        </p>
      </div>

      {/* Refresh Button */}
      <button
        className="bg-red-600 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-red-700 transition-all duration-300"
        onClick={() => router.refresh()}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
