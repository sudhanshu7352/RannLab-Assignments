import axios from "axios";
import { useState } from "react";
import "./home.css";
export const Home = () => {
  const [details, setDetails] = useState({ stock: "", start: "", end: "" });

  const handleChange = (e) => {
    //  let {id,value} =e.target
    setDetails({ ...details, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details);

    // axios
    //   .post("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=Goh_dEjRv8pKt3UI6NqbS5JNvOhzBdwl", details)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert("Register Successful");
    //     setUserDetails({
    //       email: "",
    //       name: "",
    //       phone: "",
    //       password: "",
    //     });
    //     // navigate("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Register Failed");
    //   });
  };
  return (
    <div className="main_div">
      <div id="upper_div">
        <h1>Enter Data</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <span>
              <h2>Stock name : </h2>
            </span>
            <span>
              <input
                type="text"
                id="stock"
                className="inp"
                placeholder="Enter stock name"
                onChange={handleChange}
              />
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <h2>Start date :</h2>
            </span>
            <span>
              <input
                type="text"
                id="start"
                className="inp"
                placeholder="yyyy-mm-dd"
                onChange={handleChange}
              />
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <h2>End date :</h2>
            </span>
            <span>
              <input
                type="text"
                id="end"
                className="inp"
                placeholder="yyyy-mm-dd"
                onChange={handleChange}
              />
            </span>
          </div>

          <br />
          <input type="submit" id="button" value="Submit" />
        </form>
      </div>
      <div>
        {/* {
            details.map((e)=>(
                <h1>Stock name :{e.ticker}</h1>
            ))
        } */}
      </div>
    </div>
  );
};
