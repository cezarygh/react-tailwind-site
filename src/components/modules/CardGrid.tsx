import Card from "./Card";

type CardItem = {
  imageSrc: string;
  title: string;
  href: string;
};

type CardGridProps = {
  items: CardItem[];
};


const CardGrid = ({ items }: CardGridProps) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >

      {items.map((item, index) => (
        <Card
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default CardGrid;