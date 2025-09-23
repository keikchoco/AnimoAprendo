"use client";

import { useState, RefObject, useRef, useEffect, forwardRef } from "react";
import dynamic from "next/dynamic";
import { Trash2 } from "lucide-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const QuillEditor = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill-new");
    return forwardRef<ReactQuill, any>((props, ref) => (
      <RQ {...props} ref={ref} />
    ));
  },
  { ssr: false }
);

type Props = {
  subject: string;
  setSubject: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  descriptionLength: number;
  setDescriptionLength: (val: number) => void;
  availability: Slot[];
  setAvailability: (val: Slot[]) => void;
  banner: File | null;
  setBanner: (val: File | null) => void;
};

type Slot = {
  id: string;
  day: string;
  start: string;
  end: string;
};

const SUBJECTS = [
  "Mathematics",
  "Science",
  "English",
  "History",
  "Computer Science",
];

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const TIME_OPTIONS = Array.from({ length: 24 * 4 }, (_, i) => {
  const hours = Math.floor(i / 4);
  const minutes = (i % 4) * 15;
  const label = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return { value: label, label };
});

export default function OfferDetails({
  subject,
  setSubject,
  description,
  setDescription,
  descriptionLength,
  setDescriptionLength,
  availability,
  setAvailability,
  banner,
  setBanner,
}: Props) {
  const [isPreview, setIsPreview] = useState(false);
  const quillRef = useRef<ReactQuill | null>(null);

  const handleAddSlot = () => {
    setAvailability([
      ...availability,
      { id: crypto.randomUUID(), day: "Monday", start: "08:00", end: "09:00" },
    ]);
  };

  const handleUpdateSlot = (id: string, key: keyof Slot, value: string) => {
    setAvailability(
      availability.map((slot) =>
        slot.id === id ? { ...slot, [key]: value } : slot
      )
    );
  };

  const handleRemoveSlot = (id: string) => {
    setAvailability(availability.filter((slot) => slot.id !== id));
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor(); // ✅ Quill instance
      const length = editor.getLength();
      setDescriptionLength(length - 1);
    }
  }, [description]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-nowrap">
          📘 Create a Tutoring Offer
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-nowrap w-full lg:w-fit"
          onClick={() => setIsPreview(!isPreview)}
        >
          {isPreview ? "Switch to Edit Mode" : "Preview Offer"}
        </button>
      </div>

      {!isPreview ? (
        <>
          {/* Subject */}
          <div>
            <label className="block mb-1 font-semibold">Subject Name</label>
            <select
              className="w-full border p-2 rounded-lg"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select a subject</option>
              {SUBJECTS.map((subj) => (
                <option key={subj}>{subj}</option>
              ))}
            </select>
          </div>

          {/* Subject Banner */}
          <div>
            <label className="block mb-1 font-semibold">Subject Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border p-2 rounded-lg"
              onChange={(e) => setBanner(e.target.files?.[0] || null)}
            />
            {banner && (
              <img
                src={URL.createObjectURL(banner)}
                alt="Subject Preview"
                className="mt-3 max-h-40 rounded-lg object-cover"
              />
            )}
          </div>

          {/* Description */}
          <QuillEditor
            ref={quillRef}
            theme="snow"
            value={description}
            onChange={setDescription}
            className="bg-white text-black rounded-md h-40"
          />

          {/* Weekly Availability */}
          <div className="mt-16">
            <label className="block mb-2 font-semibold">
              Weekly Availability
            </label>
            <div className="space-y-4">
              {availability.map((slot) => (
                <div
                  key={slot.id}
                  className="border p-3 rounded-lg space-y-2 bg-gray-50"
                >
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <select
                      value={slot.day}
                      onChange={(e) =>
                        handleUpdateSlot(slot.id, "day", e.target.value)
                      }
                      className="border p-2 rounded-lg"
                    >
                      {DAYS.map((day) => (
                        <option key={day}>{day}</option>
                      ))}
                    </select>

                    <select
                      value={slot.start}
                      onChange={(e) =>
                        handleUpdateSlot(slot.id, "start", e.target.value)
                      }
                      className="border p-2 rounded-lg"
                    >
                      {TIME_OPTIONS.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>

                    <span className="whitespace-nowrap">to</span>

                    <select
                      value={slot.end}
                      onChange={(e) =>
                        handleUpdateSlot(slot.id, "end", e.target.value)
                      }
                      className="border p-2 rounded-lg"
                    >
                      {TIME_OPTIONS.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>

                    <button
                      className="flex items-center gap-1 px-3 py-1 rounded-lg text-white bg-red-500 hover:bg-red-600"
                      onClick={() => handleRemoveSlot(slot.id)}
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-3">
              <button
                onClick={handleAddSlot}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                + Add Availability
              </button>
            </div>
          </div>
        </>
      ) : (
        // PREVIEW MODE
        <div className="space-y-4 border rounded p-4 bg-gray-50">
          <p>
            <strong>Subject:</strong> {subject || "—"}
          </p>
          <div>
            <strong>Description:</strong>
            <div
              className="prose max-w-none mt-1"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          {banner && (
            <div>
              <strong>Banner:</strong>
              <img
                src={URL.createObjectURL(banner)}
                alt="Banner Preview"
                className="mt-2 max-h-40 rounded border"
              />
            </div>
          )}
          <div>
            <strong>Weekly Availability:</strong>
            <ul className="list-disc ml-5 mt-2">
              {availability.map((slot) => (
                <li key={slot.id}>
                  {slot.day} — {slot.start} to {slot.end}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
