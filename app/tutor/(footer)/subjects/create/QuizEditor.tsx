"use client";

import { useState } from "react";

export type Question = {
  question: string;
  type: "multiple-choice" | "true-false" | "fill-in";
  options: string[];
  answer: string;
};

type Props = {
  questions: Question[];
  setQuestions: (val: Question[]) => void;
};

export default function QuizEditor({ questions, setQuestions }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", type: "multiple-choice", options: ["", ""], answer: "" },
    ]);
  };

  const updateQuestion = (idx: number, update: Partial<Question>) => {
    const updated = [...questions];
    updated[idx] = { ...updated[idx], ...update };
    setQuestions(updated);
  };

  const addOption = (idx: number) => {
    const updated = [...questions];
    updated[idx].options.push("");
    setQuestions(updated);
  };

  const removeOption = (qIdx: number, optIdx: number) => {
    const updated = [...questions];
    if (updated[qIdx].options.length > 2) {
      const removed = updated[qIdx].options[optIdx];
      updated[qIdx].options.splice(optIdx, 1);
      if (updated[qIdx].answer === removed) {
        updated[qIdx].answer = "";
      }
      setQuestions(updated);
    }
  };

  const confirmDelete = (idx: number) => {
    setDeleteIdx(idx);
    setShowModal(true);
  };

  const handleDelete = () => {
    if (deleteIdx !== null) {
      const updated = [...questions];
      updated.splice(deleteIdx, 1);
      setQuestions(updated);
      setDeleteIdx(null);
      setShowModal(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="font-semibold">Quiz Editor</h2>

      {questions.map((q, idx) => (
        <div key={idx} className="p-4 border rounded space-y-3">
          {/* Question Text */}
          <input
            type="text"
            placeholder={`Question ${idx + 1}`}
            value={q.question}
            onChange={(e) => updateQuestion(idx, { question: e.target.value })}
            className="w-full p-2 border rounded"
          />

          {/* Question Type Selector */}
          <select
            value={q.type}
            onChange={(e) => {
              const type = e.target.value as Question["type"];
              let reset: Partial<Question> = { type, answer: "" };
              if (type === "multiple-choice") reset.options = ["", ""];
              if (type !== "multiple-choice") reset.options = [];
              updateQuestion(idx, reset);
            }}
            className="w-full p-2 border rounded"
          >
            <option value="multiple-choice">Multiple Choice</option>
            <option value="true-false">True / False</option>
            <option value="fill-in">Fill in the Blank</option>
          </select>

          {/* Multiple Choice Editor */}
          {q.type === "multiple-choice" && (
            <div className="space-y-2">
              {q.options.map((opt, optIdx) => (
                <div key={optIdx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`correct-${idx}`}
                    checked={q.answer === opt}
                    onChange={() => updateQuestion(idx, { answer: opt })}
                    className="h-4 w-4"
                  />
                  <input
                    type="text"
                    placeholder={`Option ${optIdx + 1}`}
                    value={opt}
                    onChange={(e) => {
                      const updated = [...questions];
                      updated[idx].options[optIdx] = e.target.value;
                      setQuestions(updated);
                    }}
                    className="w-full p-2 border rounded"
                  />
                  {q.options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(idx, optIdx)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addOption(idx)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Add Option
              </button>
            </div>
          )}

          {/* True/False Selector */}
          {q.type === "true-false" && (
            <select
              value={q.answer}
              onChange={(e) => updateQuestion(idx, { answer: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Answer</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          )}

          {/* Fill in the Blank */}
          {q.type === "fill-in" && (
            <input
              type="text"
              placeholder="Correct Answer"
              value={q.answer}
              onChange={(e) => updateQuestion(idx, { answer: e.target.value })}
              className="w-full p-2 border rounded"
            />
          )}

          {/* Delete Question Button */}
          <button
            type="button"
            onClick={() => confirmDelete(idx)}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Delete Question
          </button>
        </div>
      ))}

      {/* Add Question Button */}
      <button
        type="button"
        onClick={addQuestion}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add Question
      </button>

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg space-y-4">
            <h3 className="text-lg font-semibold">Delete Question</h3>
            <p>Are you sure you want to delete this question?</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
