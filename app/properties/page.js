import PropertyCard from "@/components/PropertyCard";
import propeties from "@/properties.json";

const PropertiesPage = () => {
  return (
    // <!-- All Listings -->
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {propeties.length === 0 ? (
          <p> No Property Found </p>
        ) : (
          //
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propeties.map((property) => (
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
