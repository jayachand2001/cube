import React from "react";
import { Customer } from "../models/Customer";

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onSelect }) => {
  return (
    <div className={`customer-card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <h3>{customer.name}</h3>
      <p>{customer.address}</p>
    </div>
  );
};

export default CustomerCard;