"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { Pen, UserPlus } from "lucide-react";
import { useInviteStore } from "../hooks/useInviteStore";
import { useState } from "react";

export function MaxCapacityDialog() {
  const { form, updateField } = useInviteStore();
  const [isOpen, setIsOpen] = useState(false);
  const [capacity, setCapacity] = useState(form.capacity || "50");
  const [overCapacityWaitingList, setOverCapacityWaitingList] = useState(false);

  const handleSetLimit = () => {
    updateField("capacity", Number(capacity));
    setIsOpen(false);
  };
  const handleRemoveLimit = () => {
    updateField("capacity", 0);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-white/50 p-[5px] border border-transparent aspect-square rounded-md hover:bg-opacity-second-light cursor-pointer">
          <Pen size={13} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[340px] px-5 py-4">
        <DialogHeader>
          <div className="p-2 w-14 h-14 rounded-full grid place-items-center bg-opacity-light">
            <UserPlus className="w-8 h-8 text-[#d2d4d7]" />
          </div>
          <DialogTitle className="text-white text-xl font-semibold">
            Max Capacity
          </DialogTitle>
          <DialogDescription className="text-sm text-secondary-color-alpha">
            Auto-close registration when the capacity is reached. Only approved
            guests count towards the cap.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="capacity" className="text-white/80">
              Capacity
            </Label>
            <Input
              id="capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="text-white border-opacity-light"
              min={1}
              type="number"
              max={100000}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="over-capacity" className="text-white/80">
              Over-Capacity Waiting List
            </Label>
            <Switch
              id="over-capacity"
              checked={overCapacityWaitingList}
              onCheckedChange={setOverCapacityWaitingList}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
            <Button
              onClick={handleSetLimit}
              className="h-[38px] text-base w-full cursor-pointer"
            >
              Set Limit
            </Button>
            <Button
              onClick={handleRemoveLimit}
              className="h-[38px] text-base w-full bg-white/[0.08] text-white/[0.64] py-1 hover:bg-white/[0.08] cursor-pointer"
            >
              Remove Limit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
