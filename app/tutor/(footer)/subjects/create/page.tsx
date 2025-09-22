"use client";

import React, { useRef, useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import ReactQuillEditor from "@/components/ReactQuill";

type QuestionType = "multiple-choice" | "true-false" | "fill-in";

interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  answer?: string;
}

interface AvailabilitySlot {
  id: number;
  day: string;
  start: string;
  end: string;
}

function formatTo12Hour(value: string) {
  const [hhStr, mmStr] = value.split(":");
  const hh = parseInt(hhStr, 10);
  const mm = parseInt(mmStr, 10);
  const ampm = hh >= 12 ? "PM" : "AM";
  const hour12 = ((hh + 11) % 12) + 1;
  return `${hour12}:${String(mm).padStart(2, "0")} ${ampm}`;
}

function generateTimeOptions(stepMinutes: number) {
  const list: { value: string; label: string }[] = [];
  for (let m = 0; m < 24 * 60; m += stepMinutes) {
    const hh = Math.floor(m / 60);
    const mm = m % 60;
    const value = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
    list.push({ value, label: formatTo12Hour(value) });
  }
  return list;
}

function calculateDuration(start: string, end: string) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const startMinutes = sh * 60 + sm;
  const endMinutes = eh * 60 + em;
  const diff = endMinutes - startMinutes;
  if (diff <= 0) return null;
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;
  return { hours, minutes };
}

