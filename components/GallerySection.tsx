
import React, { useState, useEffect, useCallback } from 'react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
    alt: "A serene forest path with sunlight filtering through the trees.",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    alt: "A tranquil lake reflecting a mountain range under a clear sky.",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    alt: "Misty mountains rising above a lush green valley.",
  },
  {
    src: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop",
    alt: "A calm, turquoise body of water surrounded by rocky shores.",
  },
  {
      src: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=2070&auto=format&fit=crop",
      alt: "A wooden boardwalk leading through grassy dunes to a beach.",
  },
  {
      src: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop",
      alt: "Sunlight shining through the canopy of a dense, green forest.",
  }
];

const Lightbox: React.FC<{
  images: { src: string; alt: string }[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ images, selectedIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
        />

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:top-2 md:right-2 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={onPrev}
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === null ? 0 : (prevIndex + 1) % galleryImages.length
      );
    }
  }, [selectedImageIndex]);

  const showPrevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === null ? 0 : (prevIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  }, [selectedImageIndex]);


  return (
    <section id="gallery" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">A Space for Calm</h2>
          <p className="text-lg text-brand-dark">
            Find a moment of peace and reflection in these scenes of natural serenity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group cursor-pointer" onClick={() => openLightbox(index)}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImageIndex !== null && (
        <Lightbox
          images={galleryImages}
          selectedIndex={selectedImageIndex}
          onClose={closeLightbox}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </section>
  );
};

export default GallerySection;
