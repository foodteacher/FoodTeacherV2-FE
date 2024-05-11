import { instance } from "@/app/(featured-slice)/shared/api/SharedApi";

export const postSpeechToText = async (text: string) => {
  const res = await instance.post(
    "https://api2.foodteacher.xyz/voice/tts",
    { text },
    { responseType: "blob" }
  );

  const href = URL.createObjectURL(res.data);

  const audio = new Audio();
  audio.src = href;
  audio.play();

  return res.data;
};
