import React from "react";
import Form from "next/form";
import SearchInput, { Input } from "../ui/input";

const SearchForm = () => {
  return (
    <Form action={"/"} className="md:block hidden">
      <SearchInput name="query" className="w-[450px] placeholder:text-sm" placeholder="Search here..." />
    </Form>
  );
};

export default SearchForm;
