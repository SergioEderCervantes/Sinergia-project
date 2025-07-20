import Card from "./card";

export default function Projects() {
  return (
    <section className="bg-lavender-web-200 flex flex-col items-center py-5 xl:p-12">
      <h2 className="text-gunmetal-600 my-2 text-4xl">Our Projects</h2>
      <span className="text-gunmetal-600 w-full text-center text-xl md:w-1/2">
        Successful campaigns that drove to real results for our clients
      </span>
      <div className="flex w-full justify-evenly flex-wrap">
        <Card
          image={""}
          title={"TechCorp Digital Transformation"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni quisquam nostrum eum? Iusto nobis nostrum ipsa harum?."
          }
          label={"Digital Marketing"}
        />
        <Card
          image={""}
          title={"RetailPlus Social Media Boost"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni quisquam nostrum eum? Iusto nobis nostrum ipsa harum?."
          }
          label={"Social Media"}
        />
        <Card
          image={""}
          title={"StartupX Brand Lauch"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni quisquam nostrum eum? Iusto nobis nostrum ipsa harum?."
          }
          label={"Branding"}
        />
      </div>
    </section>
  );
}
