async function getData(propertyData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(propertyData),
  });

  return response.json();
}

export default getData;

export async function localData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data.json`);
  return response.json();
}
