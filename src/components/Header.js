import { HEADER_LOGO } from "../utils/constants";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-10">
      <div className="flex items-center">
        <img src={HEADER_LOGO} alt="Logo" className="w-12 h-12 rounded-full" />
        <span className="ml-3 text-xl font-bold text-gray-800">Foodii</span>
      </div>
      <nav>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">About</li>
          <li className="cursor-pointer hover:text-orange-500">Contact</li>
          <li className="cursor-pointer hover:text-orange-500">Cart</li>
        </ul>
      </nav>
    </header>
  );
};
