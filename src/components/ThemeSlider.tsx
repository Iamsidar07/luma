"use client";
import { ChevronsUpDown, Upload } from "lucide-react";
import {
  Drawer, DrawerContent,
  DrawerDescription, DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "./ui/drawer";
import { COLORS, THEME_OPTIONS } from "../lib/theme";
import { cn, fileToBase64 } from "../lib/utils";
import { useInviteStore } from "../hooks/useInviteStore";
import { ChangeEvent } from "react";
const ThemeSlider = () => {
  const { form, updateField } = useInviteStore();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await fileToBase64(file);
      if (file.type.includes("image")) {
        updateField("theme", {
          thumbnail: url,
          url,
          type: "image",
          title: "Uploaded by user",
        });
      }
      if (file.type.includes("video")) {
        updateField("theme", {
          thumbnail: url,
          url,
          type: "video",
          title: "Uploaded by user",
        });
      }
    }
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="px-3 py-1.5 flex-1 rounded-lg border border-transparent bg-opacity-light backdrop-blur-lg hover:-outline-offset-2 hover:outline-2 outline-opacity-light hover:border-opacity-light hover:bg-opacity-second-light cursor-pointer flex  items-center gap-2">
          <img
            src={form.theme.thumbnail}
            alt={form.theme.title}
            width={48}
            height={33}
            className="object-cover rounded"
          />
          <div className="flex-1 text-left space-y-1 tracking-light">
            <p className="text-tertiary-color-alpha text-xs"> Theme</p>
            <h3 className="font-medium text-white text-ellipsis text-sm">
              {form.theme.title}
            </h3>
          </div>
          <ChevronsUpDown className="w-5 h-5 text-tertiary-color-alpha" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">
            Select a cool theme for your event
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            It will select the theme
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center gap-2 min-h-44 p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-6">
              {THEME_OPTIONS.map((theme) => {
                const isActive = theme.title === form.theme.title;
                return (
                  <div
                    key={theme.title}
                    role="button"
                    onClick={() => {
                      if (theme.title === "Minimal") {
                        updateField("theme", {
                          ...theme,
                          color:
                            COLORS[Math.floor(Math.random() * COLORS.length)],
                        });
                      } else {
                        updateField("theme", theme);
                      }
                    }}
                    className={cn(
                      "w-[82px] space-y-1 aspect-square cursor-pointer",
                      isActive && "font-semibold"
                    )}
                  >
                    <img
                      src={theme.thumbnail}
                      alt={theme.title}
                      width={82}
                      height={56}
                      className={cn(
                        "w-full h-full object-cover rounded-lg border-2 border-transparent",
                        isActive && "border-black outline-2 outline-offset-2"
                      )}
                    />
                    <p
                      className={cn(
                        "text-tertiary-color-alpha text-center mt-2 text-xs",
                        isActive && ""
                      )}
                    >
                      {theme.title}
                    </p>
                  </div>
                );
              })}
            </div>
            <label htmlFor="theme">
              <div
                role="button"
                className={cn(
                  "space-y-1 border-2 border-dashed border-opacity-light rounded-lg grid place-items-center p-6"
                )}
              >
                <Upload className="text-tertiary-color-alpha w-6 h-6" />
                <p className="text-secondary-color-alpha text-sm">
                  .jpg, .jpeg, .png, .gif, .mp4, .webm
                </p>
                <p className="text-secondary-color-alpha text-sm">
                  Please upload image or video for theme
                </p>
              </div>
            </label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .gif, .mp4, .webm"
              className="hidden"
              id="theme"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex items-center gap-2 justify-center mt-6">
            {COLORS.map((color) => {
              const isActive = form.theme.color === color;
              return (
                <div
                  role="button"
                  key={color}
                  onClick={() => {
                    updateField("theme", { ...THEME_OPTIONS[0], color });
                  }}
                  className={cn(
                    "w-6 h-6 rounded-full aspect-square border border-transparent",
                    isActive && "border-opacity-second-light"
                  )}
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ThemeSlider;
