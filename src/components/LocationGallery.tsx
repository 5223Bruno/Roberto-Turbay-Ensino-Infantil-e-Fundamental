"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LocationGalleryProps {
  location: string | null;
  onClose: () => void;
}

const locationPhotos: Record<string, string[]> = {
  "Biblioteca": Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop&q=80&t=${i}`),
  "Refeitório": Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-1504674900967-a8f32de4da23?w=800&h=600&fit=crop&q=80&t=${i}`),
  "Laboratório de Informática": Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80&t=${i}`),
  "Parquinho": Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=80&t=${i}`),
  "Quadra de Esportes": Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80&t=${i}`),
  "Salas de Aula": Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-1427504494785-cdafb3d3b798?w=800&h=600&fit=crop&q=80&t=${i}`),
};

export function LocationGallery({ location, onClose }: LocationGalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  if (!location) return null;
  
  const photos = locationPhotos[location] || [];
  
  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };
  
  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };
  
  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b flex justify-between items-center p-6">
          <h2 className="text-3xl font-bold text-blue-900" style={{ fontFamily: "var(--font-display)" }}>
            {location}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="relative bg-gray-200 rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
            <Image
              src={photos[currentPhotoIndex]}
              alt={`Foto ${currentPhotoIndex + 1} de ${location}`}
              fill
              className="object-cover"
            />
            <button onClick={prevPhoto} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextPhoto} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              Foto {currentPhotoIndex + 1} de {photos.length}
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPhoto(idx)}
                className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 transition-all ${
                  idx === currentPhotoIndex ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                <Image
                  src={photos[idx]}
                  alt={`Miniatura ${idx + 1}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
