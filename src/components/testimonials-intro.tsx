export default function TestimonialsIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "Palm's automations increased our profit margins by 20% whilst making our clients and team happier."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Sarah K.</p>
                <p className="text-sm text-gray-500">Marketing Agency</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "We've streamlined our entire fulfilment process. Clients are happier and we're more profitable."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">James R.</p>
                <p className="text-sm text-gray-500">Business Consultancy</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "Our client satisfaction scores went through the roof. The automations handle everything seamlessly."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Emma T.</p>
                <p className="text-sm text-gray-500">Legal Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 