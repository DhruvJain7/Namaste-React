import { useDispatch } from 'react-redux';
import { CDN_URL, nestType, notNestType } from '../../util/constants';
import { addItem } from '../../util/cartSlice';

const ItemList = (data) => {
  const items = data.items;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name + ' '}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs font-light ">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute ">
              <button
                className="p-2 mx-10 rounded bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
