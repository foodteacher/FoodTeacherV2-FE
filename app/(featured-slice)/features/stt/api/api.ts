import { instance } from "@/app/(featured-slice)/shared/auth/api/SharedApi";

export const postSpeechToText = async (text: string) => {
  const res = await instance.post("https://api2.foodteacher.xyz/voice/tts", {
    responseType: "blob",
    params: {
      text,
    },
  });

  const href = URL.createObjectURL(res.data);

  const audio = new Audio();
  audio.src = href;
  audio.play();

  return res.data;
};
