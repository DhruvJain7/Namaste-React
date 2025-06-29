import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../util/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { nestType } from '../../util/constants';
import { notNestType } from '../../util/constants';
import { useState } from 'react';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // {
  //   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // }
  // const nestType =
  //   'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory';
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c?.card?.card['@type'] === notNestType
      //  ||
      //   c?.card?.card['@type'] === nestType
    );
  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-2xl my-6">{name}</h1>
      <p className="">
        {cuisines.join(',')} - {costForTwoMessage}
      </p>
      {categories.map((c, index) => (
        <RestaurantCategory
          data={c?.card?.card}
          key={c?.card?.card.categoryId}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => handleSetShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
