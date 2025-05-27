"use client";
import { loadFont, fontFamily } from "@remotion/google-fonts/Geist";
import eventDetailData from "../response.json";
import EventInvite from "../components/EventInvite";
import { AbsoluteFill } from "remotion";
import { useEffect, useState } from "react";
import { fetchEventDetails } from "../lib/event";
import { Loader2 } from "lucide-react";

loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});

const Hello = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eventDetail, setEventDetail] = useState<null | typeof eventDetailData>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchEventDetails();
        setEventDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <AbsoluteFill>
      <div
        className="h-full bg-background relative -z-10"
        style={{
          fontFamily,
        }}
      >
        {isLoading ? (
          <Loader2 />
        ) : eventDetail ? (
          <EventInvite event={eventDetail} />
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

export default Hello;
