import replicateConfig from "@/config/replicate.config";

export default async function handler(req, res) {
  if(!req.query.id) {
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "Missing ID" }));
    return;
  }
  const response = await fetch(
    "https://api.replicate.com/v1/predictions/" + req.query.id,
    {
      headers: {
        Authorization: replicateConfig.authorization,
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status !== 200) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ message: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.end(JSON.stringify(prediction));
}
