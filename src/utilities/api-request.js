export default async function apiRequest(method = 'POST', payload = null) {
  const options = { method };

  if (payload) {
    const payloadShape = {
      "emission_factor": "passenger_vehicle-vehicle_type_motorcycle-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
      "parameters": {
        "distance": parseInt(payload.milesDriven),
        "distance_unit": "mi"
      }
    }
    options.headers = { 'Content-Typed': 'application/json' };
    options.body = JSON.stringify(payloadShape);
  }

  const apiKey = process.env.REACT_APP_API_KEY

  if (apiKey) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${apiKey}`;
  }
  try {
    const res = await fetch('https://beta2.api.climatiq.io/estimate', options);
    if (res.ok) return res.json();
  }
  catch (error) {
    console.log(error)
    throw new Error('Bad Request')
  }
}