import React from 'react';

// create an array of 150 empty items. Return an iterator of the array length. Spread the iterator into an array.
const weightVals = [...Array(150).keys()];

export default function Form() {
  return (
    <form className="Form">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" autoComplete="email" />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="new-password"
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="confirm-password"
        name="confirm-password"
        id="confirm-password"
        autoComplete="new-password"
      />

      <label htmlFor="pet-name">Pet Name</label>
      <input type="text" name="pet-name" id="pet-name" autoComplete="on" />

      <label htmlFor="pet-weight">Pet Weight</label>

      <select name="pet-weight" id="pet-weight">
        <option value={'less than 1 lb.'}> 0 to 1 lb.</option>

        {weightVals.map((item, idx) => (
          <option value={item} key={idx}>
            {item + 1} lb.
          </option>
        ))}

        <option value={'more than 150 lb.'}> Greater than 150 lb.</option>
      </select>

      <input type="button" value="SUBMIT" />
    </form>
  );
}
