import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div>
      <h1>Let's get started</h1>
      <ExpenseItem date={new Date(2023,7,15)} title="Insurance" price="50" location="Bangalore"></ExpenseItem>
      <ExpenseItem date={new Date(2023,7,15)} title="Book" price="20" location="Delhi"></ExpenseItem>
      <ExpenseItem date={new Date(2023,7,15)} title="Pen" price="5" location="Hyderabad"></ExpenseItem>
      <ExpenseItem date={new Date(2023,7,15)} title="Laptop" price="500" location="Mumbai"></ExpenseItem>
    </div>
  );
}

export default App;
