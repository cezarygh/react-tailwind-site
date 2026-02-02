import { Link } from "react-router-dom";

type ImgTxtProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  link?: string;
};

const ImgTxt = ({
  title,
  text,
  imageSrc,
  imageAlt = "",
  reverse = false,
  link,
}: ImgTxtProps) => {
  const CardContent = (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-lg transition hover:shadow-2xl ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg object-cover shadow-md"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );

  return link ? <Link to={link}>{CardContent}</Link> : CardContent;
};

export default ImgTxt;