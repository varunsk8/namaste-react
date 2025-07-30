const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search restaurants..."
      className="w-full max-w-md p-2 border rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  );
};

export default SearchBar;
