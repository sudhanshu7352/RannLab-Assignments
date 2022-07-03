
import "./home.css"
export const Home =()=>{

    
    const handleChange=()=>{
        let {id,value} =e.target
    }
    return (
        <div className="main_div">
            <div>
                <form>
                     <h2>Stock name :</h2>
                     <input type="text" id="stock" placeholder="Enter stock name" />
                       <h2>Start date :</h2>
                       <input type="text" id="start" placeholder="Enter start date" />
                       <h2>Start date :</h2>
                       <input type="text" id="end" />
                       <br />
                       <input type="submit" placeholder="enter end date"/>
                </form>

            </div>
            <div></div>
        </div>
    )
}