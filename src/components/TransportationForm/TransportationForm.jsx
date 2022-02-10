import { useState } from 'react';

export default function TransportationForm() {
  const [transportationData, setTransportationData] = useState({
    milesDriven: ''
  });

  function handleChange(evt) {
    setTransportationData({ ...transportationData, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

  }

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <label>Miles Driven Per Year: </label>
        <input type="text" name="milesDriven" value={transportationData.milesDriven} onChange={handleChange} required />
        <button type="submit">Get Carbon Output</button>
      </form>
    </div>
  )
}