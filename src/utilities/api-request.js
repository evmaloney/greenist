export default async function apiRequest(url = 'https://beta2.api.climatiq.io/estimate', method = 'POST', payload = null) {
  const options = { method };
  payload = {
    "emission_factor": "electricity-energy_source_grid_mix",
    "parameters":
    {
      "energy": 4200,
      "energy_unit": "kWh"
    }
  }
  if (payload) {
    options.headers = { 'Content-Typed': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  console.log(process.env.REACT_APP_API_KEY)
  const apiKey = process.env.REACT_APP_API_KEY

  if (apiKey) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${apiKey}`;
  }
  try {
    const res = await fetch(url, options);
    if (res.ok) return res.json();
  }
  catch (error) {
    console.log(error)
    throw new Error('Bad Request')
  }
}