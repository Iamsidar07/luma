export type Theme = {
  title: string;
  thumbnail: string
  url?: string;
  color?: string;
  type?: "video" | "image"
}
export type InviteForm = {
  theme: Theme;
  coverImage: string;
  eventName: string;
  startDate: string;
  description: string;
  capacity: number;
  requireApproval: boolean;
  link: string;
};
