import { useState } from "react";
const FavoriteBtn = () => {
  const handleFavorite = () => {
    setFavoriteBtn(!favoriteBtn);
  };
  const [favoriteBtn, setFavoriteBtn] = useState(false);
  return (
    <div>
      <button
        className="border-2 px-5"
        onClick={handleFavorite}
      >
        {favoriteBtn
          ? "Remove From Favorites"
          : "Add to favorites"}
      </button>
    </div>
  );
};
export default FavoriteBtn;
