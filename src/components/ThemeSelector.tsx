"use client";

import { useInviteStore } from "@/hooks/useInviteStore";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { ChangeEvent } from "react";
import { fileToBase64 } from "@/lib/utils";

const ThemeSelector = () => {
  const { updateField, form } = useInviteStore();

  const handleFileChange =async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await fileToBase64(file)
      if (file.type.includes("image")) {
        updateField("theme", { url, type: "image" });
      } else if (file.type.includes("video")) {
        updateField("theme", { url, type: "video" });
      }
    }
  };
  return (
    <div className="h-[330px] mx-auto aspect-square relative rounded-xl overflow-hidden bg-white">
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .mp4, .webm"
        className="hidden"
        id="theme"
        onChange={handleFileChange}
      />
      <label htmlFor="theme">
        {form.theme ? (
          form.theme.type === "video" ? (
            <video
              src={form.theme.url}
              autoPlay
              muted
              loop
              className="absolute w-full h-full object-cover"
            />
          ) : (
            <Image
              src={form.theme.url}
              alt="theme preview"
              width={800}
              height={800}
              className="aspect-square object-cover w-full h-full"
            />
          )
        ) : (
          <Image
            src={"/theme_image.png"}
            alt="theme"
            className="aspect-square object-cover w-full h-full"
            width={800}
            height={800}
          />
        )}
        <div className="w-9 h-9 aspect-square rounded-full border-2 grid place-items-center z-10 absolute right-2 bottom-2 bg-white border-background">
          <ImageIcon className="w-4 h-4 text-background" />
        </div>
      </label>
    </div>
  );
};

export default ThemeSelector;
