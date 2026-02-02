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
    href: "https://www.aau.dk",
  },
  {
   imageSrc: unox,
    title: "Uno-X",
    href: "https://www.aau.dk",
  },
  {
  imageSrc: unox_no,
    title: "Uno-X NO",
    href: "https://www.aau.dk",
  },
   {
    imageSrc: brandhouse,
    title: "Brandhouse",
    href: "https://www.aau.dk",
  }
  
];

  return (
     <div className="module-wrap module-inner">
      <CardGrid items={cards} />
    </div>
  );
};

export default Projects;