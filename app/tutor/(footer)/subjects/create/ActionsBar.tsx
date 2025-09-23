"use client";

type Props = {
  allComplete: boolean;
};

export default function ActionsBar({ allComplete }: Props) {
  return (
    <div className="md:col-span-3 flex flex-wrap gap-4 justify-end items-center w-full">
      <button className="px-6 py-2 w-full rounded-lg bg-red-500 text-white">
        Cancel
      </button>
      <button className="px-6 py-2 w-full rounded-lg bg-yellow-500 text-white">
        Save Draft
      </button>
      <button
        className={`px-6 py-2 w-full rounded-lg ${
          allComplete
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!allComplete}
      >
        {allComplete ? "Submit" : "Requirements not met"}
      </button>
    </div>
  );
}
