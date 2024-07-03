import React from 'react';

const FormationItem = ({ year, title, description }) => (
  <div className="mt-4">
    <div className="text-xs font-light text-neutral-600">{year}</div>
    <div className="mt-1 text-sm font-semibold text-orange-500">{title}</div>
    {description.map((line, index) => (
      <div key={index} className="text-sm font-light">
        {line}
      </div>
    ))}
  </div>
);

export default FormationItem;
