import supabase from "../config/supabaseClient";
import React, { useState } from "react";
import { TbSend2 } from "react-icons/tb";

const PropertyForm = () => {
  const [listings, setListings] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [newListing, setNewListing] = useState({
    property_title: "",
    property_type: "",
    listing_type: "",
    city: "",
    location: "",
    owner: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    perches: "",
    per_perch: "",
    sqft: "",
    floors: "",
    building_age: "",
    maintain_fee: "",
    price: "",
    amenities: [],
    remarks: "",
    status: "Available",
    is_furnished: "",
    image_urls: [],
  });

  const featuresList = [
    "24/7 Lift Access",
    "Swimming Pool",
    "Secure Parking",
    "Air Conditioning",
    "High-Speed Internet",
    "Security System",
    "Gym & Fitness Center",
    "Garden & Green Spaces",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setNewListing((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((f) => f !== value),
      }));
    } else {
      setNewListing((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      setUploading(true);
      const uploadedUrls = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.size > 5 * 1024 * 1024) {
          alert(`${file.name} is too large! Max 5MB.`);
          continue;
        }

        const filePath = `images/${Date.now()}_${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from("listings")
          .upload(filePath, file, { cacheControl: "3600", upsert: false });

        if (uploadError) {
          console.error("Upload error:", uploadError.message);
          continue;
        }

        const { data: publicUrlData } = supabase.storage
          .from("listings")
          .getPublicUrl(filePath);

        uploadedUrls.push(publicUrlData.publicUrl);
      }

      setNewListing((prev) => ({
        ...prev,
        image_urls: [...prev.image_urls, ...uploadedUrls],
      }));
    } catch (error) {
      console.error("Error uploading images:", error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...newListing,
      bedrooms: newListing.bedrooms ? Number(newListing.bedrooms) : null,
      bathrooms: newListing.bathrooms ? Number(newListing.bathrooms) : null,
      perches: newListing.perches ? Number(newListing.perches) : null,
      per_perch: newListing.per_perch ? Number(newListing.per_perch) : null,
      sqft: newListing.sqft ? Number(newListing.sqft) : null,
      floors: newListing.floors ? Number(newListing.floors) : null,
      price: newListing.price ? Number(newListing.price) : null,
      image_urls: newListing.image_urls.length ? newListing.image_urls : [],
    };

    const { data, error } = await supabase
      .from("listings")
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error("Error adding listing:", error.message);
      alert("Failed to add listing. Check console for details.");
    } else {
      setListings((prev) => [...prev, data]);
      setNewListing({
        property_title: "",
        property_type: "",
        listing_type: "",
        city: "",
        location: "",
        owner: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
        perches: "",
        per_perch: "",
        sqft: "",
        floors: "",
        building_age: "",
        maintain_fee: "",
        price: "",
        amenities: [],
        remarks: "",
        status: "Available",
        is_furnished: "",
        image_urls: [],
      });
      alert("Listing added successfully!");
    }
  };

  // Conditional rendering based on property type
  const renderPropertySpecificFields = () => {
    switch (newListing.property_type) {
      case "House":
      case "Apartment":
        return (
          <>
            {/* Bedrooms */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={newListing.bedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Bathrooms */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={newListing.bathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Floors */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Floors</label>
              <input
                type="number"
                name="floors"
                value={newListing.floors}
                onChange={handleChange}
                placeholder="Floors"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Building Age */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Building Age
              </label>
              <input
                type="text"
                name="building_age"
                value={newListing.building_age}
                onChange={handleChange}
                placeholder="Years"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Furnishing */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Furnishing</label>
              <select
                name="is_furnished"
                value={newListing.is_furnished}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-200 rounded-lg"
              >
                <option default value="Furnished">Furnished</option>
                <option value="Fully-Furnished">Fully Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>
          </>
        );
      case "Land":
        return (
          <>
            {/* Perches */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Perches</label>
              <input
                type="number"
                name="perches"
                value={newListing.perches}
                onChange={handleChange}
                placeholder="Perches"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Price per Perch */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Price per Perch</label>
              <input
                type="number"
                name="per_perch"
                value={newListing.per_perch}
                onChange={handleChange}
                placeholder="Price per Perch"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Sq Ft */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Sq Ft</label>
              <input
                type="number"
                name="sqft"
                value={newListing.sqft}
                onChange={handleChange}
                placeholder="Sq Ft"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>
          </>
        );
      case "Commercial Land & Building":
        return (
          <>
            {/* Mix fields */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Perches</label>
              <input
                type="number"
                name="perches"
                value={newListing.perches}
                onChange={handleChange}
                placeholder="Perches"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={newListing.bedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={newListing.bathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 pt-28 pb-8">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-white rounded-xl p-10 shadow-xl">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Add a <span className="text-[#f09712]">New Listing</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Fill in property details below to add new listing information.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Basic fields always visible */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Property Title</label>
              <input
                type="text"
                name="property_title"
                value={newListing.property_title}
                onChange={handleChange}
                placeholder="Property Title"
                className="py-2 px-4 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Property Type</label>
              <select
                name="property_type"
                value={newListing.property_type}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-200 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Land">Land</option>
                <option value="Commercial Land & Building">Commercial Land & Building</option>
              </select>
            </div>

            {/* City, Location, Listing Type, Status, Owner */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Town / City</label>
              <input
                type="text"
                name="city"
                value={newListing.city}
                onChange={handleChange}
                placeholder="Town/City"
                className="py-2 px-4 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Location / Place</label>
              <select
                name="location"
                value={newListing.location}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-200 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Land Side">Land Side</option>
                <option value="Sea Side">Sea Side</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Listing Type</label>
              <select
                name="listing_type"
                value={newListing.listing_type}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-200 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Status</label>
              <select
                name="status"
                value={newListing.status}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-200 rounded-lg"
                required
              >
                <option value="Available">Available</option>
                <option value="Sold">Sold</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Property Owner</label>
              <input
                type="text"
                name="owner"
                value={newListing.owner}
                onChange={handleChange}
                placeholder="Owner Name"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Property-specific fields */}
            {renderPropertySpecificFields()}

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                value={newListing.price}
                onChange={handleChange}
                placeholder="Price"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Amenities */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label className="font-semibold text-gray-700">Amenities</label>
              <div className="grid grid-cols-2 gap-4">
                {featuresList.map((feature) => (
                  <label key={feature} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="amenities"
                      value={feature}
                      checked={newListing.amenities.includes(feature)}
                      onChange={handleChange}
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label className="font-semibold text-gray-700">Description</label>
              <textarea
                name="description"
                value={newListing.description}
                onChange={handleChange}
                placeholder="Property description"
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Remarks */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label className="font-semibold text-gray-700">Remarks</label>
              <textarea
                name="remarks"
                value={newListing.remarks}
                onChange={handleChange}
                placeholder="Any additional notes..."
                className="py-2 px-4 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label className="font-semibold text-gray-700">Upload Images</label>
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="py-2 px-4 border border-gray-200 text-gray-500 rounded-lg"
              />
              {uploading && (
                <p className="text-sm text-gray-500">Uploading...</p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {newListing.image_urls.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt="Property"
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={uploading}
                className={`px-6 py-3 rounded-full flex font-semibold items-center justify-center gap-2 hover:gap-3 text-white bg-[#f09712] hover:scale-105 duration-300 transition-all cursor-pointer ${
                  uploading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#f09712] hover:bg-[#ec6d06e8]"
                }`}
              >
                {uploading ? "Uploading..." : "Submit Listing "}
                <TbSend2 size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
