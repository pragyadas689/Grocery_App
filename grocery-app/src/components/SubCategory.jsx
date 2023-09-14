import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const SubCategory = () => {
  const [catId, setCatId] = useState(3);
  const [SubCategories, setSubCategories] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://orca-app-jhg4l.ondigitalocean.app/api/subcategory/${catId}`)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [catId]);
  return (
    <div>
      <h2 className="text-center">Sub Category</h2>
      <ul class="list-group">
        {SubCategories.map((item, index) => (
          <li class="list-group-item" key={index}>
            {item.subName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategory;
