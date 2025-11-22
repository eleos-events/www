import { EventList } from "@/components/app/event-list";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <EventList
        title="Upcoming Events"
        titleAlignment="left"
        showViewAllEvents={false}
        showPastEvents={false}
      />
      <EventList
        title="Past Events"
        titleAlignment="left"
        showViewAllEvents={false}
        showPastEvents={true}
      />
    </div>
  );
}
