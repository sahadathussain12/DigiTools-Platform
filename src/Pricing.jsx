import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

   
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Starter */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">Starter</h2>
          <p className="text-gray-500 mb-4">Perfect for getting started</p>
          
          <h1 className="text-3xl font-bold">$0<span className="text-lg">/Month</span></h1>

          <ul className="flex flex-col mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
                <TiTick /> Access to 10 free tools</li>
            <li  className="flex items-center gap-2"><TiTick /> Basic templates</li>
            <li  className="flex items-center gap-2"><TiTick /> Community support</li>
            <li className="flex items-center gap-2"><TiTick /> 1 project per month</li>
          </ul>

          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl p-6 shadow relative">
          
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="mb-4">Best for professionals</p>

          <h1 className="text-3xl font-bold">$29<span className="text-lg">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li  className="flex items-center gap-2"><TiTick /> Access to all premium tools</li>
            <li  className="flex items-center gap-2"><TiTick /> Unlimited templates</li>
            <li  className="flex items-center gap-2"><TiTick /> Priority support</li>
            <li  className="flex items-center gap-2"><TiTick /> Unlimited projects</li>
            <li  className="flex items-center gap-2"><TiTick /> Cloud sync</li>
            <li  className="flex items-center gap-2"><TiTick /> Advanced analytics</li>
          </ul>

          <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="text-gray-500 mb-4">For teams and businesses</p>

          <h1 className="text-3xl font-bold">$99<span className="text-lg">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li  className="flex items-center gap-2"><TiTick /> Everything in Pro</li>
            <li  className="flex items-center gap-2"><TiTick /> Team collaboration</li>
            <li  className="flex items-center gap-2"><TiTick /> Custom integrations</li>
            <li  className="flex items-center gap-2"><TiTick /> Dedicated support</li>
            <li  className="flex items-center gap-2"><TiTick /> SLA guarantee</li>
            <li  className="flex items-center gap-2"><TiTick /> Custom branding</li>
          </ul>

          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;