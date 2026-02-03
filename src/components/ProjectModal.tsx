"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Clock, Users, MapPin, Lightbulb, Target } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  duration: string;
  participants: number;
  location: string;
  howCreated: string;
  where: string;
  why: string;
  goals: string[];
  videoUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  if (!project) return null;
  
  const photos = Array.from({ length: 15 }, (_, i) => `https://images.unsplash.com/photo-1500001001?w=800&h=600&fit=crop&q=80&t=${i}`);
  
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
          <h2 className="text-3xl font-bold text-blue-900" style={{ fontFamily: "var(--font-display)" }}>{project.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-700">{project.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-900">Duração</span>
              </div>
              <p className="text-gray-700">{project.duration}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-900">Participantes</span>
              </div>
              <p className="text-gray-700">{project.participants}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <span className="font-bold text-yellow-900">Localização</span>
              </div>
              <p className="text-gray-700">{project.location}</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-6 rounded-xl mb-6 border-2 border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-red-600" />
              <h3 className="font-bold text-red-900 text-lg">Vídeo Explicativo - Como foi criado?</h3>
            </div>
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`Vídeo explicativo do projeto ${project.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
            <p className="text-gray-700 text-sm mt-4">{project.howCreated}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                <h3 className="font-bold text-gray-900">Detalhes do Processo</h3>
              </div>
              <p className="text-gray-700 text-sm">{project.howCreated}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-gray-900">Onde foi desenvolvido?</h3>
              </div>
              <p className="text-gray-700 text-sm">{project.where}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-blue-900">Por que foi criado?</h3>
            </div>
            <p className="text-gray-700 text-sm">{project.why}</p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Finalidades
            </h3>
            <ul className="space-y-2">
              {project.goals.map((goal, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Galeria de Fotos</h3>
            <div className="relative bg-gray-200 rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
              <Image
                src={photos[currentPhotoIndex]}
                alt={`Foto ${currentPhotoIndex + 1} do projeto ${project.title}`}
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
    </div>
  );
}
