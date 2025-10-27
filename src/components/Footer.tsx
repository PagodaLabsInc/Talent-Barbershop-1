import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#003278] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img src="/0_0.png" alt="Talent Barbershop Logo" className="h-20 bg-white rounded-full p-1" />
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality haircuts and grooming services since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#C0111F] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/talentbarbershop2019/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C0111F] transition-colors duration-300" aria-label="Follow Talent Barbershop on Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Team', 'Contact'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-[#C0111F] transition-colors duration-300">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>9am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>9am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Talent Barbershop. All rights reserved.
          </p>
          <div className="mt-6 mb-2">
            <a href="https://www.getpagoda.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="text-[##FFFFFF] font-bold text-xl">
                Made by Pagoda
              </div>
              <div className="text-gray-300 text-xs tracking-widest">
                WWW.GETPAGODA.COM
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>;
}