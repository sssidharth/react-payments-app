import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCards } from "../../store/actions/actions";
import CreditCard from "../Utilities/CreditCardComponent";

const CreditCardsAll = () => {
  const myCards = useSelector((state) => state.dashboardReducer.myCards);
  const [cardsData, setCardsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserCards());
  }, [dispatch]);

  useEffect(() => {
    if (myCards && myCards.length > 0) {
      setCardsData(myCards);
    }
  }, [myCards]);

  return (
    <div className="inner-container">
      <div className="flex flex-col h-[100vh]">
        <p className="card_header">My Cards</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardsData && cardsData.length > 0
            ? cardsData.map((card, index) => {
                return (
                  <CreditCard
                    key={index}
                    index={index}
                    data={card}
                    className="lg:max-w-1/3"
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default CreditCardsAll;
