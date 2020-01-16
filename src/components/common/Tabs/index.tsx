import * as React from "react";

interface Options {
  text: string
  value: string
}

interface TabProps {
  active_tab: string
  label: string
  onClick: (e: React.SyntheticEvent<HTMLElement>) => void
  options: Options[]
}

const Tabs = (props: TabProps) => {
  const { active_tab, label, onClick, options } = props;
  return (
    <div className="tabs is-centered is-boxed">
      <ul>
        {options && options.map((v) => (
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>{v.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
