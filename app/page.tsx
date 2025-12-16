import Footer from "./footer";
import NavBar from "./navBar";
import Link from "next/link";


export default function Home() {
  return (
      <div className="min-h-screen" style={{ backgroundColor: "#ECF4E8" }}>
      <NavBar />

    <section className="flex justify-center items-center pb-12">
    <div className="flex flex-col justify-center px-6 py-16 hero-back rounded-lg mt-[50px] w-[94%] h-[700px]">
        
        <h1 className="text-black text-3xl sm:text-5xl md:text-[90px] text-center opacity-90 font-black my-6">
            WashXpress
        </h1>

        <p className="text-center my-4 text-black text-base sm:text-lg max-w-xl mx-auto font-bold">
            Sri Lanka’s first smart subscription-based car wash service.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 w-full max-w-md mx-auto">
          <Link href="/about" className="w-full sm:w-40 px-8 py-4 text-center text-base font-semibold text-indigo-500 bg-white rounded-lg hover:text-indigo-600 transition-colors duration-300">
            About
          </Link>
          <Link href="#subscription-plan" className="w-full sm:w-40 px-8 py-4 text-center text-base font-semibold text-white bg-indigo-500 bg-opacity-60 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
            Subscribe
          </Link>
        </div>

    </div>
    </section>



      {/* Services Section */}
      <section className="service-display-section">
        <h2 className="text-black dark:text-black text-2xl font-bold ml-[16.5%] py-12">
          SERVICES
        </h2>

        <div className="service-display-grid-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[75px] max-w-[1200px] mx-auto justify-items-center">
          {/* Card 1 */}
          <div className="service-display-card card-one flex items-end justify-center">
            <h3 className="relative text-black font-bold text-xl mb-4">Exterior Wash</h3>
          </div>

          {/* Card 2 */}
          <div className="service-display-card card-two flex items-end justify-center">
            <h3 className="relative text-black font-bold text-xl mb-4">Interior Cleaning</h3>
          </div>

          {/* Card 3 */}
          <div className="service-display-card card-three flex items-end justify-center">
            <h3 className="relative text-black font-bold text-xl mb-4">Full Detailing</h3>
          </div>
        </div>
      </section>


{/*about wasXpress*/}
    <section className="subscriptionPage py-12">
    <h2 className="text-black dark:text-black text-2xl font-bold text-center mt-[50px]">
        ABOUT WashXpress
    </h2>
    <p className="text-black text-base sm:text-lg max-w-xl mx-auto text-center mt-4">
     WashXpress is Sri Lanka’s first smart subscription-based car wash service, designed to bring convenience and efficiency to every vehicle owner. Our mission is to save you time while providing high-quality car care using modern technology. With flexible subscription plans and a team of skilled professionals, we ensure your car stays spotless, no matter how busy your schedule.
    </p>
    </section>



{/*subscription plan*/}

<section id="subscription-plan" className="sub-section py-12">
        <h2 className="text-black dark:text-black text-2xl font-bold ml-[16.5%] py-12">
          SUBSCRIPTION PLANS
        </h2>

  <div className="sub-display-grid-div grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-items-center">
   
    <div className="sub-display-card sub-one relative w-[300px] h-[500px]  bg-[#E8F9FF] rounded-lg p-4 flex flex-col justify-between">
    
      <h3 className="text-black font-bold text-xl absolute top-0 left-0 p-4">
        Basic Plan
      </h3>

      <div className="mt-16 space-y-2 text-black font-bold">
        <p>✓ 2 washes per month</p>
        <p>✓ Exterior only</p>
        <p>LKR 2500/month</p>
      </div>
      <button className="w-full bg-black text-white py-2 rounded-lg mt-4">
        Subscribe
      </button>
    </div>

    {/* Card Two: Premium Plan */}
    <div className="sub-display-card sub-one relative w-[300px] h-[500px] bg-[#BBFBFF] rounded-lg p-4 flex flex-col justify-between">
      <h3 className="absolute top-0 left-0 p-4 text-black font-bold text-xl">
        Premium Plan
      </h3>
    <div className="mt-16 space-y-2 text-black font-bold">
        <p>✓ 4 washes per month</p>
        <p>✓ Exterior + Interior cleaning</p>
        <p>LKR 4000/month</p>
      </div>
        <button className="w-full bg-black text-white py-2 rounded-lg mt-4">
        Subscribe
      </button>
    </div>

    {/* Card Three: Elite Plan */}
    <div className="sub-display-card sub-one relative w-[300px] h-[500px] bg-[#8DD8FF] rounded-lg p-4 flex flex-col justify-between">
      <h3 className="absolute top-0 left-0 p-4 text-black font-bold text-xl">
        Elite Plan
      </h3>
     <div className="mt-16 space-y-2 text-black font-bold">
        <p>✓ 6 washes per month</p>
        <p>✓ All services included</p>
        <p>LKR 6000/month</p>
      </div>

              <button className="w-full bg-black text-white py-2 rounded-lg mt-4">
        Subscribe
      </button>
    </div>
  </div>
</section>

    <Footer /> 
    </div>


  );
}
