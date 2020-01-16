import React from "react";
import Input from "../../components/common/Form/Input";
import Button from "../../components/common/Elements/Button";
import Radio from "../../components/common/Form/Radio";
import Checkbox from "../../components/common/Form/Checkbox";
import SearchComboBox from "../../components/common/Form/SearchComboBox";

const Storybook = () => {
  const val = [
    {
      value: "test1",
      text: "test1"
    },
    {
      value: "test2",
      text: "test2"
    },
    {
      value: "test3",
      text: "test3"
    },
    {
      value: "test4",
      text: "test4"
    }
  ];
  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="box">
          <h4 className="title is-4">Form</h4>
          <div className="columns">
            <div className="column is-one-quarter">
              <Input label="Sample" type="text" placeholder="Input here" />
              <SearchComboBox options={val} onChange={() => {}} />
            </div>
          </div>
        </div>

        <div className="box">
          <h5 className="title is-5">Buttons</h5>
          <div className="columns">
            <div className="column is-one-quarter">
              <Button type="button" text="Button" />
              <Button type="link" text="Link Button" />
            </div>
          </div>
        </div>

        <div className="box">
          <h5 className="title is-5">Radio Button</h5>
          <div className="columns">
            <div className="column is-one-quarter">
              <Radio
                radio_label="Choices"
                options={[
                  {
                    name: "fruits",
                    label: "Apple",
                    id: "Apple"
                  },
                  {
                    name: "fruits",
                    label: "Orange",
                    id: "Orange",
                    checked: true
                  },
                  {
                    name: "fruits",
                    label: "Melon",
                    id: "Melon",
                    disabled: true
                  }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="box">
          <h5 className="title is-5">Check Button</h5>
          <div className="columns">
            <div className="column is-one-quarter">
              <Checkbox
                check_label="Choices"
                options={[
                  {
                    name: "fruits",
                    label: "Apple",
                    id: "Apple"
                  },
                  {
                    name: "fruits",
                    label: "Orange",
                    id: "Orange",
                    checked: true
                  },
                  {
                    name: "fruits",
                    label: "Melon",
                    id: "Melon",
                    disabled: true
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storybook;
