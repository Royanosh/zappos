
import React, { useEffect, useState } from 'react'
const MensClothing = () => {
   
  const [products,setProducts] = useState([]) 
  const [price,setPrice] = useState([]) 
  const [womenCloth,setWomenCloth] = useState([]) 

    const style = {
        div:{
            width:"80%",
            margin:"auto",
            // border:"2px solid red"
        }
       
    }
    useEffect(()=>{
      fetch(`http://localhost:3001/womenclothsPro`)
      .then(response => response.json())
      .then(product =>{
          setProducts(product);
          // console.log(product);
      })
      .catch((err) => {
        // setError(true)
        console.log(err);
      })
      // setLoading(false));
    },[]);


    useEffect(()=>{
      fetch(`http://localhost:3001/mensPro`)
      .then(response => response.json())
      .then(product =>{
          setPrice(product);
          console.log(product);
      })
      .catch((err) => {
        // setError(true)
        console.log(err);
      })
    },[]);

    useEffect(()=>{
      fetch(`http://localhost:3001/menscloths`)
      .then(response => response.json())
      .then(product =>{
        setWomenCloth(product);
          console.log(product);
      })
      .catch((err) => {
        // setError(true)
        console.log(err);
      })
    },[]);

  return (
    <>

<div style={style.div}>
      <h1>Mens's Clothing</h1>
    </div>
    <div className='container'>
        <p>Home / <span> ClothingMen's</span>  / <span>Clothing</span> </p>
    </div>


  {/* coats and outwears */}
  <div style={{width:"100%",margin:"auto",marginLeft:"80px",margin:"40px" }} >
       <div style={{height:"270px",backgroundColor:"white", width:"450px" ,position:"absolute",marginLeft:"40px",marginTop:"400px",padding:"10px 40px"}} >
       <h1 style={{fontSize:"25px"}}>Our Favorite Fall Layers: Hoodies &amp; Sweaters</h1>
        <h4 style= {{marginTop:"30px",fontSize:"20px"}}>More than just a cozy vibes, these layers deliver style for cooler season.</h4>
        <div style={{fontSize:"28px"}}>
          <button type="button"  style={{fontSize:"18px",backgroundColor:"white",border:"2px solid black",fontWeight:"bold",margin:"20px",padding:"5px 10px",textTransform:"uppercase"}}>Shop Men’s Hoodies &amp; Sweaters</button>
        </div>
       </div>
       <img style={{width:"91%"}} src="https://m.media-amazon.com/images/G/01/2022/Mens/MENS-SWEATERS-HOODIES-OCTOBER-HERO-1440x700.jpg" alt="" />
    </div>





    {/* men's first page */}
 <div className='container' style={{width:"100%" , marginBottom:"40px"}} >
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>
    {price.map((womencloths) => (
            <div key={womencloths.id} className="card" style={{width: "28rem",cursor:"pointer"}}>
            <img style={{height: "30rem"}}  src={womencloths.imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>{womencloths.desc}</h2>
            </div>
           </div>
          ))}
    </div>
 </div>
{/* men's page end */}






{/* fall in love */}
   <div className="container" style={{display:"flex"}}>
      <div>
          <div style={{width:"100%",margin:"auto",marginLeft:"20px",margin:"20px"}} >
            <div style={{height:"250px",backgroundColor:"white", width:"500px",padding:"50px"}} >
            <h1 style={{fontSize:"30px"}}>Fall in Love with Free people</h1>
              <h4 style= {{marginTop:"20px",fontSize:"22px"}}>kick-start the new season with cozy-chic tops,timelwss denim, midi dresses , and si much more!</h4>
              <div style={{fontSize:"28px"}}>
                <button type="button"  style={{fontSize:"18px",backgroundColor:"white",border:"2px solid black",fontWeight:"bold",padding:"5px 10px",marginTop:"20px"}} >SHOP WOMEN'S COATS & OUTERWEAR</button>
              </div>
            </div>
            </div>
        </div>
      <div>
        <img  src="https://m.media-amazon.com/images/G/01/2022/aoe/RALPH-LAUREN-MENS-OCTOBER-COOP-960x500.jpg" alt="" />
      </div>
   </div>


   <div className="container" style={{display:"flex"}}>
      <div>
          <div style={{width:"100%",margin:"auto",marginLeft:"20px",margin:"20px"}} >
            <div style={{height:"250px",backgroundColor:"white", width:"500px",padding:"50px"}} >
            <h1 style={{fontSize:"30px"}}>New Arrivals from KUT from the Kloth</h1>
              <div style={{fontSize:"28px"}}>
                <button type="button"  style={{fontSize:"18px",backgroundColor:"white",border:"2px solid black",fontWeight:"bold",padding:"5px 10px",marginTop:"20px"}} >SHOP KUT FROM THE KLOTH</button>
              </div>
            </div>
            </div>
        </div>

      <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",width:"90%" ,marginTop:"40px"}}>
         <div className="card" style={{width:"15rem"}}>
          <img style={{height: "25rem"}}  src="https://m.media-amazon.com/images/I/816oM6FRuxS._AC_SX255_.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "15rem"}}>
          <img style={{height: "25rem"}}  src="https://m.media-amazon.com/images/I/813ORXYkvWL._AC_SX255_.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "15rem"}}>
          <img style={{height: "25rem"}}  src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
    
    </div>
      </div>
   </div>





   <div style={{width:"100%",margin:"auto",marginLeft:"80px",margin:"40px"}} >
       <div style={{height:"260px",backgroundColor:"white", width:"440px" ,position:"absolute",marginLeft:"1000px",marginTop:"30px",padding:"10px 40px"}} >
       <h1 style={{fontSize:"25px"}}>Your Fall 2022 Guide to Fashion</h1>
        <h4 style= {{marginTop:"10px",fontSize:"20px"}}>Boots,jackets,sneakers-- everything you love avout fall all in one place. plus, don't miss out on key picks from SOREL, L.L.Beans,UGG, nad Steve Maddden!</h4>
        <div style={{fontSize:"28px"}}>
          <button type="button"  style={{fontSize:"18px",backgroundColor:"white",border:"2px solid black",fontWeight:"bold",margin:"20px",padding:"5px 10px"}} >SHOP THE FALL FUIDE</button>
        </div>
       </div>
       <img style={{width:"91%"}}  src="https://m.media-amazon.com/images/G/01/2022/homepage9.05HP/COOP-FALL-STYLE-CAMPAIGN-HERO-1440x700.jpg" alt="" />
    </div>

   

   <section>
   <div className='container' style={{width:"100%" , marginBottom:"40px"}} >
    <h1 style={{fontSize:"40px"}}>Best Sellor</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>

    {womenCloth.map((women) => (
            <div key={women.id} className="card" style={{width: "14rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src={women.imageurl} className="card-img-top" alt="..."/>
              <h3 className="card-title" style={{textAlign:"center",fontSize:"20px",marginTop:"5px"}}>{women.brand}</h3>
            <div className="card-body">
              <h2 className="card-title" style={{fontSize:"20px"}}>{women.desc}</h2>
              <h4 className="card-title" style={{fontSize:"20px"}}>${women.price}</h4>
              ⭐⭐⭐⭐⭐ <span>({women.ratings})</span>
            </div>
           </div>
     ))}
    </div>
 </div>
   </section>

{/* brand section */}
   <section>
   <div className='container' style={{width:"100%" , marginBottom:"40px"}} >
    <h1 style={{fontSize:"40px"}}>Trending Brands</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
    </div>
 </div><div className='container' style={{width:"100%" , marginBottom:"40px"}} >
    <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
         <div className="card" style={{width: "13rem"}}>
          <img style={{height: "18rem"}}  src="https://bit.ly/dan-abramov" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title" style={{textAlign:"center"}}>Card title</h2>
          </div>
        </div>
    </div>
 </div>
   </section>
    </>
  )
}

export default MensClothing;

