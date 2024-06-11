import { useState } from "react";

interface Option {
  initialStep: string;
}

export const useFunnel = (steps: (string | number)[], option?: Option) => {
  /**step 초기화 */
  const initializeStep = () => {
    const initialStep = option?.initialStep;
    if (initialStep) {
      return initialStep;
    } else {
      return steps[0];
    }
  };

  const [currentStep, setCurrentStep] = useState<string | number>(() =>
    initializeStep()
  );

  /**현재 step index */
  const index = steps.indexOf(currentStep);

  const [progress, setProgress] = useState(1);

  /**이전 step 이동 */
  const changePrevStep = () => {
    setCurrentStep(steps[index - 1]);
    setProgress((step) => step - 1);
  };

  /**다음 step 이동 */
  const changeNextStep = () => {
    setCurrentStep(steps[index + 1]);
    setProgress((step) => step + 1);
  };

  return {
    currentStep,
    progress,
    initializeStep,
    changeNextStep,
    changePrevStep,
    steps,
  };
};
