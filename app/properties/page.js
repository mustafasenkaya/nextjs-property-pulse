import PropertyCard from "@/components/PropertyCard";
// import properties from "@/properties.json";
// http://localhost:3000/api/properties
import { fetchProperties } from "@/utils/requests";

// async function fetchProperties() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
//     // const res = await fetch("http://localhost:3000/api/properties");
//     // console.log(res);

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const jsonData = await res.json();
//     return jsonData;
//   } catch (error) {
//     console.log(error);
//   }
// }

const PropertiesPage = async () => {
  const properties = await fetchProperties();
  // console.log(properties);

  // Sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    // <!-- All Listings -->
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p> No Property Found </p>
        ) : (
          //
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              // <div> {property.name} </div>
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
