'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-navy">
        {/* Background Image with Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/desk.png"
            alt="Luxury Dental Clinic"
            fill
            className="object-cover"
            priority
          />
          {/* Increased overlay density to 50% navy for better text readability */}
          <div className="absolute inset-0 bg-brand-navy/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Experience Luxury
              <span className="block">Dental Care</span>
            </motion.h3> 
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-white mb-8 leading-relaxed"
            >
              Discover a new standard of dental excellence in Rehab Gateway Mall.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
                <a
  href="https://wa.me/201092797153?text=Hello%20Crystal%20Smile%20Dental%2C%20I%20would%20like%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block font-ui text-sm px-6 py-3 bg-brand-teal text-white hover:bg-brand-navy transition-all duration-300 rounded-full tracking-wide"
>
  Book Appointment
</a>
                className="inline-block bg-brand-teal hover:bg-white hover:text-brand-navy text-white font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                Book Your Visit
              </Link>
              <Link 
                href="/services"
                className="inline-block bg-white/10 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-brand-navy font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-brand-navy mb-6">Welcome to Crystal Smile Dental Clinic</h2>
              <p className="font-body text-lg text-gray-700 mb-8 leading-relaxed">
                At Crystal Smile, we provide premium dental care at the heart of Rehab City. Our Gateway Mall facility combines luxury with cutting-edge technology to provide an unparalleled experience for the whole family.
              </p>
              <Link 
                href="/about"
                className="inline-block border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-ui text-sm tracking-wide px-8 py-3 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/assets/images/edited.png"
                alt="Modern Dental Treatment Clinic in Cairo Rehab"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-brand-navy mb-4">Our Premium Services</h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive dental care with our range of specialized services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with our advanced cosmetic procedures",
                image: "/assets/images/cosmetic.jpg"
              },
              {
                title: "Dental Implants",
                description: "Restore your smile with permanent, natural-looking solutions",
                image: "/assets/images/implants.jpg"
              },
              {
                title: "Smile Design",
                description: "Custom smile makeovers tailored to your unique features",
                image: "/assets/images/smile-design.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-brand-navy mb-2">{service.title}</h3>
                  <p className="font-body text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href="/services"
                    className="text-brand-teal hover:text-brand-navy font-ui text-sm font-bold tracking-wide transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to Teal numbers on Navy */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Specialized Doctors" },
              { number: "Latest", label: "Modern Technology" },
              { number: "Painless", label: "Patient Experience" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl text-brand-teal mb-2">{stat.number}</div>
                <div className="font-ui text-sm tracking-wide text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-brand-navy mb-4">Patient Testimonials</h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our valued patients have to say about their experience at Crystal Smile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Selim Selim",
                text: "Amazing clinic with a very professional and friendly staff. It is clean and modern and they have a specialist in every dental field."
              },
              {
                name: "Salma Hassan",
                text: "The place is very clean, modern, and equipped with the latest dental technology. The doctor is very professional and patient."
              },
              {
                name: "Seif Adel",
                text: "I did teeth cleaning and whitening here, and honestly it was great! Everyone was super nice and my teeth look so white now!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-100"
              >
                <div className="text-brand-teal mb-6">★★★★★</div>
                <p className="text-lg font-body text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="font-heading text-lg text-brand-navy">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?q=Crystal+Smile+Rehab+Dental+Clinic+Reviews"
              target="_blank" 
              className="inline-block px-8 py-3 bg-brand-teal text-white font-heading rounded-md hover:bg-brand-navy transition-colors"      
            >
              View More Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Swapped Gold for Teal */}
      <section className="relative py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="font-body text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards your dream smile.
          </p>
          <Link 
            href="/appointment"
            className="inline-block bg-brand-teal hover:bg-white hover:text-brand-navy text-white font-ui text-sm font-bold tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
