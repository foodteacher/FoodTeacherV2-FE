import { useState } from "react";

interface Option {
  initialStep: string;
}

export const useFunnel = (steps: string[], option?: Option) => {
  /**step 초기화 */
  const initializeStep = () => {
    const initialStep = option?.initialStep;
    if (initialStep) {
      return initialStep;
    } else {
      return steps[0];
    }
  };

  const [currentStep, setCurrentStep] = useState<string>(() =>
    initializeStep()
  );

  /**현재 step index */
  const index = steps.indexOf(currentStep);

  const [progress, setProgress] = useState(0);

  /**이전 step 이동 */
  const onChangePrevStep = () => {
    setCurrentStep(steps[index - 1]);
    setProgress(100 / (steps.length + (index - 1)));
  };

  /**다음 step 이동 */
  const onChangeNextStep = () => {
    setCurrentStep(steps[index + 1]);
    setProgress(100 / (steps.length - (index + 1)));
  };

  return {
    currentStep,
    progress,
    initializeStep,
    onChangeNextStep,
    onChangePrevStep,
  };
};
