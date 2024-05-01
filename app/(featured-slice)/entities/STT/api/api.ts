import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";

export const postSpeechToText = async (text: string) => {
  const res = await instacne.post("/", text);
  return res.data;
};
