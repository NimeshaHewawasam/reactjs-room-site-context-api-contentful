import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pet
    } = context;
    let types = getUnique(rooms,'type');
    types = ['all',...types]
    types = types.map((item,index) => {
        return <option value={item} key = {index}>{item}</option>
    });

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
       <section className="filter-container">
           <Title title="search rooms"/>
           <form className="filter-form">
               {/* select type*/}
           <div className="form-group">
               <label htmlFor = "type">room type</label>
               <select 
               name="type" 
               id="type" 
               value={type} className="form-control" onChange={handleChange}>
                 {types}  
               </select>
           </div>

           {/* according to the gsts */}
           <div className="form-group">
               <label htmlFor = "capacity">guests</label>
               <select 
               name="capacity" 
               id="capacity" 
               value={capacity} className="form-control" onChange={handleChange}>
                 {people}  
               </select>
           </div>

           {/* according to the price */}
           {/* according to the gsts */}
           <div className="form-group">
               <label htmlFor = "price">room Price ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
           </div>

           {/* size*/}
           <div className="form-group">
               <label htmlFor="size">roomsize</label>
               <div className="size-inputs">
                   <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                   <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
               </div>
           </div>

           {/* extras*/}
           <div className="form-group">
               <div className="single-extra">
                   <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
                   <label htmlFor="breakfast">Breakfast</label>

                   <input type="checkbox" name="pet" id="pet" checked={pet} onChange={handleChange}></input>

                   <label htmlFor="pet">pets</label>               </div>
           </div>
           </form>
       </section>
    )
}
