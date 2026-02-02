type ImgBgFwTxtProps = {
  imageSrc: string;
  title?: string;
  subtitle?: string;
};

const ImgBgFwTxt = ({
  imageSrc,
  title,
  subtitle,
}: ImgBgFwTxtProps) => {
  return (
    <div
      className="w-full relative flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered text */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-fadeIn">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-2xl text-white opacity-90 animate-fadeIn delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImgBgFwTxt;