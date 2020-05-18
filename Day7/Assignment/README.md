==========================================================================================

Day 2: Exercise

1. Generate Delete Button for each row of Products table. Delete the row when the button is clicked
2. Add Two radio button above the products table for Sort and Reverse. Sort/Revese the Products table by ProductName when the Sort/Reverse Radio button is clicked.
3. Update the Product by selecting Product from Products table and show the updated back to the table.
4. Add a search Textbox above the products table to search products based on ProductName / Category Name

==========================================================================================
Day 3: Exercise

1. Validate ProductId as Unique against the Products Array.
2. Validate the ProductName for not having Special Character and must start from Upper case character
3. Make sure that the Controls border become red when it contains an invalid value
   1. Hint use ngClass
4. create a Drop-Down Component that contains Radio Buttons for each option.
===========================================================================================
Day 4: Exercise

1. Create a LitElement, that will work as DataGrid with following features
   1. Expose DataSource property that will accapt JSON Collection
   2. Generate Column Headers and Rows Dynamically with following
      1. Multi-Word Columns must have blankSpace e.g. if property is EmpNo, then column must be Emp No.
   3. Each Row Shold have CheckBox, so selecting row for following operations
      1. Delete Row having CheckBox Checked
   4. The Header must have a column for CheckBox, so that when this is checked/unchecked all rows will be checked/unchecked
2. # Each Column must have sort/reverse facility using Up/Down arrow
   
=====================================================================

Day 5: Exercise

1. Create three components, the first component has to show list of customers with following properties in table
   1. CustomerId, CustomerName, City, Email, ContactNumber
2. The second componeent will show orders by customer with following data properties in table
   1. OrderId, OrderName, Date, CustomerId, Order Quantity, Amount
3. The third component that will be a search component with UI as SearchTextBox
4. The application will behave as follows
   1. When the customer is selected from customers component the order component will show all orders by customer
   2. When the customer name is searched from the search Textbox, the customer component will show that customer details and the Orders component will show all orders by thet customer, if the city name is entered in the search textbox then all customers from that ciryt must be displayed in the customers component and all orders for all customers from customer component should be displayed in orders component.
