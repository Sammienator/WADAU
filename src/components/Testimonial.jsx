import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const testimonials = [
  {
    text: "This website offers an amazing user experience. The design is clean, modern, and highly responsive.",
    client: "John Doe",
    avatar: "https://via.placeholder.com/50"
  },
  {
    text: "A perfect blend of aesthetics and functionality. The animations are smooth and engaging.",
    client: "Jane Smith",
    avatar: "https://via.placeholder.com/50"
  },
  {
    text: "Highly recommend this website. It’s fast, intuitive, and visually appealing.",
    client: "Mark Johnson",
    avatar: "https://via.placeholder.com/50"
  },
  {
    text: "A very user-friendly website with great design and functionality.",
    client: "Emma Williams",
    avatar: "https://via.placeholder.com/50"
  },
  {
    text: "The animations and responsiveness are top-notch.",
    client: "Oliver Brown",
    avatar: "https://via.placeholder.com/50"
  },
  {
    text: "Impressive design and seamless user experience.",
    client: "Sophia Jones",
    avatar: "https://via.placeholder.com/50"
  },
 
];

const TestimonialComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <div className="flex items-center">
              <img src={testimonial.avatar} alt={testimonial.client} className="w-12 h-12 rounded-full mr-4" />
              <p className="text-gray-900 font-semibold">- {testimonial.client}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
