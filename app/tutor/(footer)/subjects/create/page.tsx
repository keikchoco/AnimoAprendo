"use client";

import { useState, useRef } from "react";
import OfferDetails from "./OfferDetails";
import QuizEditor, { Question } from "./QuizEditor";
import CompletionChecklist from "./CompletionChecklist";
import ActionsBar from "./ActionsBar";

export default function OfferAndQuizPage() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [availability, setAvailability] = useState<any[]>([]);
  const [banner, setBanner] = useState<File | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<"offer" | "quiz">("offer");

  // completion states
  const titleComplete = !!subject.trim();
  const descriptionComplete = descriptionLength >= 80; // true if visible text exists
  const availabilityComplete = availability.length > 0;
  const bannerComplete = !!banner;

  // Count only valid quizzes
  const totalQuizzes = questions.filter((q) => {
    const isValid =
      q.question.trim() !== "" &&
      q.answer.trim() !== "" &&
      (q.type !== "multiple-choice" || q.options.length >= 2) &&
      (q.type !== "multiple-choice" ||
        (q.options.every((opt) => opt.trim() !== "") &&
          q.options.includes(q.answer)));

    return isValid;
  }).length;

  const allComplete =
    titleComplete &&
    descriptionComplete &&
    availabilityComplete &&
    bannerComplete &&
    totalQuizzes >= 30;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 space-y-10">
      <div className="flex flex-col gap-6 shadow-xl h-fit p-4 lg:sticky top-6 self-start bg-black/3 rounded-2xl w-full">
        <CompletionChecklist
          titleComplete={titleComplete}
          description={descriptionLength}
          descriptionComplete={descriptionComplete}
          availabilityComplete={availabilityComplete}
          bannerComplete={bannerComplete}
          totalQuizzes={totalQuizzes}
        />
        <ActionsBar allComplete={allComplete} />
      </div>

      <div className="lg:col-span-3 p-4 bg-black/3 shadow rounded-2xl">
        <h1 className="text-xl font-bold mb-4">Offer & Quiz</h1>

        {/* Tabs */}
        <div className="flex gap-4 border-b mb-6">
          <button
            onClick={() => setActiveTab("offer")}
            className={`px-4 py-2 ${
              activeTab === "offer"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Offer Details
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 ${
              activeTab === "quiz"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Quiz Editor
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "offer" && (
          <OfferDetails
            subject={subject}
            setSubject={setSubject}
            description={description}
            setDescription={setDescription}
            descriptionLength={descriptionLength}
            setDescriptionLength={setDescriptionLength}
            availability={availability}
            setAvailability={setAvailability}
            banner={banner}
            setBanner={setBanner}
          />
        )}

        {activeTab === "quiz" && (
          <QuizEditor questions={questions} setQuestions={setQuestions} />
        )}
      </div>
    </div>
  );
}
