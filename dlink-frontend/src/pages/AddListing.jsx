import React, { useState } from "react";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    city: "",
    location: "",
    bedrooms: "",
    perches: "",
    sqft: "",
    floor: "",
    ageOfBuilding: "",
    servantRoom: "",
    servantBathrooms: "",
    marketValue: "",
    price: "",
    features: [],
    remarks: "",
  });

  const featuresList = ["Swimming pool", "Gym"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((f) => f !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="bg-gray-100 pt-28 pb-8">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-white rounded-xl p-10 shadow-xl">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Add a new Listing
          </h1>
          <p className="text-gray-400">
            Fill in property details below to add new listing information.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8"
          >
            {/* Property Type */}
            <div className="flex flex-col gap-2">
              <label>Property Type</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Land">Land</option>
                <option value="Commercial Land & Building">
                  Commercial Land & Building
                </option>
              </select>
            </div>

            {/* City */}
            <div className="flex flex-col gap-2">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label>Location / Place</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Bedrooms */}
            <div className="flex flex-col gap-2">
              <label>Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                placeholder="Number of bedrooms"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Conditional: Perches (House) */}
            {formData.propertyType === "House" && (
              <div className="flex flex-col gap-2">
                <label>Perches</label>
                <input
                  type="number"
                  name="perches"
                  value={formData.perches}
                  onChange={handleChange}
                  placeholder="Perches"
                  className="py-2 px-4 border border-gray-100 rounded-lg"
                />
              </div>
            )}

            {/* Conditional: Sqft + Floor (Apartment) */}
            {formData.propertyType === "Apartment" && (
              <>
                <div className="flex flex-col gap-2">
                  <label>Sq ft</label>
                  <input
                    type="number"
                    name="sqft"
                    value={formData.sqft}
                    onChange={handleChange}
                    placeholder="Sq ft"
                    className="py-2 px-4 border border-gray-100 rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Floor</label>
                  <input
                    type="number"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="Floor"
                    className="py-2 px-4 border border-gray-100 rounded-lg"
                  />
                </div>
              </>
            )}

            {/* Age of Building */}
            <div className="flex flex-col gap-2">
              <label>Age of Building</label>
              <input
                type="number"
                name="ageOfBuilding"
                value={formData.ageOfBuilding}
                onChange={handleChange}
                placeholder="Years"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Servant Room */}
            <div className="flex flex-col gap-2">
              <label>Servant Room</label>
              <input
                type="number"
                name="servantRoom"
                value={formData.servantRoom}
                onChange={handleChange}
                placeholder="Number of rooms"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Servant Bathrooms */}
            <div className="flex flex-col gap-2">
              <label>Servant Bathrooms</label>
              <input
                type="number"
                name="servantBathrooms"
                value={formData.servantBathrooms}
                onChange={handleChange}
                placeholder="Number of bathrooms"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Market Value */}
            <div className="flex flex-col gap-2">
              <label>Market Value</label>
              <input
                type="number"
                name="marketValue"
                value={formData.marketValue}
                onChange={handleChange}
                placeholder="Market value"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Selling price"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Features */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label>Additional Features</label>
              <div className="flex gap-4">
                {featuresList.map((feature) => (
                  <label key={feature} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={feature}
                      checked={formData.features.includes(feature)}
                      onChange={handleChange}
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div>

            {/* Remarks */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label>Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Any additional notes..."
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 lg:ml-12 md:ml-0 rounded-lg flex items-center text-center text-white bg-[#f09712] hover:bg-[#ec6d06e8]"
              >
                Submit Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
