"use client";

import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import type { View, Event as RBCEvent } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const placeholderEvents: RBCEvent[] = [
  {
    title: "Math Tutoring with Jeremiah",
    start: new Date(2025, 8, 21, 14, 0),
    end: new Date(2025, 8, 21, 15, 0),
  },
  {
    title: "Science Review with Yasmin",
    start: new Date(2025, 8, 22, 10, 0),
    end: new Date(2025, 8, 22, 11, 30),
  },
  {
    title: "Capstone Consultation with Christian",
    start: new Date(2025, 8, 25, 19, 0),
    end: new Date(2025, 8, 25, 20, 0),
  },
];

export default function TutorAppointmentsPage() {
  const [events] = useState<RBCEvent[]>(placeholderEvents);
  const [view, setView] = useState<View>("month");
  const [selectedEvent, setSelectedEvent] = useState<RBCEvent | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setView("day");
    }
  }, []);

  function handleSelectEvent(event: RBCEvent) {
    setSelectedEvent(event);
  }

  const eventStyleGetter = () => {
    const style: React.CSSProperties = {
      backgroundColor: "#16a34a",
      color: "white",
      borderRadius: "6px",
      padding: "2px 6px",
      border: "0px",
      display: "block",
    };
    return { style };
  };

  // Fake stats
  const stats = [
    { label: "Total Sessions", value: 24 },
    { label: "Completed", value: 18 },
    { label: "Pending", value: 4 },
    { label: "Cancelled", value: 2 },
  ];

  return (
    <div className="w-11/12 mx-auto py-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold mb-2">📆 Tutor Appointments</h1>
        <p className="text-gray-500">
          Manage and review your tutoring schedules with real-time updates.
        </p>
      </div>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <div className="h-[500px] sm:h-[600px] md:h-[700px]">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              view={view}
              onView={(v) => setView(v as View)}
              views={["month", "week", "day"]}
              defaultView="month"
              onSelectEvent={handleSelectEvent}
              popup
              eventPropGetter={eventStyleGetter}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">📊 Statistics</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0"
              >
                <span className="text-gray-600">{s.label}</span>
                <span className="text-xl font-bold text-green-700">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 max-w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
            <p className="text-gray-600 mb-2">
              <strong>From:</strong>{" "}
              {moment(selectedEvent.start).format("LLLL")}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>To:</strong> {moment(selectedEvent.end).format("LLLL")}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("📌 Action triggered!");
                  setSelectedEvent(null);
                }}
                className="px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800"
              >
                Take Action
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
