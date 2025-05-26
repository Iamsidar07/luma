export type InviteForm = {
  theme: {
    url: string;
    type: 'image' | 'video'
  } | null;
  eventName: string;
  startDate: string;
  description: string;
  capacity: number;
  requireApproval: boolean;
  link: string;
};
