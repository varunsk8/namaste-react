import { RESTAURANT_BASE_IMAGE } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="w-72 p-4 m-4 shadow-lg rounded-2xl bg-white hover:scale-105 transition-transform">
      <img
        src={RESTAURANT_BASE_IMAGE + cloudinaryImageId}
        alt={name}
        className="w-full h-44 object-cover rounded-xl"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
        <div className="flex justify-between text-sm mt-2 text-gray-700">
          <span>⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};
