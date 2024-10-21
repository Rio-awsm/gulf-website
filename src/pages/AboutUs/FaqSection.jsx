import React, { useState } from "react";
import Questions from "../../components/Questions";
import part from "/assets/part.webp";

function FaqSection({view}) {
  const [questions] = useState([
    {
      question:
        "What documents are required to get pre-approved?",
      answer:
        "Documents required can differ depending on your circumstances, but our mortgage advisors will be able to discuss this with you. In general we will require the following documents for your mortgage: Copy of your passport, visa and Emirates ID; Salary certificate addressed to ‘Mortgage Finder’; Last six months payslips and bank statements; Latest credit card statements; Proof of your current address – copy of DEWA bill or tenancy agreement. ",
    },
    {
      question:
        "Which bank should I choose?",
      answer:
        "At the beginning you don’t need to choose, but let us explain why. When approaching a bank directly they will not necessarily have the best mortgage offer for your situation and they will be focused on showing you the benefits of their product. If you consult a mortgage broker, like Mortgage Finder, our team are able to look at mortgage products across the UAE from different banks to offer you the best one for your situation and also share the pros and cons of them with you, so you can make an informed decision. ",
    },
    
    {
      question:
        "Should I get life and building insurances?",
      answer:
        "Life and building insurances are necessary under any circumstances. Without it, you won't be granted a mortgage. ",
    },
    {
      question:
        "Can I get a mortgage if I live outside UAE?",
      answer:
        "Yes, it is possible to get a mortgage in the UAE even if you live outside of the country. Non-residents might be required to provide a 50% down payment. ",
    },
    {
      question:
      "How long will it take to get my pre-approval?",
      answer:
        "The mortgage pre-approval process is the first step in getting a mortgage and can take up to 5 working days. However, it is worth noting that securing pre-approval may take longer depending on the bank used and the complexity of your case. Once pre-approval has been secured and you have settled on a property that you want to purchase, we manage the rest of the process on your behalf until completion. ",
    },
    {
      question:
        "What happens if I miss a mortgage payment?",
      answer:
        "If you do not repay the debt within the specified period, the bank will additionally require you to pay a penalty. It is calculated from the day following the payment due date. Filing a lawsuit and property seizure are extreme measures. The bank will resort to them if the borrower does not repay the debt for an extended period of time. ",
    },
    {
      question:
        "What should i do if I begin to struggle to repay my mortgage?",
      answer:
        "Banks will often do what they can to support the borrower and there 'may' be plans/arrangements that you can negotiate to help manage the situation. However in all circumstances it is important to get in touch with them as early as possible to avoid penalties and missed payments. The following circumstances are genuinely considered valid reasons for banks to consider offering help: Reduction or termination of employment due to health reasons or company closure. Salary reduction. Forced medical expenses for the borrower or their family. Emergency situations causing significant financial damage.",
    },
    {
      question:
        "Can I close the mortgage ahead of schedule?",
      answer:
        "In general most banks will charge a penalty for settling the mortgage early, but this will vary from one bank to another. In most cases the penalty will range from 0% – 3% of the outstanding mortgage balance but this will depend on whether the mortgage is being repaid by your own funds, being sold or being refinanced by another bank. ",
    },
  ]);
  return (
    <div>
      <div className={`relative ${view}`}>
        <img src={part} alt="" className="object-cover w-full" />
        <h1 className="absolute inset-0 flex font-bebas items-center text-center bottom-[20%] justify-center lg:text-8xl text-4xl text-white z-10">
        YOUR TRUSTED <br />REAL ESTATE  <br /> PARTNER IN DUBAI.{" "}
        </h1>
      </div>

      <div>
        <h1 className="font-bebas lg:text-8xl text-center text-5xl text-[#024959] mt-6">
          Frequently Asked Questions
        </h1>
        <div className="mt-12 space-y-8 lg:grid lg:grid-cols-1 px-2 lg:px-0 ">
          {questions.map((question, index) => (
            <Questions
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
