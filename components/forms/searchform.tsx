import React from "react";
import Form from "next/form";
import SearchInput from "../ui/input";

const SearchForm = () => {
  return (
    <Form action={"/"} className="md:block hidden">
      <SearchInput name="query" className="w-[450px] placeholder:text-sm shadow-none py-2.5" placeholder="Search here..." />
    </Form>
  );
};

export default SearchForm;
