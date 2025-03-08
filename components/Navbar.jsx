import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-900 p-4 shadow-lg">
      {/* Navbar Container */}
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Gradient Logo Text */}
        <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <Link href="/">TWODO</Link>
        </div>

        {/* Links Section */}
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
