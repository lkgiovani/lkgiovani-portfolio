import Image from "next/image"
import { Phone, Mail, Linkedin, MapPin, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Image src="/placeholder.svg?height=60&width=150" alt="Logo" width={150} height={60} className="mb-6" />
            <p className="text-gray-400 mb-8">
              I am professional Web designer. I have designed more than 50 web template for my client. You can hire me
              for design your personal, business or other website template. You can trust me. I complied your work with
              your full satisfaction
            </p>
            <div className="flex gap-6">
              <a
                href="tel:+1234567890"
                className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:example@email.com"
                className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-black font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

