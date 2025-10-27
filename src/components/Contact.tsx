import React, { lazy } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BookNow } from './BookNow';
export function Contact() {
  return <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003278]">
            Contact Talent Barbershop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our shop in Everett, MA or get in touch to book your
            appointment.
          </p>
          <div className="w-24 h-1 bg-[#C0111F] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#003278]">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#003278] rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#003278]">Location</h4>
                    <address className="text-gray-600 not-italic">
                      6 Chelsea St, Everett, MA 02149
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#C0111F] rounded-full p-3 mr-4">
                    <Phone size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#003278]">Phone</h4>
                    <p className="text-gray-600">(857) 237-2107</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#C0111F] rounded-full p-3 mr-4">
                    <Clock size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#003278]">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Thursday: 9am - 8pm
                    </p>
                    <p className="text-gray-600">
                      Friday - Saturday: 8am - 8pm
                    </p>
                    <p className="text-gray-600">Sunday: 9am - 5pm</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-[#003278]">Quick Contact</h4>
                <div className="flex space-x-4">
                  <a href="tel:8572372107" className="bg-[#003278] text-white hover:bg-[#002255] py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300" aria-label="Call Talent Barbershop now">
                    Call Now
                  </a>
                  <BookNow className="bg-[#C0111F] text-white hover:bg-[#9a0e19] py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5891.95128665722!2d-71.05763632371982!3d42.40696367118855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3710cf2005655%3A0xb90455b4205f1c1!2sTalent%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1758256079698!5m2!1sen!2sus" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Talent Barbershop location map" aria-label="Google Maps showing Talent Barbershop location at 6 Chelsea St, Everett, MA"></iframe>
          </div>
        </div>
      </div>
    </section>;
}