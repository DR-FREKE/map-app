import StepForm from "@/components/forms/stepform";
import { AppBreadcrumb } from "@/components/global/app-breadcrumb";
import StepIndicator from "@/components/global/step-indicator";
import React from "react";

const ResponsePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AppBreadcrumb />
      <div className="flex flex-col gap-8">
        <StepIndicator />
        <StepForm />
      </div>
    </div>
  );
};

export default ResponsePage;
