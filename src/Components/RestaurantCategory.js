import React, { useState } from 'react';

import { nestType } from '../../util/constants';
import { notNestType } from '../../util/constants';
import ItemList from './ItemList';
import NestedItemList from './NestedItemList';

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  console.log(data);

  const handleClick = () => {
    // setShowIndex();
    setShowIndex();
  };
  return (
    <div>
      <div className="bg-gray-100 shadow-lg w-6/12 p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data?.title}
            {data['@type'] === notNestType &&
              data?.itemCards?.length > 0 &&
              ' (' + data?.itemCards?.length + ')'}
          </span>
          <span>{data['@type'] === notNestType && '🔻'}</span>
        </div>
        <ul>
          {data['@type'] === nestType &&
            data?.categories?.map((r) => (
              <li>
                <div>
                  <div
                    key={r.id}
                    className="flex  justify-between  border-gray-200 border-b-2
              cursor-pointer"
                    onClick={handleClick}>
                    <span className="p-2 m-2 text-left flex font-bold text-lg ">
                      {r.title}
                      {' (' + r?.itemCards?.length + ')'}
                    </span>
                    <span>{'🔻'}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        {data['@type'] === notNestType && showItem && (
          <ItemList items={data?.itemCards} />
        )}
        {/* {data['@type'] === nestType &&
          showItem &&
          data?.categories?.map((r, index) => (
            <ItemList key={index} items={r?.itemCards} />
          ))} */}
      </div>
    </div>
  );
};
export default RestaurantCategory;
// ({data?.itemcards.length})
