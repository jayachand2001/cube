import React from "react";
import { Customer } from "../models/Customer";
import CustomerCard from "./CustomerCard";

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer, selectedCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomer?.id === customer.id}
          onSelect={() => onSelectCustomer(customer)}
        />
      ))}
    </div>
  );
};

export default CustomerList;