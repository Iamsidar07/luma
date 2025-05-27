"use client";

import { useInviteStore } from "../hooks/useInviteStore";
import { ImageIcon, Shuffle } from "lucide-react";
import { ChangeEvent } from "react";
import { fileToBase64 } from "../lib/utils";
import ThemeSlider from "./ThemeSlider";
import { COLORS, THEME_OPTIONS } from "../lib/theme";

const ThemeSelector = () => {
  const { updateField, form } = useInviteStore();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await fileToBase64(file);
      updateField("coverImage", url);
    }
  };

  const handleShuffle = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    updateField("theme", { ...THEME_OPTIONS[0], color: randomColor });
  };

  return (
    <div className="w-full md:max-w-[330px]">
      <div className="w-[330px] mx-auto aspect-square md:mx-0 relative rounded-xl overflow-hidden bg-white">
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          className="hidden"
          id="coverImage"
          onChange={handleFileChange}
        />
        <label htmlFor="coverImage">
          <img
            src={form.coverImage}
            alt="theme"
            className="aspect-square object-cover w-full h-full"
            width={800}
            height={800}
          />
          <div className="w-9 h-9 aspect-square rounded-full border-2 grid place-items-center z-10 absolute right-2 bottom-2 bg-white border-background">
            <ImageIcon className="w-4 h-4 text-background" />
          </div>
        </label>
      </div>
      <div className="flex items-stretch gap-2 mt-6 w-full">
        <ThemeSlider />
        <button
          onClick={handleShuffle}
          className="w-[54px] px-3 py-1.5 rounded-lg border border-transparent bg-opacity-light backdrop-blur-lg hover:border-opacity-light hover:bg-opacity-second-light cursor-pointer flex  items-center justify-center"
        >
          <Shuffle className="w-5 h-5 text-tertiary-color-alpha" />
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
