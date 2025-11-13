import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Calendar, Phone, Clock, X, Package, Plus } from 'lucide-react';
import { BookNow } from './BookNow';
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  isLogo?: boolean;
}
interface CategoryProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}
export function ServiceTabs() {
  const categories: CategoryProps[] = [{
    id: 'haircuts',
    label: 'Haircuts & Fades',
    icon: <Scissors size={20} />
  }, {
    id: 'combo',
    label: 'Combo Services',
    icon: <Package size={20} />
  }, {
    id: 'beard',
    label: 'Beard Services',
    icon: <div size={20} />
  }, {
    id: 'additional',
    label: 'Additional Services',
    icon: <Plus size={20} />
  }];
  const allServices: Record<string, Service[]> = {
    haircuts: [{
      id: 'regular',
      title: 'Regular Haircut',
      description: 'Classic haircut with clippers and scissors, includes neck shave.',
      price: '$40',
      duration: '45 min',
      image: "/regular haircut.png"
    }, {
      id: 'scissors',
      title: 'Classic Only Scissors',
      description: 'Traditional haircut using only scissors for a more textured look.',
      price: '$40',
      duration: '45 min',
      image: "/classic_scissors.jpg"
    }, {
      id: 'kids',
      title: 'Kids Haircut',
      description: 'Haircut for children, includes a lollipop and special kid-friendly chair.',
      price: '$40',
      duration: '45 min',
      image: "/kidscut.png"
    }, {
      id: 'skin-fade',
      title: 'Skin Fade or Bald Fade',
      description: 'Precision fade that gradually blends to skin, for a clean, modern look.',
      price: '$45',
      duration: '50 min',
      image: "/skin_fade.jpg"
    }, {
      id: 'taper-fade',
      title: 'Taper Fade or Blow Out',
      description: 'Gradual fade that leaves more length on the sides, or styled blow out.',
      price: '$45',
      duration: '45 min',
      image: "/taper fade.png"
    }, {
      id: 'mullet',
      title: 'Mullet',
      description: 'Business in the front, party in the back - classic or modern mullet styles.',
      price: '$45',
      duration: '45 min',
      image: "/mullet.png",
    }],
    combo: [{
      id: 'regular-beard',
      title: 'Regular Haircut + Beard',
      description: 'Complete package with regular haircut and beard trimming and styling.',
      price: '$60',
      duration: '1h 15min',
      image: "/haircut_2B_beard.jpg"
    }, {
      id: 'skin-fade-beard',
      title: 'Skin Fade + Beard',
      description: 'Skin fade haircut combined with professional beard trimming and styling.',
      price: '$65',
      duration: '1h 30min',
      image: "/skin_fade_2B_beard.jpg"
    }, {
      id: 'taper-fade-beard',
      title: 'Taper Fade and Beard',
      description: 'Taper fade haircut with complete beard trimming and styling service.',
      price: '$65',
      duration: '1h 15min',
      image: "/taper_fade_2B_beard.jpg"
    }],
    beard: [{
      id: 'beard-maintenance',
      title: 'Beard Maintenance',
      description: 'Hot towel and massage therapy for your beard, promoting healthy growth.',
      price: '$35',
      duration: '45 min',
      image: "/beard_maintenance.jpg"
    }, {
      id: 'beard-trim',
      title: 'Beard Trim',
      description: 'Just line. No down, no hot towel.',
      price: '$30',
      duration: '20 min',
      image: "/beardtrim.png",
    }],
    additional: [{
      id: 'hair-trim',
      title: 'Hair Trim',
      description: 'Quick touch-up to maintain your current style between full haircuts.',
      price: '$15',
      duration: '15 min',
      image: "/hair trim.png",
  
    }, {
      id: 'nose-wax',
      title: 'Nose Wax',
      description: 'Quick and painless nose hair removal using specialized wax.',
      price: '$10',
      duration: '5 min',
      image: "/nose wax.png"
    }, {
      id: 'eyebrows',
      title: 'Eyebrows',
      description: 'Eyebrow trimming and shaping for a clean, defined look.',
      price: '$5',
      duration: '5 min',
      image: "/eyebrow.jpg"
    }, {
      id: 'ear',
      title: 'Ear',
      description: 'Ear hair removal and cleaning for a polished appearance.',
      price: '$5',
      duration: '10 min',
      image: "/ear hair removal.png"
    }, {
      id: 'design',
      title: 'Design',
      description: 'Custom hair designs and patterns to express your unique style.',
      price: '$5',
      duration: '15 min',
      image: "/design.jpg"
    }]
  };
  const [activeTab, setActiveTab] = useState('haircuts');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  return <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003278]">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional barbering services to keep you
            looking your best.
          </p>
          <div className="mt-4 mb-2 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Walk-ins for haircuts are $45 and tapers are $50.
            </p>
          </div>
          <div className="w-24 h-1 bg-[#C0111F] mx-auto mt-4"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex rounded-md shadow-sm bg-white">
            {categories.map(category => <button key={category.id} onClick={() => setActiveTab(category.id)} className={`relative px-4 py-3 flex items-center transition-all duration-300 whitespace-nowrap ${activeTab === category.id ? 'text-white' : 'text-gray-600 hover:text-[#003278]'}`}>
                {activeTab === category.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#003278] rounded-md" initial={false} transition={{
              type: 'spring',
              duration: 0.5
            }} />}
                <span className="relative flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </span>
              </button>)}
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices[activeTab].map(service => <motion.div key={service.id} whileHover={{
            scale: 1.03
          }} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="h-80 overflow-hidden relative bg-white">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center cursor-pointer" onClick={() => {
                setSelectedImage(service.image);
                setSelectedTitle(service.title);
              }} />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-[#003278]">
                      {service.title}
                    </h3>
                    <span className="text-lg font-semibold text-[#C0111F]">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="px-6 pb-4 mt-auto">
                  <BookNow className="block w-full bg-[#003278] text-white text-center py-2 rounded-md hover:bg-[#002255] transition-colors duration-300" />
                </div>
              </motion.div>)}
          </motion.div>
        </AnimatePresence>

        {/* Monthly Plans Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#003278]">
              Monthly Subscription Plans
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save money and always look your best with our convenient monthly
              subscription plans.
            </p>
            <div className="w-16 h-1 bg-[#C0111F] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{
            scale: 1.03
          }} className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#003278]">
              <div className="bg-[#003278] text-white p-4 flex items-center justify-between">
                <h4 className="text-xl font-bold">Regular Haircut Plan</h4>
                <Calendar size={24} className="text-white" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-center">
                  <span className="text-4xl font-bold text-[#003278]">$70</span>
                  <span className="text-gray-600 self-end ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#C0111F] font-bold mr-2">✓</span>
                    <span>Weekly regular haircuts (up to 4 per month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C0111F] font-bold mr-2">✓</span>
                    <span>Includes hot towel and neck shave</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C0111F] font-bold mr-2">✓</span>
                    <span>Save up to $90 per month</span>
                  </li>
                </ul>
                <div className="text-center mb-4">
                  <p className="text-gray-700 font-medium">
                    For more details call us
                  </p>
                </div>
                <a href="tel:8572372107" className="block w-full bg-[#003278] text-white text-center py-3 rounded-md hover:bg-[#002255] transition-colors duration-300 flex items-center justify-center" aria-label="Call for details about our Regular Haircut Plan">
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.03
          }} className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#C0111F]">
              <div className="bg-[#C0111F] text-white p-4 flex items-center justify-between">
                <h4 className="text-xl font-bold">Skin Fade Plan</h4>
                <Calendar size={24} className="text-white" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-center">
                  <span className="text-4xl font-bold text-[#C0111F]">$80</span>
                  <span className="text-gray-600 self-end ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#003278] font-bold mr-2">✓</span>
                    <span>Weekly skin fade haircuts (up to 4 per month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003278] font-bold mr-2">✓</span>
                    <span>Precision fade with your choice of style on top</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003278] font-bold mr-2">✓</span>
                    <span>Save up to $100 per month</span>
                  </li>
                </ul>
                <div className="text-center mb-4">
                  <p className="text-gray-700 font-medium">
                    For more details call us
                  </p>
                </div>
                <a href="tel:8572372107" className="block w-full bg-[#C0111F] text-white text-center py-3 rounded-md hover:bg-[#9a0e19] transition-colors duration-300 flex items-center justify-center" aria-label="Call for details about our Skin Fade Plan">
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-[#003278] bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)} aria-label="Close image preview">
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <h3 className="text-white text-center text-xl mb-4">
              {selectedTitle}
            </h3>
            <img src={selectedImage} alt={selectedTitle || 'Haircut style'} className="max-w-full max-h-[80vh] object-contain mx-auto" onClick={e => e.stopPropagation()} />
          </div>
        </div>}
    </section>;
}