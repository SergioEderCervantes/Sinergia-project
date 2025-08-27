import axios from "axios";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Contact() {
  const [sendText, setSendText] = useState(false);

  const handleSubmit = async (e) => {
    setSendText(true);
    const webhookUrl = "http://ntfy.sh/Sinergia";
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const msg = formatMsg(data);
    console.log(data);

    try {
      const res = await axios.post(webhookUrl, msg);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => setSendText(false), 4000);
  };

  const formatMsg = (data) => {
    let msg = `
      Sinergia Web: Un usuario trata de contactarnos!!
      Nombre: ${data.nombre}
      Email: ${data.email}
      Empresa: ${data.compania ? data.compania : "No especificada"}
    `;
    return msg;
  };

  return (
    <section
      id="contact"
      className="bg-lavender-web flex flex-col items-center py-5 xl:p-12"
    >
      <h2 className="text-gunmetal my-2 text-4xl font-semibold">
        ¡Trabajemos juntos!
      </h2>
      <span className="text-gunmetal w-full text-center text-xl font-semibold md:w-1/2">
        Deja tu email y nosotros te contactamos.
      </span>
      <div className="my-4 flex w-full flex-col-reverse lg:flex-row lg:items-center">
        <div className="img-container grid aspect-4/3 w-full place-items-center lg:w-5/12 lg:mx-8 ">
          <LazyLoadImage 
          
            src={`${import.meta.env.BASE_URL}contacto.jpg`}
            alt="Imagen de contacto, ilustración decorativa"
          />
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
            <div className="flex flex-col text-center">
              <button
                type="submit"
                className="bg-gunmetal hover:bg-shock-pink rounded-md px-6 py-2 text-white transition duration-200"
              >
                Enviar
              </button>

              <span
                className={`${sendText ? "opacity-100" : "opacity-0"} ml-4 text-green-600 transition-all duration-500`}
              >
                ¡Mensaje enviado!
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
