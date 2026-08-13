function SearchBar({
  searchTerm,
  onSearchChange,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <span>⌕</span>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        aria-label="Search projects"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </form>
  );
}

export default SearchBar;