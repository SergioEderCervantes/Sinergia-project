import Card from "./card";

export default function AboutUs() {
  return (
    <section id="about" className="flex flex-col items-center p-12">
      <h3 className="text-4xl">About Us</h3>
      <p className="w-full text-center text-xl md:w-1/2">
        We're a dynamic marketing startup dedicated to helping buissnesses
        achieve extraordinary growtgh throught innovative strategies and
        data-driven solutions
      </p>
      <div className="my-8 flex w-full flex-wrap justify-around">
        <Card image={"abt1.jpg"} />
        <Card image={"abt2.jpg"}/>
        <Card image={"abt3.jpg"}/>
      </div>
    </section>
  );
}
