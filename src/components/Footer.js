export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 mt-10 border-t py-6 px-8 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <ul className="flex gap-4">
          <li className="hover:text-orange-500 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            Terms of Service
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Help</li>
        </ul>
        <div className="text-center">
          <p>© 2023 Your Company</p>
          <p>123 Main St, City, Country</p>
        </div>
      </div>
    </footer>
  );
};
