import { useState } from 'react';

export default function TransportationForm({ handleAddCarbon }) {
  const [transportationCarbon, setTransportationCarbon] = useState({
    milesDriven: ''
  });

  function handleChange(evt) {
    setTransportationCarbon({ ...transportationCarbon, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddCarbon(transportationCarbon);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Miles Driven Per Year: </label>
      <input type="text" name="milesDriven" value={transportationCarbon.milesDriven} onChange={handleChange} required />
      <button type="submit">Get Carbon Output</button>
    </form>
  )
}