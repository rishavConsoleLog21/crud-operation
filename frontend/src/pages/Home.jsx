import React, { useEffect, useState } from "react";
import axios from "axios";
import Snipper from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/employees")
      .then((response) => {
        setEmployees(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center bg-slate-100 mb-2">
        <h1 className="text-3xl my-8">Employee Lists</h1>
        <h2 className="text-xl text-blue-600 my-8">
          Total Employees: {employees.length}
        </h2>
        <Link to="/employees/create">
          <MdOutlineAddBox className="text-4xl text-emerald-600" />
        </Link>
      </div>
      <div className="flex justify-end items-center gap-x-4">
        <input
          type="text"
          placeholder="Search Employee"
          className="p-2 border border-slate-600 rounded-md"
        />
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Search
        </button>
      </div>
      <br />
      {loading ? (
        <Snipper />
      ) : (
        // Add Search option
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="bg-slate-300">
              <th className="border border-slate-600 rounded-md">Unique ID</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Image
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Name
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Email Id
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Mobile No
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Designation
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Gender
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Course
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Created At
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee._id}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee.name}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee.email}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee.phone}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee.designation}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee.gender}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {employee.course}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  {new Date(employee.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden py-2">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/employees/details/${employee._id}`}>
                      <BsInfoCircle className="text-2xl text-blue-600 mx-2" />
                    </Link>
                    <Link to={`/employees/edit/${employee._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-300 mx-2" />
                    </Link>
                    <Link to={`/employees/delete/${employee._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600 mx-2" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
