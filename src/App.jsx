import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = React.useState([]);

  const handleSearch = (query) => {
    const mockResults = [
      { id: 1, title: "Movie 1", overview: "Overview of movie 1" },
      { id: 2, title: "Movie 2", overview: "Overview of movie 2" },
    ];
    setResults(mockResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
