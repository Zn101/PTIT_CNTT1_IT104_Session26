import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams();

  const studentName = searchParams.get("studentName") || "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (studentName.trim()) {
      setSearchParams({ studentName }); 
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form-inline d-flex gap-3 my-2 my-lg-0"
      >
        <input
          className="form-control w-auto"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={studentName}
          onChange={(e) => setSearchParams({ studentName: e.target.value })}
        />
        <button
          className="btn btn-primary text-white my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
