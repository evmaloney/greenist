import { useState } from 'react'
import TransportationForm from '../../components/TransportationForm/TransportationForm'
import CarbonOutput from '../../components/CarbonOutput/CarbonOutput'
import add from "../../utilities/carbon-api"

export default function TransportationPage() {
  const [carbonData, setCarbonData] = useState(null);

  async function handleAddCarbon(postCarbon) {
    const carbon = await add(postCarbon);
    setCarbonData(carbon)
  }

  return (
    <>
      <h1 className="headers">Transportation</h1>
      <TransportationForm handleAddCarbon={handleAddCarbon} />
      {carbonData && <CarbonOutput data={carbonData} />}
    </>
  )
}