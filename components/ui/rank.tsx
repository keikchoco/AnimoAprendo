"use client";

export default function TutorRank({ rank }: { rank: number }) {
  if (rank >= 40) {
    return (
      <div className="ml-auto flex items-center bg-cyan-400/80 px-2 py-1 rounded-full text-xs font-semibold uppercase">
        <span>Platinum</span>
      </div>
    );
  } else if (rank >= 30) {
    return (
      <div className="ml-auto flex items-center bg-yellow-400/80 px-2 py-1 rounded-full text-xs font-semibold uppercase">
        <span>Gold</span>
      </div>
    );
  } else if (rank >= 20) {
    return (
      <div className="ml-auto flex items-center bg-neutral-400/80 px-2 py-1 rounded-full text-xs font-semibold uppercase">
        <span>Silver</span>
      </div>
    );
  } else if (rank >= 10) {
    return (
      <div className="ml-auto flex items-center bg-yellow-700/80 px-2 py-1 rounded-full text-xs font-semibold uppercase">
        <span>Bronze</span>
      </div>
    );
  } else {
    return (
      <div className="ml-auto flex items-center bg-gray-400/80 px-2 py-1 rounded-full text-xs font-semibold uppercase">
        <span>Iron</span>
      </div>
    );
  }
}