export default function TutorCreateOfferPage() {
  const [activeTab, setActiveTab] = useState<"offer" | "quiz">("offer");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isPreview, setIsPreview] = useState(false);

  const [availability, setAvailability] = useState<AvailabilitySlot[]>([]);
  const [stepMinutes, setStepMinutes] = useState(15);

  const [subject, setSubject] = useState("Mathematics");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const prevLength = useRef(questions.length);

  const TIME_OPTIONS = generateTimeOptions(stepMinutes);
  const START_OPTIONS = TIME_OPTIONS.slice(0, -1);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // --- Questions helpers (unchanged) ---
  const handleAddQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: Date.now(),
      type,
      question: "",
      options: type === "multiple-choice" ? ["", "", "", ""] : undefined,
      answer: "",
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions((q) => q.filter((x) => x.id !== id));
  };

  const handleChangeQuestion = (
    id: number,
    field: string,
    value: string,
    idx?: number
  ) => {
    setQuestions((qs) =>
      qs.map((q) =>
        q.id === id
          ? {
              ...q,
              [field]:
                field === "options" && idx !== undefined
                  ? q.options?.map((opt, i) => (i === idx ? value : opt))
                  : value,
            }
          : q
      )
    );
  };

  // --- Availability helpers ---
  function getTimeIndex(value: string) {
    return TIME_OPTIONS.findIndex((t) => t.value === value);
  }

  const handleAddSlot = () => {
    const defaultStart = "09:00";
    const startIndex = TIME_OPTIONS.findIndex((t) => t.value === defaultStart);
    const defaultEnd = "10:00";
    setAvailability((prev) => [
      ...prev,
      { id: Date.now(), day: "Monday", start: defaultStart, end: defaultEnd },
    ]);
  };

  const handleRemoveSlot = (id: number) => {
    setAvailability((prev) => prev.filter((s) => s.id !== id));
  };

  const handleUpdateSlot = (
    id: number,
    field: "day" | "start" | "end",
    value: string
  ) => {
    setAvailability((prev) =>
      prev.map((slot) => {
        if (slot.id !== id) return slot;

        if (field === "day") return { ...slot, day: value };

        if (field === "start") {
          const startIdx = getTimeIndex(value);
          if (startIdx >= 0) {
            const clampedIdx = Math.min(startIdx, TIME_OPTIONS.length - 2);
            let newEnd = slot.end;
            if (getTimeIndex(newEnd) <= clampedIdx) {
              newEnd = TIME_OPTIONS[clampedIdx + 1].value;
            }
            return {
              ...slot,
              start: TIME_OPTIONS[clampedIdx].value,
              end: newEnd,
            };
          }
        }

        if (field === "end") {
          const endIdx = getTimeIndex(value);
          const startIdx = getTimeIndex(slot.start);
          if (endIdx <= startIdx) {
            const nextIdx = Math.min(startIdx + 1, TIME_OPTIONS.length - 1);
            return { ...slot, end: TIME_OPTIONS[nextIdx].value };
          }
          return { ...slot, end: value };
        }

        return slot;
      })
    );
  };

  // Scroll to bottom only when a question is added
  useEffect(() => {
    if (questions.length > prevLength.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevLength.current = questions.length;
  }, [questions.length]);

  // Reset availability when step changes (to regenerate valid times)
  useEffect(() => {
    setAvailability([]);
  }, [stepMinutes]);

  return (
    <div className="w-11/12 mx-auto py-8 space-y-6">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "offer" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("offer")}
        >
          Offer Details
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "quiz" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("quiz")}
        >
          Quiz / Module
        </button>
      </div>

      {/* Offer Details */}
      {activeTab === "offer" && (
        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">📘 Create a Tutoring Offer</h2>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setIsPreview(!isPreview)}
            >
              {isPreview ? "Switch to Edit Mode" : "Preview Offer"}
            </button>
          </div>

          {!isPreview && (
            <>
              <div>
                <label className="block mb-1 font-semibold">Subject Name</label>
                <select
                  className="w-full border p-2 rounded-lg"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                  <option>History</option>
                  <option>Computer Science</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-semibold">
                  Subject Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border p-2 rounded-lg"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Subject Preview"
                    className="mt-3 max-h-40 rounded-lg object-cover"
                  />
                )}
              </div>

              <div className="h-fit">
                <label className="block mb-1 font-semibold">Description</label>
                <ReactQuillEditor
                  value={description}
                  onChange={setDescription}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Time Increment
                </label>
                <select
                  className="border p-2 rounded-lg"
                  value={stepMinutes}
                  onChange={(e) => setStepMinutes(Number(e.target.value))}
                >
                  <option value={5}>5 minutes</option>
                  <option value={10}>10 minutes</option>
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                </select>
              </div>

              {/* Weekly Availability */}
              <div>
                <label className="block mb-2 font-semibold">
                  Weekly Availability
                </label>
                <div className="space-y-4">
                  {availability.map((slot) => {
                    const startIdx = getTimeIndex(slot.start);
                    const endOptions =
                      startIdx >= 0
                        ? TIME_OPTIONS.slice(startIdx + 1)
                        : TIME_OPTIONS;

                    const duration = calculateDuration(slot.start, slot.end);
                    const invalid = !duration;

                    return (
                      <div
                        key={slot.id}
                        className="border p-3 rounded-lg space-y-2"
                      >
                        <div className="flex flex-col sm:flex-row gap-3 items-center">
                          <select
                            value={slot.day}
                            onChange={(e) =>
                              handleUpdateSlot(slot.id, "day", e.target.value)
                            }
                            className="border p-2 rounded-lg"
                          >
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                          </select>

                          <select
                            value={slot.start}
                            onChange={(e) =>
                              handleUpdateSlot(slot.id, "start", e.target.value)
                            }
                            className="border p-2 rounded-lg"
                          >
                            {START_OPTIONS.map((t) => (
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
                            {endOptions.map((t) => (
                              <option key={t.value} value={t.value}>
                                {t.label}
                              </option>
                            ))}
                          </select>

                          <button
                            className="flex items-center gap-1 px-3 py-1 rounded-lg text-white bg-red-500 hover:bg-red-600"
                            onClick={() => handleRemoveSlot(slot.id)}
                          >
                            <Trash2 size={16} />
                            Remove
                          </button>
                        </div>

                        {invalid && (
                          <p className="text-red-500 text-sm">
                            End time must be after start time.
                          </p>
                        )}
                        {duration && (
                          <p className="text-gray-600 text-sm">
                            Duration:{" "}
                            {duration.hours > 0 && `${duration.hours}h `}
                            {duration.minutes > 0 && `${duration.minutes}m`}
                          </p>
                        )}
                      </div>
                    );
                  })}
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
          )}

          {isPreview && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{subject}</h3>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Subject Preview"
                  className="max-h-48 rounded-lg object-cover"
                />
              )}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div>
                <h4 className="font-semibold mb-2">Weekly Availability</h4>
                {availability.length === 0 && (
                  <p className="text-gray-500">No availability set.</p>
                )}
                {availability.map((slot) => {
                  const duration = calculateDuration(slot.start, slot.end);
                  return (
                    <p key={slot.id}>
                      {slot.day}: {formatTo12Hour(slot.start)} -{" "}
                      {formatTo12Hour(slot.end)}{" "}
                      {duration &&
                        `(${duration.hours > 0 ? duration.hours + "h " : ""}${
                          duration.minutes > 0 ? duration.minutes + "m" : ""
                        })`}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quiz Tab (unchanged) */}
      {activeTab === "quiz" && (
        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">📝 Create a Quiz / Module</h2>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setIsPreview(!isPreview)}
            >
              {isPreview ? "Switch to Edit Mode" : "Preview Quiz"}
            </button>
          </div>

          {!isPreview &&
            questions.map((q, qIndex) => (
              <div key={q.id} className="border p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">
                    Q{qIndex + 1} - {q.type.replace("-", " ").toUpperCase()}
                  </h3>
                  <button
                    className="flex items-center gap-1 px-3 py-1 rounded-lg text-white bg-red-500 hover:bg-red-600"
                    onClick={() => handleRemoveQuestion(q.id)}
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>

                <input
                  type="text"
                  className="w-full border p-2 rounded-lg"
                  placeholder="Enter question"
                  value={q.question}
                  onChange={(e) =>
                    handleChangeQuestion(q.id, "question", e.target.value)
                  }
                />

                {q.type === "multiple-choice" &&
                  q.options?.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`correct-${q.id}`}
                        checked={q.answer === opt}
                        onChange={() =>
                          handleChangeQuestion(q.id, "answer", opt)
                        }
                      />
                      <input
                        type="text"
                        className="w-full border p-2 rounded-lg"
                        placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                        value={opt}
                        onChange={(e) =>
                          handleChangeQuestion(
                            q.id,
                            "options",
                            e.target.value,
                            idx
                          )
                        }
                      />
                    </div>
                  ))}

                {q.type === "true-false" && (
                  <select
                    className="w-full border p-2 rounded-lg"
                    value={q.answer}
                    onChange={(e) =>
                      handleChangeQuestion(q.id, "answer", e.target.value)
                    }
                  >
                    <option value="">Select Answer</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                )}

                {q.type === "fill-in" && (
                  <input
                    type="text"
                    className="w-full border p-2 rounded-lg"
                    placeholder="Correct answer"
                    value={q.answer}
                    onChange={(e) =>
                      handleChangeQuestion(q.id, "answer", e.target.value)
                    }
                  />
                )}
              </div>
            ))}

          {isPreview && (
            <div className="space-y-6">
              {questions.length === 0 && (
                <p className="text-gray-500">No questions added yet.</p>
              )}
              {questions.map((q, idx) => (
                <div key={q.id} className="border p-4 rounded-lg space-y-3">
                  <h3 className="font-semibold">
                    {idx + 1}. {q.question}
                  </h3>

                  {q.type === "multiple-choice" &&
                    q.options?.map((opt, i) => (
                      <label key={i} className="flex gap-2 items-center">
                        <input type="radio" name={`q-${q.id}`} disabled defaultChecked={opt === q.answer} />
                        <span
                          className={
                            opt === q.answer ? "font-bold text-green-600" : ""
                          }
                        >
                          {opt}
                        </span>
                      </label>
                    ))}

                  {q.type === "true-false" && (
                    <div className="flex gap-4">
                      <label className="flex gap-2 items-center">
                        <input type="radio" name={`q-${q.id}`} disabled defaultChecked={q.answer === "True"}/>
                        <span
                          className={
                            q.answer === "True"
                              ? "font-bold text-green-600"
                              : ""
                          }
                        >
                          True
                        </span>
                      </label>
                      <label className="flex gap-2 items-center">
                        <input type="radio" name={`q-${q.id}`} disabled defaultChecked={q.answer === "False"}/>
                        <span
                          className={
                            q.answer === "False"
                              ? "font-bold text-green-600"
                              : ""
                          }
                        >
                          False
                        </span>
                      </label>
                    </div>
                  )}

                  {q.type === "fill-in" && (
                    <div>
                      <input
                        type="text"
                        className="w-full border p-2 rounded-lg"
                        placeholder="Your answer"
                        disabled
                        defaultValue={q.answer}
                      />
                      {q.answer && (
                        <p className="text-sm text-green-600 mt-2">
                          Correct Answer:{" "}
                          <span className="font-semibold">{q.answer}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {!isPreview && (
            <div className="flex flex-wrap gap-4 justify-center pt-4 border-t">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
                onClick={() => handleAddQuestion("multiple-choice")}
              >
                + Add Multiple Choice
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
                onClick={() => handleAddQuestion("true-false")}
              >
                + Add True/False
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
                onClick={() => handleAddQuestion("fill-in")}
              >
                + Add Fill in the Blank
              </button>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}
