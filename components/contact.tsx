export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

