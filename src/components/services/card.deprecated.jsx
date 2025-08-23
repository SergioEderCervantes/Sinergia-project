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
        <div className="img-container">
            <div className=" bg-gunmetal text-gray-300 aspect-video grid place-items-center">
                <span>Image or video Placeholder</span>
                {/* <img src="" alt="" /> */}
            </div>
        </div>
        <button className="bg-lavender-web/60 mt-4 hover:bg-lavender-web transition-colors w-full rounded-2xl px-8 py-2 text-xl font-semibold">
            Learn More
        </button>
    </div>
);
}
