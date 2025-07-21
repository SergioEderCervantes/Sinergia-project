export default function Card({ title, image, description, label }) {
  return (
    <div className="border-gunmetal/10 text-gunmetal mx-10 my-8 h-110 w-full rounded-2xl border bg-white sm:w-3/4 md:h-100 md:w-2/4 md:min-w-100 lg:w-1/4">
      <div className="img-container grid h-1/2 place-items-center rounded-t-2xl bg-gray-600">
        {/* <img src="{image}" alt="Img" /> */}
        <span className="text-xl text-white">Image placeholder</span>
      </div>
      <div className="info flex h-1/2 flex-col justify-between p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
        <span className="bg-teal-500 w-fit rounded-full px-4 py-1 font-semibold text-white">
          {label}
        </span>
      </div>
    </div>
  );
}
