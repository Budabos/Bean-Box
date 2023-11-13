import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubscribe = () => {
    //Email validation and subscribe logic
    if (userEmail === "") return;
    toast.success("Newsletter subscribed successfully");
    return;
  };

  return (
    <div className="tw-py-28 tw-px-16">
      <h2 className="tw-text-[48px] tw-leading-[120%] tw-font-bold tw-max-w-[768px] tw-text-left tw-text-black">
        Get Exclusive Access to Limited-Edition Coffee
      </h2>
      <p className="tw-mt-6 tw-text-black tw-text-[18px] tw-font-normal tw-leading-[150%]">
        Subscribe to our blog and be the first to know about our exclusive
        coffee releases.
      </p>
      <div className="tw-flex tw-items-center tw-gap-1.5">
        <input
          type="email"
          className="tw-p-3 tw-w-[394px] tw-rounded-none"
          placeholder="email@gmail.com"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
        <button
          type="button"
          onClick={handleSubscribe}
          className="tw-py-3 tw-px-6 tw-rounded-none tw-bg-green-500 tw-border tw-border-black tw-text-white hover:tw-bg-green-300 active:tw-opacity-50 tw-hover:tw-opacity-50 tw-font-medium"
        >
          Subscribe
        </button>
      </div>
      <span className="tw-mt-4 tw-text-black tw-text-[12px] tw-leading-[150%]">
        By joining, you agree to our Terms and Conditions.
      </span>
    </div>
  );
};

export default Newsletter;
