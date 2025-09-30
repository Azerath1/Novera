import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/background_auth03.jpg"
        alt="Authentication background"
        fill
        priority
        quality={85}
        className="object-cover"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
      {/* Затемнение для лучшей читаемости */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
    </div>
  );
}
