import React, { useState } from "react";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubscribe = () => {
    //Email validation and subscribe logic
    console.log(userEmail);
  };

  return (
    <div className="bg-amber-950 py-28 px-16">
      <h2 className="text-[48px] leading-[120%] font-bold max-w-[768px] text-left text-white">
        Get Exclusive Access to Limited-Edition Coffee
      </h2>
      <p className="mt-6 text-white text-[18px] font-normal leading-[150%]">
        Subscribe to our blog and be the first to know about our exclusive
        coffee releases.
      </p>
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          className="p-3 w-[394px] rounded-none"
          placeholder="email@gmail.com"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
        <button
          type="button"
          onClick={handleSubscribe}
          className="py-3 px-6 rounded-none bg-white text-amber-950 hover:bg-white hover:opacity-50 font-medium"
        >
          Subscribe
        </button>
      </div>
      <span className="mt-4 text-white text-[12px] leading-[150%]">
        By joining, you agree to our Terms and Conditions.
      </span>
    </div>
  );
};

export default Newsletter;
