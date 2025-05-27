"use client";
import CreateEventForm from "../../components/CreateEventForm";
import ThemeSelector from "../../components/ThemeSelector";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useInviteStore } from "../../hooks/useInviteStore";

export default function CreateEventPage() {
  const { form } = useInviteStore();
  return (
    <div className="min-h-svh w-full relative">
      <div
        style={{ backgroundColor: form.theme.color ?? undefined }}
        className="absolute inset-0 -z-20"
      />
      <div className="absolute inset-0 -z-10 opacity-50 backdrop-blur-lg">
        {form.theme?.type === "video" && form.theme.url ? (
          <video
            src={form.theme.url}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        ) : form.theme.type === "image" ? (
          <img
            src={form.theme.url as string}
            alt="a preview"
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        ) : null}
      </div>
      <div className="max-w-4xl mx-auto pt-[52px] p-4 ">
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row">
          {/* Theme Selector */}
          <ThemeSelector />
          {/* Form */}
          <div className="w-full flex-1">
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
    </div>
  );
}
