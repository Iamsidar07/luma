import EventInvite from "../../components/EventInvite";
import { fetchEventDetails } from "../../lib/event";

export default async function ViewEventPage() {
  const event = await fetchEventDetails();
  return <EventInvite event={event} />;
}
