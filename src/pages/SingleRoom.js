import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
       // console.log(props)
       this.state={
           slug:this.props.match.params.slug,
           defaultBcg
       }
    }
    static contextType = RoomContext;
    // componentDidMount(){}

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if (!room) {
            return ( <div className="error"> <h3>no such thing found </h3> 
            <Link to='/rooms' className="btn-primary"> Back to Rooms </Link>
             </div>
            )

        }
        const {name, description,capacity,size,price,extras,breakfast,pets,images} = room
// for haveing only restimages, destructed cont [mi,...i]=images . and replace images.map to i.map. 
        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to room
                    </Link>
                </Banner>
            </StyledHero>
<section className='single-room'>
    <div className='single-room-images'>
        {images.map ((item,index) =>{
          return   <img key={index} src={item} alt={name}/>
    })}
    </div>
<div className="single-room-info">
    <article className='desc'>
        <h3>Details</h3>
        <p>{description}</p>  
    </article>
    <article className='info'>
        <h3>Info</h3>
        <h3> price: ${price}</h3>
        <h3> size: {size}SQFT</h3>
        <h6> 
            max capacity :{''}
            {capacity > 1 ? `${capacity} people`: `${capacity} person`}
        </h6>
        <h6>{pets?'pets allowed':'no pets allowed'}</h6>
        <h6>{breakfast && "breakfast included"}</h6>
    </article>

    </div>
</section>
<section className="room-extras">
    <h6>Extras</h6>
    <ul className="extras">
        {extras.map((item,index)=>{
         return ( <li key={index}> 
          - {item} </li>
         ) 
        })}
    </ul>
</section>
        </>
        )
    }
}
