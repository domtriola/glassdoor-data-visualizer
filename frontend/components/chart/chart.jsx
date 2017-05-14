import React from 'react';

const Chart = ({ searchQuery, data }) => (
  <div>
    <h2>{searchQuery}</h2>
    <p>{JSON.stringify(data)}</p>
  </div>
);

export default Chart;
