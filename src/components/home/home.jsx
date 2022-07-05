import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
export const Home = () => {
  const [details, setDetails] = useState({stock: "TSLA", start: "2021-07-22", end: "2021-07-23" });
  const [data,setData]=useState({})
  const handleChange = (e) => {
    //  let {id,value} =e.target
    setDetails({ ...details, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details,"det");
     getData()
  };
  
  const getData =()=>{
    if(!details){
      setDetails({ stock: "TSLA", start: "2021-07-22", end: "2021-07-23"})
    }
    axios
    .get(`https://api.polygon.io/v2/aggs/ticker/${details.stock}/range/1/day/${details.start}/${details.end}?adjusted=true&sort=asc&limit=120&apiKey=Goh_dEjRv8pKt3UI6NqbS5JNvOhzBdwl`)
    .then((res) => {
      // console.log(res.data,"helo");
      setData(res.data)
      // alert("Register Successful");
    //  setDetails({ stock: "", start: "", end: "" })
    })
    .catch((err) => {
      console.log(err);
      alert("Register Failed");
    });
   
  }
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="main_div">
      <div id="upper_div">
        <h1>Enter Data</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <span>
              <h2>Stock Tickel Name : </h2>
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
                placeholder="  yyyy-mm-dd"
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
                placeholder=" yyyy-mm-dd"
                onChange={handleChange}
              />
            </span>
          </div>

          <br />
          <input type="submit" id="button" value="Submit" />
        </form>
      </div>
      {data.results?
     (<div >
            <h1 className="stock">Stock Details</h1>
             
              <div  style={{ display: "flex" }}><span><h2>Stock name :</h2></span><span className="stock_Det">{data.ticker}</span></div>
              <div  style={{ display: "flex" }}><span><h3>Trading Volume :</h3></span><span className="stock_Det">{data.results[0].v}</span></div>
              <div  style={{ display: "flex" }}><span><h3>Lowest Price :</h3></span><span className="stock_Det">{data.results[0].l} $</span></div>
              <div  style={{ display: "flex" }}><span><h3>Highest Price:</h3></span><span className="stock_Det">{data.results[0].h} $</span></div>
              <div  style={{ display: "flex" }}><span><h3> Number of transcations:</h3></span><span className="stock_Det">{data.results[0].n}</span></div>
      </div>)
      : (
       <>
         <div>Search for any stock details</div>
       </>

      )

      }
      </div>
  );
};
