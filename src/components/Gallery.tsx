
import { Image } from "lucide-react";

const Gallery = () => {
  const photos = [
    {
      src: "/gallery/photo1.jpg",
      alt: "Darpan at a tech conference",
      caption: "Speaking at Tech Conference 2023"
    },
    {
      src: "/gallery/photo2.jpg",
      alt: "Darpan working on a project",
      caption: "Working on a machine learning project"
    },
    {
      src: "/gallery/photo3.jpg",
      alt: "Darpan at graduation",
      caption: "Graduation day at Indiana University"
    },
    {
      src: "/gallery/photo4.jpg",
      alt: "Darpan with team members",
      caption: "With my development team at Hyphenova"
    },
    {
      src: "/gallery/photo5.jpg",
      alt: "Darpan hiking",
      caption: "Weekend hiking trip at Brown County State Park"
    },
    {
      src: "/gallery/photo6.jpg",
      alt: "Darpan at a coding event",
      caption: "Participating in the annual hackathon"
    }
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-portfolio-bright-pink/20 blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-portfolio-bright-orange/20 blur-[100px]"></div>
      </div>
      
      <div className="section-container z-10 relative">
        <h2 className="section-title">Photo Gallery</h2>
        
        <p className="text-lg text-white/80 mb-10 max-w-3xl">
          A glimpse into my professional journey, events, and moments that have shaped my career.
        </p>
        
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item hover:-translate-y-1">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="text-white text-center px-4">{photo.caption}</p>
              </div>
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-white/60 italic">
            Note: These are placeholder images. Replace with actual photos in the /public/gallery/ directory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
