import { create } from "zustand";
import { persist } from "zustand/middleware";
import { format } from "date-fns";
import { InviteForm } from "../types";
import { DEFAULT_COVER_IMAGE, THEME_OPTIONS } from "../lib/theme";

type InviteStore = {
  form: InviteForm;
  setForm: (form: InviteForm) => void;
  updateField: <K extends keyof InviteForm>(
    key: K,
    value: InviteForm[K]
  ) => void;
};

export const useInviteStore = create<InviteStore>()(
  persist(
    (set) => ({
      form: {
        theme: THEME_OPTIONS[0],
        coverImage: DEFAULT_COVER_IMAGE,
        eventName: "",
        startDate: format(new Date(), "EEE dd MMM"),
        description: "",
        capacity: 0,
        requireApproval: false,
        link: "",
      },
      setForm: (form) => set({ form }),
      updateField: (key, value) =>
        set((state) => ({
          form: { ...state.form, [key]: value }, })),
    }),
    {
      name: "invite-store", 
    }
  )
);
