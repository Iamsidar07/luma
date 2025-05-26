import { loadFont, fontFamily } from "@remotion/google-fonts/Geist";
import eventDetail from "../response.json";
import EventInvite from "../components/EventInvite";
import { AbsoluteFill } from "remotion";

loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});

const Hello = () => {
  return (
    <AbsoluteFill>
      <div
        className="h-full bg-background relative -z-10" 
        style={{
          fontFamily,
        }}
      >
        <EventInvite event={eventDetail} />
      </div>
    </AbsoluteFill>
  );
};

export default Hello;
