import { Composition } from "remotion";
import EventPreviewVideo from "./EventPreviewVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EventPreview"
        component={EventPreviewVideo}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          outProgress: 0,
        }}
      />
    </>
  );
};
