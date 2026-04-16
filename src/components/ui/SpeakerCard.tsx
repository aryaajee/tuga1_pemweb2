import React from "react";

interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-6 group">
      {/* Foto Sepatu dengan Border Lingkaran */}
      <div className="relative z-10">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-64 rounded-full border-[8px] border-black mx-auto 
                     group-hover:scale-105 transition-transform duration-300 
                     object-cover shadow-lg"
        />
      </div>

      {/* Card Informasi */}
      <div
        className="flex flex-col items-center w-full p-6 rounded-xl relative 
                   border-2 border-black bg-white
                   shadow-xl shadow-black/20 
                   group-hover:shadow-2xl group-hover:shadow-black/40 
                   transition-all duration-300 overflow-hidden"
      >
        {/* Overlay Hover */}
        <div
          className="absolute inset-0 bg-red-600/0 
                     group-hover:bg-red-600/10 
                     transition-all duration-300"
        ></div>

        {/* Konten Teks */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
          <h3 className="text-2xl font-semibold text-black">
            {name}
          </h3>
          <p className="text-sm text-gray-600">
            {role}
          </p>
        </div>

        {/* Aksen Garis Merah di Bawah */}
        <div className="mt-4 w-16 h-1 bg-red-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default SpeakerCard;
