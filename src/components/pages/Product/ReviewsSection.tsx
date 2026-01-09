import ReviewSummary from "./ReviewSummary";
import ReviewList from "./ReviewList";
import { REVIEWS_LIST } from "@/constants";

export default function ReviewsSection() {
    return (
        <section className="bg-white w-full">
            <ReviewSummary />
            <div className="max-w-6xl mx-auto border-t border-gray-100">
                <ReviewList reviews={REVIEWS_LIST} />
            </div>
        </section>
    );
}
