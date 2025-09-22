export default function SkeletonFAQs() {
  const numberOfDivs = 3;

  return (
    <>
      {Array.from({ length: numberOfDivs }).map((_, index) => (
        <div className="skeleton h-14 w-full bg-black/20 overflow-hidden rounded-lg"></div>
      ))}
    </>
  );
}
