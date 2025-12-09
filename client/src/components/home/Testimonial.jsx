import React from "react";
import Title from "./Title";

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
            stroke="#1E4BAF"
            strokeMiterlimit="5.759"
            strokeLinecap="round"
          />
        </svg>
        <span>Simple Process</span>
      </div>
      <Title
        title="Build your resume"
        description="The simple process helps you create a professional resume in minutes with AI-powered tools"
      />
    </div>
  );
};
//1:01:01
export default Testimonial;
