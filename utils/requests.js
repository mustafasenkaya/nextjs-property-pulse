const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all propeties
async function fetchProperties() {
  try {
    // Handle the case where the domain is not available
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    // const res = await fetch("http://localhost:3000/api/properties");
    // console.log(res);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    // console.log(error);
    return [];
  }
}

// fetch single propeties
async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    // const res = await fetch("http://localhost:3000/api/properties");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
