import { useState } from "react";

export default function LocationForm(props) {
  const [city, setCity] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getCityInfo(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="City"
        value={city}
        placeholder="Enter City Name"
        onChange={(event) => setCity(event.target.value)}
      ></input>
      <button type="submit">Get the weather!</button>
    </form>
  );
}
