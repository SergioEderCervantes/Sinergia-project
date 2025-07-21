import Button from "../button";

export default function Card({ icon: Icon, title }) {
return (
    <div className="border-gunmetal/10 text-gunmetal bg-lavender-web mx-10 my-12 w-full rounded-2xl border p-4 sm:w-3/4 md:w-2/4 md:min-w-100 lg:w-1/4">
        <div className="icon-container bg-gunmetal -mt-12 mb-4 aspect-square w-15 rounded-2xl grid place-items-center">
            <Icon className="text-white text-4xl" />
        </div>
        <h4 className="text-xl font-semibold my-4">{title}</h4>
        <p className="my-4">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo, sed repellendus quod tenetur animi expedita blanditiis facere
            consectetur, repellat, incidunt inventore enim numquam fugit quasi
            magnam eum veniam omnis necessitatibus.
        </p>
        <ul className="my-4 space-y-2 list-disc list-inside pl-2 text-gunmetal/80">
            <li className="px-3 hover:bg-lavender-web-300 transition-colors">Interesting thing 1</li>
            <li className="px-3 hover:bg-lavender-web-300 transition-colors">Interesting thing 2</li>
            <li className="px-3 hover:bg-lavender-web-300 transition-colors">Interesting thing 3</li>
            <li className="px-3 hover:bg-lavender-web-300 transition-colors">Interesting thing 4</li>
        </ul>
        <button className="bg-lavender-web-300 mt-4 hover:bg-lavender-web-700 transition-colors w-full rounded-2xl px-8 py-2 text-xl font-semibold">
            Learn More
        </button>
    </div>
);
}
