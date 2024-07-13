import React from "react";
import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { debounce } from "lodash";
import useWorkouts from "./useWorkouts";
function MyWorkoutPlans() {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("api/myWorkouts", config)
      .then((response) => {
        setReservations(response.data.data);
        setFilteredReservations(response.data.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  }, []);

  const searchReservations = (text) => {
    setSearchText(text);
    const lowercasedText = text.toLowerCase();
    const filtered = reservations.filter((reservation) => {
      return searchInObject(reservation, lowercasedText);
    });
    setFilteredReservations(filtered);
  };
  const debouncedSearch = debounce(searchReservations, 300);

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };
  const searchInObject = (obj, searchText) => {
    if (obj === null) return false;
    if (typeof obj === "object") {
      return Object.values(obj).some((value) =>
        searchInObject(value, searchText)
      );
    }
    return String(obj).toLowerCase().includes(searchText);
  };

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Workout type</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Trainer</th>
            <th scope="col">Gym</th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map((reservation) => (
            <tr>
              <td>{reservation.workout.title}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.trainer.name}</td>
              <td>{reservation.gym.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyWorkoutPlans;
