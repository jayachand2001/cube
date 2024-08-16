import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import Header from "./components/Header";
import { Customer } from "./models/Customer";
import "./styles.css";

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  React.useEffect(() => {
    const customersData: Customer[] = [
      { id: 1, name: "Customer 01", title: "Details here", address: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" },
      { id: 2, name: "Customer 02", title: "Details here", address: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" },
      { id: 3, name: "Customer 03", title: "Details here", address: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" },
      { id: 4, name: "Customer 04", title: "Details here", address: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" },
      // Additional customers...
    ];
    setCustomers(customersData);
    setSelectedCustomer(customersData[0]); 
  }, []);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <CustomerList customers={customers} onSelectCustomer={handleSelectCustomer} selectedCustomer={selectedCustomer} />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;