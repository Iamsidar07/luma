import CreateEventForm from "@/components/CreateEventForm";
import ThemeSelector from "@/components/ThemeSelector";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function CreateEventPage() {
  return (
    <div className="max-w-5xl mx-auto pt-[52px] p-4">
      <div className="grid grid-cols-1 gap-6 lg:gap-12 md:grid-cols-3">
        {/* Theme Selector */}
        <ThemeSelector />
        {/* Form */}
        <div className="md:col-span-2 w-full max-w-lg">
          <CreateEventForm />
          <Link href={"/view"} className="w-full mt-3 block">
            <button className="bg-opacity-light hover:bg-opacity-second-light cursor-pointer px-5 py-2 mb-6 rounded-lg flex items-center gap-2 w-full justify-center">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
