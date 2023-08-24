import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Home() {
  return (
    <div className="w-full">
      <div className=" flex flex-col items-center justify-center h-screen space-y-10">
        <h1 className=" text-4xl font-mono font-bold">
          Connect your wallet with RainbowKit
        </h1>
        <ConnectButton />
      </div>
    </div>
  );
}
