"use client"
import Image from 'next/image'
import styles from './page.module.css'


import {Box} from "@chakra-ui/layout";
import {Button, KaKaoButtonIcon} from "@/app/(featured-slice)/shared/component";

export default function Home() {


    const redirect_uri =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000/oauth"
            : "https://foodteacher.xyz/oauth";

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

    const signUpKakaoHandler = () => {
        window.location.href = kakaoURL;
    };

    return (
        <main>
            <Box>
                mainPage
            </Box>

            <Box onClick={() => signUpKakaoHandler()}>
                <KaKaoButtonIcon/>
            </Box>
        </main>
    )
}
