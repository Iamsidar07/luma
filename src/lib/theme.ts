import { Theme } from "../types";

export const DEFAULT_COVER_IMAGE =
  "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/gallery-images/3o/1eac0497-1680-41a6-ba52-6b3b2cc61025";

export const COLORS = ["#f98db3", "#d27cfe", "#b596ff", "#76adff"];

export const THEME_OPTIONS: Theme[] = [
  {
    title: "Minimal",
    thumbnail: "https://images.lumacdn.com/themes/thumb/minimal.jpg",
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    title: "Quantum",
    url: "https://cdn.pixabay.com/video/2017/12/10/13306-246909929_large.mp4",
    type: "video",
    thumbnail: "https://images.lumacdn.com/themes/thumb/quantum.jpg",
  },
  {
    title: "Warm",
    url: "https://cdn.pixabay.com/video/2022/06/24/121984-724732207_large.mp4",
    thumbnail: "https://images.lumacdn.com/themes/thumb/warp.jpg",
    type: "video",
  },
];
