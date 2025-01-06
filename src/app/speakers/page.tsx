import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SpeakersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 mb-16">
          Speakers
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-screen-xl">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-black p-4 flex flex-col items-center space-y-4"
            >
              {/* Photo Section */}
              <div className="w-40 h-40 bg-gray-500 rounded-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Speaker"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="text-center">
                <h2 className="text-lg font-semibold text-white">Speaker Name</h2>
                <p className="text-sm text-gray-400">
                  Speaker title or brief description here.
                </p>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <button className="mt-16 px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600">
          Apply as speaker
        </button>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default SpeakersPage;


