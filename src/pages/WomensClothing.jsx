
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Brand from '../components/MenWomenLAndingPage-components/Brand'
import '../components/MenWomenLAndingPage-components/mensWomesPage.css';
const WomensClothing = () => {
   
  const [products,setProducts] = useState([]) 
  const [price,setPrice] = useState([]) 
  const [womenCloth,setWomenCloth] = useState([]) 
  const [womenClothPro,setWomenClothPro] = useState([]) 

    const style = {
        div:{
            width:"80%",
            margin:"auto",
            // border:"2px solid red"
        }
       
    }
    useEffect(()=>{
      fetch(`http://localhost:3000/womenclothsPro`)
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
      fetch(`http://localhost:3000/pricecell`)
      .then(response => response.json())
      .then(product =>{
          setPrice(product);
          // console.log(product);
      })
      .catch((err) => {
        // setError(true)
        console.log(err);
      })
    },[]);

    useEffect(()=>{
      fetch(`http://localhost:3000/womencloths`)
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


    useEffect(()=>{
      fetch(`http://localhost:3000/womenclothsPage`)
      .then(response => response.json())
      .then(product =>{
        setWomenClothPro(product);
          console.log(product);
      })
      .catch((err) => {
        // setError(true)
        console.log(err);
      })
    },[]);

    const handleClick = (item) => {
      localStorage.setItem("singleProduct", JSON.stringify(item));
  
      Navigate(`/products/women-tops/${item.id}`);
    };

  return (
    <>
    {/* women's first page */}
    <div style={style.div}>
      <h1>Women's Clothing</h1>
    </div>
    <div className='container'>
        <p>Home / <span> ClothingWomen's</span>  / <span>Clothing</span> </p>
    </div>

 <div className='container' style={{width:"100%" , marginBottom:"40px"}} >
    <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>

    {products.map((womencloths) => (
            <div key={womencloths.id} onClick={()=>{<div>Rajtilak patel</div>}} className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src={womencloths.imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>{womencloths.desc}</h2>
            </div>
           </div>
          ))}
    </div>
 </div>
{/* women's page end */}

{/* email page */}
    <div  style={{backgroundColor:"#e5f1f8", textAlign:"center",marginTop:"50px",height:"250px",paddingTop:"30px",width:"91%",margin:"auto",marginLeft:"80px"}}>
        <h1 style={{fontSize:"30px",paddingBottom:"20px"}}>Make Zappos (Emails) Your New BFF</h1>
        <h4 style= {{fontSize:"25px",paddingBottom:"30px"}}>Get the deets on upcoming sales, new arrivals, seasonal favorites, and all the brands you love!</h4>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <input type="email" name="" id="" style={{fontSize:"20px",padding:"5px",border:"2px dashed blue"}} placeholder="Email Address" />
          <button type="button" className="btn btn-primary" style= {{fontSize:"18px",backgroundColor:"#003953",marginLeft:"10px",textTransform:"uppercase"}} >Subscribe to zappos Emails</button>
        </div>
    </div>

  {/* coats and outwears */}
    <div style={{width:"100%",margin:"auto",marginLeft:"80px",margin:"40px" }} >
       <div style={{height:"250px",backgroundColor:"white", width:"350px" ,position:"absolute",marginLeft:"40px",marginTop:"30px",padding:"10px 40px"}} >
       <h1 style={{fontSize:"23px"}}>New Arrivals: Coats & Outerwear</h1>
        <h4 style= {{marginTop:"30px"}}>Complete every fall look with our most coveted picks of the season.</h4>
        <div style={{fontSize:"28px"}}>
          <button type="button"  style={{fontSize:"18px",backgroundColor:"white",border:"2px solid black",fontWeight:"bold",margin:"20px",padding:"5px 10px"}} >SHOP WOMEN'S COATS & OUTERWEAR</button>
        </div>
       </div>
       <img style={{width:"91%"}} src="https://m.media-amazon.com/images/G/01/2022/womens/WOMENS-COATS-OUTERWEAR-NEW-ARRIVALS-OCTOBER-HERO-1440x700.jpg" alt="" />
    </div>


   {/*  shop by price */}

    <div className="container" style={{width:"100%" , marginBottom:"40px"}}>
      <h1 style={{fontSize:"30px"}}>Shop by Price</h1>
       <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>

       {price.map((price) => (
            <div key={price.id} className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src={price.imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center",fontSize:"20px"}}>{price.desc}</h2>
            </div>
           </div>
          ))}
    </div>
   </div>


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
        <img  src="https://m.media-amazon.com/images/G/01/2022/aoe/FREE-PEOPLE-OCTOBER-COOP-960x500.jpg" alt="" />
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

{/* three card page */}
      <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",width:"90%" ,marginTop:"40px"}}>

      {womenClothPro.map((womencloths) => (
             <div key={womencloths.id} onClick={() => handleClick(womencloths)} className="card box" style={{width: "14rem",cursor:"pointer"}}>
             <img style={{height: "18rem"}}  src={womencloths.imageurl} className="card-img-top" alt="..."/>
               <h3 className="card-title" style={{textAlign:"center",fontSize:"20px",marginTop:"5px"}}>{womencloths.brand}</h3>
             <div className="card-body">
               <h2 className="card-title" style={{fontSize:"20px"}}>{womencloths.desc}</h2>
               <h4 className="card-title" style={{fontSize:"20px"}}>${womencloths.price}</h4>
               ⭐⭐⭐⭐⭐ <span>({womencloths.ratings})</span>
             </div>
            </div>
          ))}
        
    
    </div>
      </div>
   </div>



{/* shop the fall */}

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

   

{/* Best sellor part */}
   <section>
   <div className='container' style={{width:"100%" , marginBottom:"40px"}} >
    <h1 style={{fontSize:"40px"}}>Best Sellor</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"20px",width:"80%" ,marginTop:"40px"}}>

    {womenCloth.map((women) => (
            <div key={women.id}  onClick={() => handleClick(women)} className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src={women.imageurl} className="card-img-top" alt="..."/>
              <h3 className="card-title" style={{textAlign:"center",fontSize:"17px",marginTop:"5px"}}>{women.brand}</h3>
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


   <section>
      <Brand/>
   </section>
    </>
  )
}

export default WomensClothing;
