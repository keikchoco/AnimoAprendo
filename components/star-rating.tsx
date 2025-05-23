export default function RatingGFX(rating: Number) {
  return (
    <div className="rating rating-half">
      <div
        className="rating-hidden"
        aria-current={rating == 0.0 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-1 bg-green-700"
        aria-label="0.5 star"
        aria-current={rating == 0.5 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-2 bg-green-700"
        aria-label="1.0 star"
        aria-current={rating == 1.0 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-1 bg-green-700"
        aria-label="1.5 star"
        aria-current={rating == 1.5 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-2 bg-green-700"
        aria-label="2.0 star"
        aria-current={rating == 2.0 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-1 bg-green-700"
        aria-label="2.5 star"
        aria-current={rating == 2.5 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-2 bg-green-700"
        aria-label="3.0 star"
        aria-current={rating == 3.0 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-1 bg-green-700"
        aria-label="3.5 star"
        aria-current={rating == 3.5 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-2 bg-green-700"
        aria-label="4.0 star"
        aria-current={rating == 4.0 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-1 bg-green-700"
        aria-label="4.5 star"
        aria-current={rating == 4.5 ? "true" : "false"}
      ></div>
      <div
        className="mask mask-star-2 mask-half-2 bg-green-700"
        aria-label="5.0 star"
        aria-current={rating == 5.0 ? "true" : "false"}
      ></div>
    </div>
  );
}
