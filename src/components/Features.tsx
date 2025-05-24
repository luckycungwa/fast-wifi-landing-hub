
export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Multi Genius Networking?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just another ISP. We're technology enthusiasts who understand 
                what modern internet users need.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Contracts, No Hidden Fees</h3>
                  <p className="text-gray-600">Complete transparency in pricing. What you see is what you pay.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Free Trial</h3>
                  <p className="text-gray-600">Try our service risk-free. No setup fees, no commitment required.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Expert Support</h3>
                  <p className="text-gray-600">Local technical support team ready to help whenever you need assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Future-Proof Technology</h3>
                  <p className="text-gray-600">Fiber-optic infrastructure built for tomorrow's internet demands.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
              alt="Technology Setup" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
