import axios from "axios";


export default function Contact() {
  
  const handleSubmit = async (e)  =>{
    const webhookUrl = "http://localhost:5678/webhook/27649da8-d4e9-4a33-95a0-9ecddff68fbf"
    const webhookTestUrl = "http://localhost:5678/webhook-test/27649da8-d4e9-4a33-95a0-9ecddff68fbf"
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form)

    console.log(formData);

    const data = Object.fromEntries(formData.entries());
    console.log("Data: ", data);
    try{
      const res = await axios.post(webhookUrl,data)
      console.log(res.data);
    }catch (err){
      console.log(err);
    }
  }
  
  return (
    <section id="contact" className="bg-lavender-web-200 flex flex-col items-center py-5 xl:p-12">
      <h2 className="text-gunmetal-600 my-2 text-4xl">Let's work together</h2>
      <span className="text-gunmetal-600 w-full text-center text-xl md:w-1/2">
        Ready to transform your marketing? Get in touch with us today.
      </span>

      <div className="mx-auto my-8 w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-gunmetal mb-1 block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                name="firstName"
                className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gunmetal mb-1 block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                name="lastName"
                className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-gunmetal mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gunmetal mb-1 block text-sm font-medium">
              Company
            </label>
            <input
              type="text"
              placeholder="Your Company"
              name="company"
              className="focus:ring-lavender-web w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gunmetal mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              className="focus:ring-lavender-web h-28 w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:ring focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gunmetal hover:bg-teal rounded-md px-6 py-2 text-white transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
