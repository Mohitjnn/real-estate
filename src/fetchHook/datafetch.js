async function getData(propertyData) {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
  const response = await fetch(`http://192.168.29.147:3000/api`, {
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
  // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data.json`);
  const response = await fetch(`http://192.168.29.147:3000/data.json`);
  return response.json();
}
