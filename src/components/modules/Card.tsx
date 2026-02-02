type CardProps = {
  imageSrc: string;
  title: string;
  href: string;
};

const Card = ({ imageSrc, title, href }: CardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        block
        rounded-xl
        overflow-hidden
        shadow-md
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
            group-hover:brightness-50
          "
        />

        {/* Title overlay */}
        <div className="
          absolute inset-0
          flex items-center justify-center
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        ">
          <h3 className="text-white text-xl font-bold text-center px-4">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};

export default Card;