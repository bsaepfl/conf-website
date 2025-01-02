// components/Hero.js
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to the Conference</h1>
          <p className="py-6">Join us on January 1, 2024, at the Grand Hall, City Center.</p>
          <button className="btn btn-primary">Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
