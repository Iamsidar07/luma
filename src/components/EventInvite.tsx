"use client";
import { format } from "date-fns";
import { ArrowLeft, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInviteStore } from "@/hooks/useInviteStore";

const EventInvite = ({ event }: { event: any }) => {
  const startDate = new Date(event.start_datetime);
  const formattedDate = format(startDate, "EEE dd MMM");
  const formattedTime = format(startDate, "HH:mm");
  const { form } = useInviteStore();

  return (
    <div className="min-h-screen sm:p-6 font-sans">
      <div className="max-w-5xl mx-auto bg-opacity-10 backdrop-blur-md rounded-xl p-6">
        <Link href={"/create"}>
          <button className="bg-opacity-light hover:bg-opacity-second-light cursor-pointer px-5 py-2 mb-6 rounded-lg flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </Link>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-fit">
            <div className="aspect-square h-[330px] overflow-hidden rounded-lg bg-white relative">
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
            </div>
            <div className="mt-2 text-sm text-secondary-color-alpha">
              Presented by
            </div>
            <div className="text-base font-semibold text-white">
              {event.host.name}
            </div>
            <div className="text-sm text-secondary-color-alpha">
              {event.host.email}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-white">
              {event.name}
            </h1>
            <div className="flex items-center gap-2 text-sm mb-4 text-gray-200">
              <div className="rounded-md px-2 py-1 bg-opacity-light">
                {formattedDate}
              </div>
              <div>{formattedTime} GMT+5:30</div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {event.location_name}
              </div>
            </div>
            <div className="text-white mb-4">Hosted By: {event.host.name}</div>

            <div className="bg-opacity-16 border-2 rounded-md mb-4">
              <div className="text-sm text-gray-100 font-medium bg-opacity-light px-3 py-2.5">
                Registration
              </div>
              <div className="w-full h-px border-b border-opacity-light" />
              <div className="px-3 py-4">
                <div className="text-sm text-white mb-1">
                  You are invited by <b>{event.host.name}</b>
                </div>
                <div className="mb-1">
                  Welcome! To join the event, please register below.
                </div>
                <div className="mb-3">😊 user1@example.com</div>
                <div className="flex gap-2">
                  <button className="text-[#0f160d] cursor-pointer flex-1 bg-white border-white px-4.5 rounded-lg font-medium">
                    Accept Invitation
                  </button>

                  <button className="w-fit bg-opacity-light px-5 py-2 rounded-lg text-secondary-color-alpha cursor-pointer hover:bg-opacity-second-light">
                    Decline
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-lg font-semibold mb-1">About Event</div>
              <p className="text-sm text-secondary-color-alpha">
                {event.description}
              </p>
            </div>
            <p className="text-sm mb-2 font-medium">Usefull links</p>

            <div className="text-sm text-white">
              {event.custom_links.map((link: any, index: number) => (
                <div key={index} className="mb-1">
                  <Link
                    href={link.url}
                    className=" hover:text-secondary-color-alpha"
                    target="_blank"
                  >
                    {link.emoji} {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInvite;
