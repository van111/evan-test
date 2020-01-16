import * as React from "react";
import Input from "../Input";

interface Options {
  value: string;
  text: string;
}

interface SearchComboBoxProps {
  label?: string;
  options: Options[];
  placeholder?: string;
  className?: string;
  value?: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onClick?: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}

const SearchComboBox = (props: SearchComboBoxProps) => {
  const { useEffect, useState } = React;
  const [search_value, setSearchValue] = useState("");
  const {
    placeholder,
    options,
    onChange
  } = props;

  useEffect(() => {}, [setSearchValue]);

  const handleOnChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    return onChange(e);
  };

  const handleOnClick = (v: string) => {
    setSearchValue(v);
  };

  return (
    <div className="field">
      <label className="label">Subject</label>
      <div className="control">
        <Input
          type="text"
          placeholder={placeholder}
          onChange={handleOnChange}
          value={search_value}
        />
        {search_value &&
          options.map((v, i) => (
            <div key={i} onClick={() => handleOnClick(v.value)}>
              {v.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchComboBox;
