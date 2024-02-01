import React from "react";

export default function RegisterForm() {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">name?</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </label>
    
  );
}
