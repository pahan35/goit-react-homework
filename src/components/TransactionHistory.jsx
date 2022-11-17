import React from 'react';
import PropTypes from 'prop-types';

export function TransactionHistory({items}) {
  return (
    <table className="">
      <thead className="bg-sky-400  \ text-white shadow-sm shadow-cyan-200">
      <tr className="uppercase text-sm">
        <th className="p-4 w-60 rounded-tl">Type</th>
        <th className="p-4 w-60 border-x border-cyan-200">Amount</th>
        <th className="p-4 w-60 rounded-tr">Currency</th>
      </tr>
      </thead>

      <tbody className="rounded-bl rounded-br text-slate-500 text-sm shadow-sm shadow-slate-400">
      {items.map(({amount, currency, id, type}) => (
        <tr key={id} className="even:bg-slate-100">
          <td className="p-4 text-center capitalize">{type}</td>
          <td className="border-x border-x-slate-200 p-4 text-center">{amount}</td>
          <td className="p-4 text-center">{currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
}
