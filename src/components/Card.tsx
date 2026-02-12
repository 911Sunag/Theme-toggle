
import { Lock } from "lucide-react";
import { PawPrint } from 'lucide-react';
// import { Activity } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Card = () => {
  return (
    <section
      className="
    relative
    min-h-110 w-65 rounded-2xl p-5
    flex flex-col justify-between
    overflow-hidden

    /* GOLD (Light Theme) */
    bg-linear-to-br from-[#FFD700] via-[#E6B800] to-[#B8860B]
    shadow-[0_10px_30px_rgba(212,175,55,0.6)]

    /* SILVER (Dark Theme) */
    dark:bg-linear-to-br dark:from-[#E5E7EB] dark:via-[#9CA3AF] dark:to-[#6B7280]
    dark:shadow-[0_10px_30px_rgba(180,180,180,0.35)]
  ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1  w-20 p-1 rounded-sm bg-black/40 text-yellow-200 dark:text-gray-100">
          <Lock size={8} className="" />
          <p className="text-[8px] font-semibold">SECURE ACCESS</p>
        </div>
        <AnimatedThemeToggler className="text-[#E5E7EB] dark:text-[#FFD700]" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <img
          src=".\src\assets\melanie-andersen-4imykgmUTSs-unsplash.jpg"
          alt="cat"
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold text-black drop-shadow-sm dark:text-white">Oliver</h1>
        <p className="font-bold text-black dark:text-white">Cat</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start space-x-1 justify-center min-w-20 p-1 rounded-sm">
          <small className="text-[8px] font-bold text-black">ID NUMBER</small>
          <p className="text-[10px] font-extrabold tracking-widest text-black dark:text-white">
            835-6854-9885
          </p>
        </div>
        <PawPrint className="text-black" />
      </div>
    </section>
  );
};

export default Card;
