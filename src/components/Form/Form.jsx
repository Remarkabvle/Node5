import "./Form.scss";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../../context/api/userApi";
import useGetValue from "../../hook/useGetValue";

const initialState = {
  fname: "",
  lname: "",
  username: "",
  password: "",
  age: "",
  gender: "",
  budget: "",
};

const Form = () => {
  const [createUser, { data, isLoading, isSuccess }] = useCreateUserMutation();
  const { handleChange, setUser, user } = useGetValue(initialState);

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(user);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.msg);
      setUser(initialState);
    }
  }, [isSuccess, setUser]);

  return (
    <form className="user-form" onSubmit={handleCreateUser}>
      <div className="form-field">
        <label htmlFor="fname">First Name</label>
        <input
          required
          value={user.fname}
          onChange={handleChange}
          name="fname"
          type="text"
          placeholder="Enter first name"
        />
      </div>
      <div className="form-field">
        <label htmlFor="lname">Last Name</label>
        <input
          required
          value={user.lname}
          onChange={handleChange}
          name="lname"
          type="text"
          placeholder="Enter last name"
        />
      </div>
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input
          required
          value={user.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter username"
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          required
          value={user.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div className="form-field">
        <label htmlFor="age">Age</label>
        <input
          value={user.age}
          required
          onChange={handleChange}
          name="age"
          type="number"
          placeholder="Enter age"
        />
      </div>
      <div className="form-field">
        <label htmlFor="gender">Gender</label>
        <select
          required
          value={user.gender}
          onChange={handleChange}
          name="gender"
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="budget">Budget</label>
        <input
          required
          value={user.budget}
          onChange={handleChange}
          name="budget"
          type="number"
          placeholder="Enter budget"
        />
      </div>
      <button className="submit-button" type="submit" disabled={isLoading}>
        Create
      </button>
    </form>
  );
};

export default Form;
