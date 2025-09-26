"use client";

import { useState, useRef, use, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { getOffer, saveSubjectDraft, submitSubject } from "@/app/tutor/actions";
import { CreatePopup } from "@/app/tutor/alert";
import QuizEditor, { Question } from "../../QuizEditor";
import CompletionChecklist from "../../CompletionChecklist";
import ActionsBar from "../../ActionsBar";
import OfferDetails from "../../OfferDetails";

let DESCRIPTION_LENGTH = 1;
let QUIZ_COMPLETED = 1;

if (process.env.NEXT_PUBLIC_DEVELOPMENT_MODE == "false") {
  DESCRIPTION_LENGTH = 80;
  QUIZ_COMPLETED = 30;
}

export default function TutorViewSubject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { user } = useUser();
  const userId = user?.id;
  const [documentId, setDocumentId] = useState(slug);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [availability, setAvailability] = useState<any[]>([]);
  const [banner, setBanner] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<"offer" | "quiz">("offer");
  const [saveState, setSaveState] = useState<
    "default" | "saving" | "success" | "failed"
  >("default");
  const [submitState, setSubmitState] = useState<
    "default" | "saving" | "success" | "failed"
  >("default");

  useEffect(() => {
    async function fetchData() {
      const result = await getOffer(userId, slug);
      const data = result.data
      setSubject(data?.subject || "");
      setDescription(data?.description || "")
      setAvailability(data?.availability || [])
      setBanner(data?.banner || "")
      setQuestions(data?.questions || [])
    }
    if (userId) fetchData();
  }, [userId]);

  // completion states
  const titleComplete = !!subject.trim();
  const descriptionComplete = descriptionLength >= DESCRIPTION_LENGTH;
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
    totalQuizzes >= QUIZ_COMPLETED;

  function handleSubmit() {
      CreatePopup("Submitting", "info");
      submitSubject({
        userId,
        documentId,
        sendData: { subject, description, availability, banner, questions },
      }).then((data) => {
        if (data.success) {
          setSaveState("success");
          CreatePopup("Submitted", "success");
          if (!documentId) {
            setDocumentId(data.data.insertedId);
          }
        } else {
          setSaveState("failed");
          CreatePopup("Unable to submit, try again.", "error");
        }
  
        setTimeout(() => {
          setSaveState("default");
        }, 1500);
      });
    }

  function handleSave() {
    if(!subject) {
      CreatePopup("Select a subject before saving", "error")
      return;
    }
    CreatePopup("Saving Progress", "info");
    saveSubjectDraft({
      userId,
      documentId,
      sendData: { subject, description, availability, banner, questions },
    }).then((data) => {
      if (data.success) {
        setSaveState("success");
        CreatePopup("Saved successfully", "success");
        if (!documentId) {
          setDocumentId(data.data.insertedId);
        }
      } else {
        setSaveState("failed");
        CreatePopup("Unable to save, try again.", "error");
      }

      setTimeout(() => {
        setSaveState("default");
      }, 1500);
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 space-y-10">
      <div className="flex flex-col z-10 gap-6 shadow-xl h-fit p-4 lg:sticky top-6 self-start bg-black/3 rounded-2xl w-fit">
        <CompletionChecklist
          titleComplete={titleComplete}
          description={descriptionLength}
          descriptionComplete={descriptionComplete}
          availabilityComplete={availabilityComplete}
          bannerComplete={bannerComplete}
          totalQuizzes={totalQuizzes}
          DESCRIPTION_LENGTH={DESCRIPTION_LENGTH}
          QUIZ_COMPLETED={QUIZ_COMPLETED}
        />
        <ActionsBar
          allComplete={allComplete}
          handleSubmit={handleSubmit}
          handleSave={handleSave}
          saveState={saveState}
          submitState={submitState}
          documentId={documentId}
        />
      </div>

      <motion.div
        layout
        transition={{ layout: { type: "spring", stiffness: 250, damping: 30 } }}
        className="lg:col-span-3 p-4 bg-black/3 shadow rounded-2xl"
      >
        <h1 className="text-xl font-bold mb-4 select-none">Offer & Quiz</h1>

        {/* Tabs */}
        <div className="flex gap-4 border-b mb-6">
          <button
            onClick={() => setActiveTab("offer")}
            className={`px-4 py-2 transition-colors duration-200 ${
              activeTab === "offer"
                ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                : "text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 cursor-pointer"
            }`}
          >
            Offer Details
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 transition-colors duration-200 ${
              activeTab === "quiz"
                ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                : "text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 cursor-pointer"
            }`}
          >
            Quiz Editor
          </button>
        </div>

        {/* Tab Content with smooth spring animation */}
        <AnimatePresence mode="wait">
          {activeTab === "offer" && (
            <motion.div
              key="offer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
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
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              <QuizEditor questions={questions} setQuestions={setQuestions} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
