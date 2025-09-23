"use client";

type Props = {
  titleComplete: boolean;
  descriptionComplete: boolean;
  availabilityComplete: boolean;
  bannerComplete: boolean;
  totalQuizzes: number;
  description: number;
};

export default function CompletionChecklist({
  titleComplete,
  descriptionComplete,
  availabilityComplete,
  bannerComplete,
  totalQuizzes,
  description
}: Props) {
  const items = [
    { label: "Title", complete: titleComplete },
    { label: `Description ${description}/80`, complete: descriptionComplete },
    { label: "Schedule Availability", complete: availabilityComplete },
    { label: "Upload Banner", complete: bannerComplete },
    {
      label: `Quizzes created (${totalQuizzes}/30)`,
      complete: totalQuizzes >= 30,
    },
  ];

  return (
    <div className="md:col-span-1 text-lg">
      <h3 className="font-semibold mb-3">Completion Checklist</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-2 ${
              item.complete ? "text-green-600" : "text-red-500"
            }`}
          >
            {item.complete ? "✔️" : "❌"} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
