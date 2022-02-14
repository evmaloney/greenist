export default function CarbonOutput({ data }) {
  const tonsCarbon = (data?.co2e * 0.00110231).toFixed(2)

  return (
    <p>Each year, your driving habits are polluting our air
      with {tonsCarbon} tons of carbon.</p>
  )
}