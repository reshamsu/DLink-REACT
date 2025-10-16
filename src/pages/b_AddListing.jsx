import supabase from "../config/supabaseClient";
import React, { useState } from "react";

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

  // Handle input changes
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

  // Handle multiple image uploads
  const handleImageUpload = async (e) => {
    try {
      setUploading(true);
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const uploadedUrls = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = `images/${Date.now()}_${file.name}`;

        const { data, error } = await supabase.storage
          .from("listings")
          .upload(filePath, file);

        if (error) {
          console.error("Upload error:", error);
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
      console.error("Error uploading image:", error.message);
    } finally {
      setUploading(false);
    }
  };

  // Submit listing
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
    };

    const { data, error } = await supabase
      .from("listings")
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.log("Error adding listing: ", error);
    } else {
      setListings((prev) => [...prev, data]);
      // Reset form
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
    }
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
            {/* Property Title */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Property Title
              </label>
              <input
                type="text"
                name="property_title"
                value={newListing.property_title}
                onChange={handleChange}
                placeholder="Property Title"
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Property Type */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Property Type
              </label>
              <select
                name="property_type"
                value={newListing.property_type}
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
              <label className="font-semibold text-gray-700">Town / City</label>
              <input
                type="text"
                name="city"
                value={newListing.city}
                onChange={handleChange}
                placeholder="Town/City"
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Location / Place
              </label>
              <select
                name="location"
                value={newListing.location}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Land Side">Land Side</option>
                <option value="Sea Side">Sea Side</option>
              </select>
            </div>

            {/* Listing Type */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Listing Type
              </label>
              <select
                name="listing_type"
                value={newListing.listing_type}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Status</label>
              <select
                name="status"
                value={newListing.status}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-100 rounded-lg"
                required
              >
                <option value="Available">Available</option>
                <option value="Sold">Sold</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            {/* Furnishing */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Furnishing</label>
              <select
                name="is_furnished"
                value={newListing.is_furnished}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-100 rounded-lg"
              >
                <option value="">Select</option>
                <option value="Furnished">Furnished</option>
                <option value="Fully-Furnished">Fully Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            {/* Owner */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Property Owner
              </label>
              <input
                type="text"
                name="owner"
                value={newListing.owner}
                onChange={handleChange}
                placeholder="Owner Name"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Bedrooms */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={newListing.bedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                className="py-2 px-4 border border-gray-100 rounded-lg"
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
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Perches */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Perches</label>
              <input
                type="number"
                name="perches"
                value={newListing.perches}
                onChange={handleChange}
                placeholder="Perches"
                className="py-2 px-4 border border-gray-100 rounded-lg"
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
                className="py-2 px-4 border border-gray-100 rounded-lg"
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
                className="py-2 px-4 border border-gray-100 rounded-lg"
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
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Maintenance Fee */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Maintenance Fee
              </label>
              <input
                type="text"
                name="maintain_fee"
                value={newListing.maintain_fee}
                onChange={handleChange}
                placeholder="Maintenance Fee"
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                value={newListing.price}
                onChange={handleChange}
                placeholder="Price"
                className="py-2 px-4 border border-gray-100 rounded-lg"
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
                className="py-2 px-4 border border-gray-100 rounded-lg"
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
                className="py-2 px-4 border border-gray-100 rounded-lg"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label className="font-semibold text-gray-700">
                Upload Images
              </label>
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="py-2 px-4 border border-gray-100 text-gray-500 rounded-lg"
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
                className="px-6 py-2.5 cursor-pointer rounded-lg flex items-center text-center font-semibold text-white bg-[#f09712] hover:bg-[#ec6d06e8]"
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
