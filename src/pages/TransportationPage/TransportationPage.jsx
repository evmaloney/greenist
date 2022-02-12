import { useState } from 'react'
import TransportationForm from '../../components/TransportationForm/TransportationForm'
// import apiRequest from "../../utilities/api-request"
import add from "../../utilities/carbon-api"

export default function TransportationPage() {
  const [carbonData, setCarbonData] = useState([]);

  async function handleAddCarbon(postCarbon) {
    const post = await add(postCarbon);
    setCarbonData(post)
    const kgOfCarbon = post.co2e
    const poundsOfCarbon = kgOfCarbon * 2.20462
    console.log(`Your yearly carbon output from driving is approx. ${poundsOfCarbon.toFixed(2)} lbs`)
  }

  return (
    <>
      <h1>Transportation</h1>
      <TransportationForm handleAddCarbon={handleAddCarbon} />
      <div></div>
    </>
  )
}