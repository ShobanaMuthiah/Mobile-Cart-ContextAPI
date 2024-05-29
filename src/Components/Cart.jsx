import React, { useContext } from 'react';
import { mycontext } from '../App';

const Cart = () => {
    const [data,setData]=useContext(mycontext)
    const totPrice=data.reduce((total,data)=>total+data.price*(data.qtty||0),0)

    const totQtty=data.reduce((total,data)=>total+(data.subprice||0),0)
    const handleInc=(id,qtty,price)=>{
setData(qt=>{
    return qt.map((ele)=>{
        if(ele.id===id){
return {...ele,qtty:(ele.qtty+1)||qtty+1,subprice:((ele.qtty+1)*ele.price)||(qtty+1)*price}
        }
        return ele
    }
    )
})
    }
    const handleDec=(id,qtty,price)=>{

        setData(qt=>{
            return qt.map((ele)=>{
                if(ele.id===id && qtty>0){
                   
        return {...ele,qtty:(ele.qtty-1)||qtty-1,subprice:((ele.qtty-1)*ele.price)||(qtty-1)*price}
                   
                }
                return ele
            }
            )
        })

    }
    const remove=(id)=>{
        setData(
            data.filter(ele=>{
            if(ele.id!==id)
                {
                    return ele
                }})
        )    }
        

    return (
        <>
        <nav>
      
            <h1 className='tit col-sm-11 text-center'>Mobile Shop Cart</h1><br /><br />
            <h4 className='col '> <div className="navi">
                Total Quantity: <p className="tot">{totQtty}</p></div>
                <div className="navi">
                Total Price: <p className="tot">&#8377;{totPrice}</p>

            </div></h4>
        </nav> 
            {data.map((ele,index)=>{
return(


<div key={index} className="card sm-3 "  >
  <div className="row g-0">
    <div className="col-sm-3">
    <div id={`carousel-${ele.id}`} className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {ele.images.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={image} height='300' className="d-block w-100" alt={`Slide ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${ele.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${ele.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
        
    </div>
    <div className="col-sm-8 ">
      <div className="card-body"  >
      <p className='float-end btn-group' role="group"> 
      <button className='btn  ' onClick={()=>handleDec(ele.id,ele.qtty||0,ele.price||0)}>-</button>
        <div className='qtty bg-secondary'>{ele.qtty}</div>

        <button className='btn'  onClick={()=>handleInc(ele.id,ele.qtty||0,ele.price||0)}>+</button>
        </p>
        <h1 className="card-title">{ele.title}</h1>
       
       

        <h4 className="card-text">Brand: {ele.brand}</h4>
        <h4 className="card-text">Category: {ele.category}</h4>
        <p className="card-text">{ele.description}</p>
        
       <div> <div className="card-text pri ">Price Of the Product: &nbsp; <div className='val'>&#8377;{ele.price}</div></div>
        <div className="card-text pri">Total Price of the Product: &nbsp; <div className='val'>&#8377;{ele.subprice}</div></div>
</div>
    <div>
            <button className='rmv' onClick={()=>remove(ele.id)}>Remove</button>
        </div>

       
      </div>
    </div>
  </div>
</div>
)

            })}
        </>
    );
};

export default Cart;