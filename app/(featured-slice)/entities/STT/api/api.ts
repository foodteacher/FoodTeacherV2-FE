import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import axios from "axios";

export const postSpeechToText = async (text: string) => {
  const res = await axios.get("https://api2.foodteacher.xyz/voice/tts", {
    responseType: "blob",
    params: {
      text,
    },
  });

  const href = URL.createObjectURL(res.data);
  console.log(href);
  const audio = new Audio();
  audio.src = href;
  audio.play();

  return res.data;
};
