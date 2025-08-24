import Card from "./card";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-2 py-12 md:p-12"
    >
      <h3 className="text-gunmetal text-4xl font-semibold">Nosotros</h3>
      <p className="text-gunmetal w-full text-center text-xl font-semibold md:w-1/2">
        Somos una agencia de marketing dinámica dedicada a ayudar a las empresas
        a lograr un crecimiento extraordinario a través de estrategias innovadoras y
        soluciones basadas en datos.
      </p>
      <div className="my-8 flex w-full flex-wrap justify-around">
        <Card image={"abt1.jpg"} />
        <Card image={"abt2.jpg"} />
        <Card image={"abt3.jpg"} />
      </div>
    </section>
  );
}
