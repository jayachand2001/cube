import React from "react";
import { Customer } from "../models/Customer";
import usePhotos from "../hooks/usePhotos";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const photos = usePhotos();

  return (
    <div className="customer-details">
    <div className="inline">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
    </div> 
    <div className="address">
    <p>{customer.address}</p>
    </div>
      
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="Customer" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
