import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

const getUnique = (items , value ) => {
    return [...new Set(items.map(item => item[value]))]
}
 
export default function RoomsFilter({rooms}) {
    const context = useContext (RoomContext); 
    const {
        handleChange, type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} =context;
    //get unique
        let types = getUnique (rooms, 'type')
    //a dd all
    types=['all',...types]
    // map to  jsx
        types = types.map ((item,index)=> {
            return <option key={index} value={item}>{item}</option>
        })
        //get unique
        let people = getUnique(rooms, 'capacity')
    //a dd all
   // types=['all',...types]
    // map to  jsx
        people = people.map ((item,index)=> {
            return <option key={index} value={item}>{item}</option>
        })
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* Select type*/}
                <div className="form-group">
                    <label htmlFor="type" > Room Type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                    </div>
            {/*select type end */}
            {/* Select guest type*/}
            <div className="form-group">
                    <label htmlFor="capacity" >Guests</label>
                    <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                        {people}
                        
                    </select>
                    </div>
            {/*select type end */}
            {/*price satrt */}
            <div className="form-group">
            <label htmlFor="price" > room Price ${price}
            </label>
            <input type='range' name='price' min={minPrice} max={maxPrice}
            id="price" value={price} onChange={handleChange} className='form-control'/>


            </div>
            {/*price end */}
            {/*size satrt */}
            <div className="form-group">
            <label htmlFor="size" > room Size
            </label>
            <div className='size-inputs'>
            <input type="number" name="minSize" id='size'
            value={minSize} onChange={handleChange} className='size-input'/>
            <input type="number" name="maxSize" id='size'
            value={maxSize} onChange={handleChange} className='size-input'/>
            
            
            </div>
            </div>
            {/* size end */}
            {/*checkbox start */}
            <div className="form-group">
            <div className="single-extra">
            <input type="checkbox" name="breakfast" id='breakfast'
            checked={breakfast} onChange={handleChange} className='size-input'/>
            <label htmlFor="breakfast" > Breakfast
            </label>
            </div>
            <div className="single-extra">
            <input type="checkbox" name="pets" id='pets'
            checked={pets} onChange={handleChange} className='size-input'/>
            <label htmlFor="pets" > pets
            </label>
            </div>
            </div>
            {/*checkbox start */}
            </form>
        </section>
    )
}
