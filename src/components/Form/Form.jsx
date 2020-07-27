import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';

// create an array of 178 empty items. Return an iterator of its keys (indexes 0 to 177). Spread the iterator into an Array.
const weightVals = [...Array(178).keys()];

export default function Form({ onSubmit }) {
  const { register, handleSubmit, errors, watch } = useForm();
  const emailRef = useRef();

  // focus on first input on mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
        ref={mergeRefs([
          register({
            required: true,
            // regexp for email validation:
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }),
          emailRef,
        ])}
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
        type="password"
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

      <label htmlFor="petName">Pet Name</label>
      <input
        type="text"
        name="petName"
        id="petName"
        autoComplete="on"
        required
        ref={register}
      />

      <label htmlFor="petWeight">Pet Weight</label>
      <select name="petWeight" id="petWeight" ref={register()} required>
        {weightVals.map((item, idx) => (
          <option value={`${item + 3} lb.`} key={idx}>
            {item + 3} lb.
          </option>
        ))}
      </select>

      <label htmlFor="petIdealWeight">Pet Ideal Weight (optional)</label>
      <select name="petIdealWeight" id="petIdealWeight" ref={register()}>
        <option value={'none'}>Select a weight</option>
        {weightVals.map((item, idx) => (
          <option value={`${item + 3} lb.`} key={idx}>
            {item + 3}lb.
          </option>
        ))}
      </select>

      <button type="submit">SUBMIT</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
