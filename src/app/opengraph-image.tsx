import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "SmileFrame - A Farcaster Frame for Daily Happiness";
export const size = {
  width: 1200,
  height: 630, // Standard OpenGraph image size
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative" style={{
        backgroundColor: '#f3e8ff', // Light purple background
        backgroundImage: 'linear-gradient(135deg, #f3e8ff 0%, #fbcfe8 100%)'
      }}>
        <div tw="flex flex-col items-center text-center p-12">
          <h1 tw="text-8xl font-bold text-purple-900 mb-8">😊 {PROJECT_TITLE}</h1>
          <p tw="text-4xl text-purple-800 max-w-2xl">{PROJECT_DESCRIPTION}</p>
          <div tw="mt-12 flex items-center">
            <span tw="text-2xl text-purple-700 mr-4">Powered by</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#855DCD"/>
              <path d="M12.5 18.5L16 22L19.5 18.5H22.5L16 25L9.5 18.5H12.5ZM16 7L22.5 13.5H19.5L16 10L12.5 13.5H9.5L16 7Z" fill="white"/>
            </svg>
            <span tw="text-2xl font-bold text-purple-700 ml-2">Farcaster</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
