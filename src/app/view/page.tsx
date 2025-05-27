import EventInvite from "../../components/EventInvite";
import { fetchEventDetails } from "../../lib/event";

export default async function ViewEventPage() {
  const event = await fetchEventDetails();
  if(!event) return <div>Event not found</div>
  return <EventInvite event={event} />;
}
