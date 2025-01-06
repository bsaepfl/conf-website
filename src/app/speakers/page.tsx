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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-screen-xl">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md flex flex-col items-center space-y-4 p-4"
            >
              {/* Photo Section */}
              <div className="avatar">
                <div className="w-24 rounded">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Speaker"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Text Section */}
              <div className="text-center">
                <h2 className="card-title text-white">Speaker Name</h2>
                <p className="text-sm text-gray-400">
                  Speaker title or brief description here.
                </p>
              </div>
              {/* Social Icons */}
              <div className="card-actions justify-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 tooltip"
                  data-tip="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 tooltip"
                  data-tip="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <button className="btn btn-primary mt-12">
          Apply as speaker
        </button>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default SpeakersPage;
