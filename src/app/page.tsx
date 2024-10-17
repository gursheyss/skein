import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto max-w-2xl px-10">
      <Input />
      <Button className="bg-gradient-to-br from-[#A02BE4] via-transparent to-[#4F46E5] flex items-center gap-2">
        <SparkleIcon />
        <span>Send</span>
      </Button>
    </div>
  );
}

const SparkleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-4 h-4"
    >
      <defs>
        <style>
          {`
            @keyframes sparkle {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.6; transform: scale(0.9); }
            }
            .sparkle {
              fill: white;
              transform-origin: center;
            }
            .sparkle-1 { animation: sparkle 1.5s infinite; }
            .sparkle-2 { animation: sparkle 1.5s infinite 0.5s; }
          `}
        </style>
      </defs>
      <path
        d="M384 255.625C384 249.625 380.625 244 375.125 241.25L262.625 184.875L206.25 72.125C200.875 61.25 183.125 61.25 177.75 72.125L121.375 184.875L8.875 241.25C3.375 244 0 249.625 0 255.625C0 261.75 3.375 267.25 8.875 270L121.375 326.375L177.75 439.125C180.375 444.5 185.999 448 192 448C197.999 448 203.625 444.5 206.25 439.125L262.625 326.375L375.125 270C380.625 267.25 384 261.75 384 255.625Z"
        className="sparkle sparkle-1"
      />
      <path
        d="M324.375 103.125L384 128L408.875 187.625C410.25 190.25 413 192 416 192S421.75 190.25 423.125 187.625L448 128L507.625 103.125C510.25 101.75 512 99 512 96S510.25 90.25 507.625 88.875L448 64L423.125 4.375C421.75 1.75 419 0 416 0S410.25 1.75 408.875 4.375L384 64L324.375 88.875C321.75 90.25 320 93 320 96S321.75 101.75 324.375 103.125ZM507.625 408.875L448 384L423.125 324.375C421.75 321.75 419 320 416 320S410.25 321.75 408.875 324.375L384 384L324.375 408.875C321.75 410.25 320 413 320 416S321.75 421.75 324.375 423.125L384 448L408.875 507.625C410.25 510.25 413 512 416 512S421.75 510.25 423.125 507.625L448 448L507.625 423.125C510.25 421.75 512 419 512 416S510.25 410.25 507.625 408.875Z"
        className="sparkle sparkle-2"
      />
    </svg>
  );
};
