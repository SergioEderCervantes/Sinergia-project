export default function Card({ title, image, description, label }) {
  return (
    <div className="border-gunmetal/10 text-gunmetal my-8 h-110 md:h-100 w-full sm:w-3/4 md:w-2/4 lg:w-1/4 md:min-w-100 mx-10 rounded-2xl border bg-white">
      <div className="img-container grid h-1/2 place-items-center rounded-t-2xl bg-gray-600">
        {/* <img src="{image}" alt="Img" /> */}
        <span className="text-xl text-white">Image placeholder</span>
      </div>
      <div className="info p-4 flex flex-col justify-between h-1/2">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
        <span className="px-4 py-1 bg-lavender-web-600 w-fit rounded-full font-semibold">{label}</span>
      </div>
    </div>
  );
}
