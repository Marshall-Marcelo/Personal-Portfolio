interface TechStackImageProps {
  image: string;
}

interface TechStackSectionProps {
  sectionName: string;
  images: string[];
}

const TechStackImage = ({ image }: TechStackImageProps) => {
  if (image === "/src/assets/express.webp") {
    return <img className="border border-gray-300 rounded-sm p-0.5 w-30 h-12" src={image} />;
  }

  return <img className="border border-gray-300 rounded-sm p-1 size-12" src={image} />;
};

export const TechStackSection = ({ sectionName, images }: TechStackSectionProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-md font-light">{sectionName}</h3>
      <div className="flex gap-1">
        {images.map((image, i) => {
          return <TechStackImage key={i} image={image} />;
        })}
      </div>
    </div>
  );
};
