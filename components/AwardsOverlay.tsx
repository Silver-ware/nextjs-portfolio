import Image from "next/image";

export default function AwardsOverlay({
  image,
  onClose,
}: {
  image: string;
  onClose: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center sm:backdrop-blur-xs mobile-blur-xs bg-background/50"
      onClick={() => onClose(null)}
    >
      <button
        onClick={() => onClose(null)}
        className="cursor-pointer hover:scale-110 absolute top-6 right-6 text-title text-2xl font-extrabold"
      >
        ✕
      </button>
      <div className="relative max-w-[70vw] max-h-[85vh] flex items-center justify-center">
        <Image
          src={image}
          alt="awards-image"
          width={1200}
          height={800}
          className="object-contain h-auto w-auto max-h-[85vh] max-w-[70vw] rounded-lg border border-foreground"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
