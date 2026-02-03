import CardGrid from "@/components/modules/CardGrid";
import magusfilm from "@/assets/img/magusfilm.jpg";
import unox from "@/assets/img/unox.jpg";
import unox_no from "@/assets/img/unox_no.jpg";
import brandhouse from "@/assets/img/brandhouse.jpg";

const Projects = () => {

const cards = [
  {
    imageSrc: magusfilm,
    title: "Magus Film",
    href: "https://magusfilm.com/frontpage/",
  },
  {
   imageSrc: unox,
    title: "Uno-X",
    href: "https://www.unoxmobility.dk/privat",
  },
  {
  imageSrc: unox_no,
    title: "Uno-X NO",
    href: "https://unox.no/",
  },
   {
    imageSrc: brandhouse,
    title: "Brandhouse",
    href: "https://www.brandhouse.com/",
  }
  
];

  return (
     <div className="module-wrap module-inner">
      <CardGrid items={cards} />
    </div>
  );
};

export default Projects;