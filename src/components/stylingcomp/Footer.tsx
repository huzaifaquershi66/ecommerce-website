

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
            <p className="mt-2">Get the latest updates and offers!</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow p-2 rounded-l-md border border-gray-400"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Support</h3>
              <ul className="mt-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Follow Us</h3>
              <ul className="mt-2">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
