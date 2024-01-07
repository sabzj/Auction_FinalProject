import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./SearchForAuction.css";

const SearchForAuction = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    item: "",
    category: "",
    country: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [id]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://65802fc36ae0629a3f548fbb.mockapi.io/auction/item",
        {
          params: searchCriteria,
        }
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const openDetailsModal = (result) => {
    setSelectedResult(result);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedResult(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Search Items</h2>
      <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          value={searchCriteria.item}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={searchCriteria.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={searchCriteria.country}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      <div>
        <h3>Search Results</h3>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              {result.item} - {result.category} - {result.country}
              <button onClick={() => openDetailsModal(result)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeDetailsModal}
        ariaHideApp={false} // Suppresses warning in the console
      >
        <h2>Detailed Information</h2>
        {selectedResult && (
          <div>
            <p>Item: {selectedResult.item}</p>
            <p>Category: {selectedResult.category}</p>
            <p>Country: {selectedResult.country}</p>
          </div>
        )}
        <button onClick={closeDetailsModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SearchForAuction;
