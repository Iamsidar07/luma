import { bundle, WebpackOverrideFn } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { webpackOverride as myWebpackConfig } from "../../../remotion/webpack-override.mjs";

export const GET = async (req: NextRequest) => {
  try {
    console.log("Rendering video...", req.method);
    // The composition you want to render
    const compositionId = "EventPreview";

    // You only have to create a bundle once, and you may reuse it
    const webpackOverride: WebpackOverrideFn = (webpackConfig) => {
      return {
        ...webpackConfig,
        // Override properties,
        ...myWebpackConfig,
      };
    };
    const onProgress = (progress: number) => {
      console.log(`Webpack bundling progress: ${progress}%`);
    };

    // for multiple renders that you can parametrize using input props.
    const bundleLocation = await bundle({
      entryPoint: path.resolve("../../../remotion/index.ts"),
      // If you have a webpack override in remotion.config.ts, pass it here as well.
      webpackOverride,
      onProgress,
    });

    // Parametrize the video by passing props to your component.
    const inputProps = {};

    // Get the composition you want to render. Pass `inputProps` if you
    // want to customize the duration or other metadata.
    console.log("Selecting composition...");
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: compositionId,
      inputProps,
    });

    // Render the video. Pass the same `inputProps` again
    // if your video is parametrized with data.
    const filePath = `out/${compositionId}.mp4`;
    console.log("downloading at ", filePath);
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation: filePath,
      inputProps,
    });

    const fileBuffer = await fs.readFile(filePath);

    console.log("Render done!");
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": `attachment; filename="${compositionId}"`,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
