import { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

const useFetchMenuData = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      setResInfo(json);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};

export default useFetchMenuData;
