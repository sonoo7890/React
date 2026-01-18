const PropChild=({myimg,myprice,mydes})=>{

    // let {myname,myage}=props  //Destructuring

    return(
        
        <div>

            <div id='card'>
                <img src={myimg} alt="" width="100%" height="200px"/>
                <h1>Price 999</h1>
                <h3>{mydes}</h3>
                <button>Buy Now</button>

            </div>
            {/* this is PropChild
            <h1>my name is {props.myname} </h1> */}
            {/* <h1>my name is {myname}and my age is {myage} </h1>  */}

        </div>
    )
}
export default PropChild