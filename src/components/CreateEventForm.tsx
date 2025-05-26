"use client";

import { useInviteStore } from "@/hooks/useInviteStore";
import { useState } from "react";
import { Notebook, User, UserRoundMinus } from "lucide-react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { MaxCapacityDialog } from "./CapacityDialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { getAllTimeSlots, getCurrentTimeSlot } from "@/lib/date";
import { cn } from "@/lib/utils";

const CreateEventForm = () => {
  const ALL_AVAILABLE_TIME_SLOT = getAllTimeSlots();
  const currentTimeSlot = getCurrentTimeSlot();
  const { updateField, form } = useInviteStore();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(currentTimeSlot);
  console.log(form);

  return (
    <div className="flex flex-col gap-3 w-full">
      <textarea
        className="text-white/[0.48] transition focus-visible:text-shadow-none focus:outline-none naked_input resize-none"
        spellCheck={false}
        autoCapitalize={"words"}
        autoFocus
        placeholder="Event Name"
        maxLength={140}
        value={form.eventName}
        style={{ height: "52px" }}
        onChange={(e) => updateField("eventName", e.target.value)}
      ></textarea>

      <div className="bg-opacity-light rounded-lg backdrop-blur-lg relative">
        <div className="flex space-between gap-1 items-center p-1 pl-3">
          <div className="w-2.5 h-2.5 bg-white/[0.32] -translate-y-[1px] mr-[0.375rem] ml-[0.25rem] rounded-full shrink-0"></div>
          <div className="flex-1 text-white/[0.79] w-16 whitespace-nowrap">
            Start
          </div>
          <div>
            <div className="w-auto max-w-full">
              <div className="max-w-[13.5rem] flex items-stretch bg-opacity-light hover:bg-opacity-second-light transition-colors duration-200 rounded-lg text-white h-8 overflow-hidden">
                <Popover>
                  <PopoverTrigger>
                    <div className="px-2 hover:bg-opacity-second-light h-full cursor-pointer flex items-center justify-center">
                      <div className="block">{form.startDate}</div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none shadow-none w-fit">
                    <Calendar
                      mode="single"
                      selected={new Date(form.startDate)}
                      onSelect={(date) =>
                        updateField(
                          "startDate",
                          format(new Date(date!), "EEE dd MMM")
                        )
                      }
                      className="bg-background ring ring-opacity-light backdrop-blur-lg rounded-lg"
                    />
                  </PopoverContent>
                </Popover>
                <div className="w-px bg-white/[0.09]" />
                <Popover>
                  <PopoverTrigger>
                    <div className="px-2 hover:bg-opacity-second-light h-full cursor-pointer flex items-center justify-center">
                      <div className="block">{selectedTimeSlot}</div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none shadow-none w-fit bg-black/35 ring ring-opacity-light backdrop-blur-lg">
                    <div className="flex flex-col gap-1 p-2 h-96 overflow-y-auto">
                      {ALL_AVAILABLE_TIME_SLOT.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={cn(
                            "px-2 py-1.5 rounded hover:bg-opacity-light cursor-pointer",
                            slot === selectedTimeSlot && "bg-background"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-1 rounded-lg  bg-opacity-light hover:bg-opacity-second-light transition-colors duration-200 border border-transparent backdrop-blur-lg">
        <div className=" py-1.5">
          <div className="flex items-center gap-2 px-3">
            <Notebook className="mt-1 w-4 h-4 text-white/[0.29]" />
            <p className="text-white/[0.79] font-medium text-ellipsis">
              Add Description
            </p>
          </div>
          <div className="border-b border-white/[0.08] z-10 mt-1" />
          <textarea
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Who should come? What's the event about?"
            className="placeholder:text-white/[0.48] px-3 py-1.5 w-full transition focus-visible:text-shadow-none focus:outline-none resize-none"
            spellCheck={false}
          ></textarea>
        </div>
      </div>

      <div className="space-y-1 mt-3">
        <p className="text-sm mb-1.5 text-white/[0.79] font-medium">
          Event Options
        </p>
        <div className="rounded-lg overflow-hidden backdrop-blur-lg">
          <div className="w-full py-2 px-3 bg-opacity-light relative overflow-hidden">
            <div className="flex items-center gap-2">
              <div className=" text-white/[0.32]">
                <UserRoundMinus size={16} />
              </div>
              <Label
                htmlFor="require-approval"
                className="flex-1 text-white/[0.79]"
              >
                Require Approval
              </Label>
              <Switch
                id="require-approval"
                checked={form.requireApproval}
                onCheckedChange={(checked) =>
                  updateField("requireApproval", checked)
                }
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full py-2 px-3 bg-opacity-light relative overflow-hidden">
            {/* divider */}
            <div className="absolute top-0 left-[2.2rem] right-0 border-b border-white/[0.08] z-10" />
            <div className="flex items-center gap-2">
              <div className="text-white/[0.32]">
                <User size={16} />
              </div>
              <div className="flex-1 text-white/[0.79]">Capacity</div>
              <div className="flex items-center gap-1">
                <span className="text-white/50 font-medium">Unlimited</span>
                <MaxCapacityDialog />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-3 text-[#0f160d] bg-white border-white px-4.5 py-3 rounded-lg font-medium">
        Create Event
      </button>
    </div>
  );
};
export default CreateEventForm;
