import React from 'react';
import { useForm } from 'react-hook-form';

// create an array of 178 empty items. Return an iterator of its keys (indexes 0 to 177). Spread the iterator into an Array.
const weightVals = [...Array(178).keys()];

export default function Form({ onSubmit }) {
  const { register, handleSubmit, errors, watch } = useForm();

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
        ref={register({
          required: true,
          // regexp for email validation:
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        })}
      />
      {errors && errors.email && (
        <p className="error-message">Whoops, this email address is invalid.</p>
      )}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="new-password"
        required
        ref={register({
          required: true,
          minLength: 8,
          // regexp for 1 letter, 1 number, 1 special character:
          pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
        })}
      />
      {errors && errors.password && (
        <p className="error-message">
          Whoops, password must be 8 characters and contain 1 letter, 1 number,
          1 special character.
        </p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="confirmPassword"
        name="confirmPassword"
        id="confirmPassword"
        autoComplete="new-password"
        required
        ref={register({
          required: true,
          minLength: 8,
          validate: (value) => value === watch('password'),
          // regexp for 1 letter, 1 number, 1 special character:
          pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
        })}
      />
      {errors && errors.confirmPassword && (
        <p className="error-message">Value must match password.</p>
      )}

      <label htmlFor="pet-name">Pet Name</label>
      <input
        type="text"
        name="pet-name"
        id="pet-name"
        autoComplete="on"
        required
        ref={register}
      />

      <label htmlFor="pet-weight">Pet Weight</label>
      <select name="pet-weight" id="pet-weight" ref={register()} required>
        {weightVals.map((item, idx) => (
          <option value={`${item + 3} lb.`} key={idx}>
            {item + 3} lb.
          </option>
        ))}
      </select>

      <label htmlFor="pet-ideal-weight">Pet Ideal Weight (optional)</label>
      <select
        name="pet-ideal-weight"
        id="pet-ideal-weight"
        ref={register()}
        required
      >
        <option value={'no selection'}>Select a weight</option>
        {weightVals.map((item, idx) => (
          <option value={`${item + 3} lb.`} key={idx}>
            {item + 3}lb.
          </option>
        ))}
      </select>

      <input type="submit" value="SUBMIT" />
    </form>
  );
}
