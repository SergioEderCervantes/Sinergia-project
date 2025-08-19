import axios from "axios";

export default function Contact() {
  const handleSubmit = async (e) => {
    const webhookUrl =
      "http://localhost:5678/webhook/27649da8-d4e9-4a33-95a0-9ecddff68fbf";
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post(webhookUrl, data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="contact"
      className="bg-lavender-web-200 flex flex-col items-center py-5 xl:p-12"
    >
      <h2 className="text-gunmetal-600 my-2 text-4xl">¡Trabajemos juntos!</h2>
      <span className="text-gunmetal-600 w-full text-center text-xl md:w-1/2">
        Deja tu email y nosotros te contactamos.
      </span>
      <div className="my-4 flex w-full flex-col-reverse lg:flex-row">
        <div className="img-container grid w-full place-items-center lg:w-1/2">
          <img src="https://placehold.co/400x400" alt="Img" />
        </div>
        <div className="mx-auto my-8 h-fit w-full max-w-lg rounded-md bg-white p-6 shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-gunmetal mb-1 block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                name="nombre"
                required
                className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <label className="text-gunmetal mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  name="email"
                  required
                  className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-gunmetal mb-1 block text-sm font-medium">
                  Compañía <span className="text-gray-400">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu compañía"
                  name="compania"
                  className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gunmetal hover:bg-teal rounded-md px-6 py-2 text-white transition duration-200"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
