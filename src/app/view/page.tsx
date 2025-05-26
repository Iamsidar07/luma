import EventInvite from "@/components/EventInvite";
import response from "@/response.json";
async function getEventDetails() {
  return response;
}
export default async function ViewEventPage() {
  const event = await getEventDetails();
  return <EventInvite event={event} />;
}
