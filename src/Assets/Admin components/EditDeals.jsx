import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ref, remove } from "firebase/database";
import { fetchDatabase } from "../User components/utils/FetchDealsDatabase"; // Import fetchDatabase
import { database } from "../../FirebaseConfig";
import DeleteIcon from '../Media/delete.png';
import AddDealModal from "./AddDealModal";

export async function editDealsLoader() {
  return fetchDatabase();
}

const EditDeals = () => {
  const menu = useLoaderData();
  const [foodCategories, setFoodCategories] = useState(menu.foodCategories);
  const [deleteMessage, setDeleteMessage] = useState({ show: false, content: '' });
  const [toggle, setToggle] = useState(false);
  const [catagoryIndexAndName, setCatagoryIndexAndName] = useState({})

  console.log(menu.foodCategories[0].foods[3]);
  function handleModalToggle(cat, index){
    setToggle(prev => !prev )
    setCatagoryIndexAndName({cat, index})
  
  }

 
  useEffect(() => {
    setFoodCategories(menu.foodCategories);
  }, [menu.foodCategories]);

  const deleteFood = (index, foodIndex, foodName) => {
    const path = `foodCategories/${index}/foods/${foodIndex}`;
    const itemRef = ref(database, path);

    remove(itemRef)
      .then(() => {
        console.log("Food item deleted successfully");
        const updatedCategories = [...foodCategories];
        updatedCategories[index].foods.splice(foodIndex, 1);
        setFoodCategories(updatedCategories);
        setDeleteMessage({ show: true, content: `${foodName} deal was deleted.` });
        setTimeout(() => setDeleteMessage({ show: false, content: '' }), 3000);
      })
      .catch(error => {
        console.error("Error deleting food item: ", error);
        setDeleteMessage({ show: true, content: 'Error deleting the item.' });
        setTimeout(() => setDeleteMessage({ show: false, content: '' }), 3000);
      });
  };

  const tableData = foodCategories.map((cat, index) => (
    <div key={index} className="table-wrapper">
      <div className="edit-deal-cat">
        <button className="add-foodcat-btn" onClick={() => handleModalToggle(cat, index)}>
          Add to <b>{cat.category}</b>
          </button>
        </div>
      <table>
        <thead>
          <tr>
            <th>Food Number</th>
            <th>Name</th>
            <th>Price</th>
            <th>Serves</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cat.foods) && cat.foods.map((food, foodIndex) => (
            <tr key={foodIndex}>
              <td className="food-index">{foodIndex + 1}</td>
              <td>{food.name}</td>
              <td>${food.price}</td>
              <td>{food.serves}</td>
              <td>
                <div className="edit-img-wrapper">
                  <img
                    src={food.img}
                    className="edit-deals-img"
                    alt={food.name}
                    style={{ width: "100px" }}
                  />
                </div>
              </td>
              <td>
                <img src={DeleteIcon} alt="Delete" className="delete-icon" onClick={() => deleteFood(index, foodIndex, food.name)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));

  return (
<div className="editDeal-wrapper">
  <h1>{}</h1>
      {deleteMessage.show && <p className="delete-message">{deleteMessage.content}</p>}
      {tableData}
      <AddDealModal toggle={toggle} catagoryIndexAndName={catagoryIndexAndName} handleModalToggle={handleModalToggle}/>
    </div>
  );
};

export default EditDeals;
