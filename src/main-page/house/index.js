import React, { Component } from 'react';
import "./main-page.css";

class house extends Component {
    state ={}
    render() {
        const house = this.props.house;

        return( 
            <div>
                <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
                </div>
                <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
                </div>
                <div className="row">
                <div className="colmd-7">
                   
                     <img src={`https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}  alt="House"/>
                
                 </div>
                 <div className="col-md-5">
                     <p className="price">${house.price}</p>
                     <p>{house.description}</p>
                 </div>
                    
                
                
                </div>
            </div>
        ) 

        
    }
}
export default house;