import React, { useRef, useState } from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'

const Testimonial = () => {
  const cardRefs = useRef([]);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const name = testimonials[index].name;
    setTooltip({
      visible: true,
      text: name,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 relative'>
      <Title
        title='What Our Guests Say'
        subtitle="Real stories from happy guests who found their perfect stay with QuickStay."
      />

      {/* Tooltip rendered once at top level with fixed positioning */}
      {tooltip.visible && (
        <div
          className="fixed px-2 py-1 text-xs rounded bg-indigo-500 text-white pointer-events-none z-50"
          style={{
            top: tooltip.y + 12,
            left: tooltip.x + 12,
            transition: 'all 0.2s ease-out',
          }}
        >
          {tooltip.text}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-6 py-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="bg-gray-100 rounded-xl max-w-sm w-full shadow hover:shadow-xl transition-all"
          >
            <div className="flex flex-col items-center p-6 text-center bg-white">
              <img
                className="rounded-full w-14 h-14 mb-4 object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{testimonial.address}</p>
              <p className="text-sm text-gray-700 italic">"{testimonial.review}"</p>
              <div className="mt-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial;
