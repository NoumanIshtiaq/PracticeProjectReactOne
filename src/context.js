import React, { Component } from 'react'
import items from './data'

const RoomContext =  React.createContext()

 class RoomProvider extends Component {
  state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:false,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pet:false
    };

    //get Data

    componentDidMount(){
        let rooms=this.formatData(items)
        let featuredRooms = rooms.filter(rooms=>rooms.featured===true);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize

        })
    }

formatData(items){
    let tempItems=items.map(item=>{
        let id=item.sys.id
        let images = item.fields.images.map(image=>image.fields.file.url);
        let room={...item.fields,images,id};
        return room
})
 return tempItems
}

getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((rooms)=> rooms.slug === slug)
    return room
}

handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name
    this.setState({
        [name]:value
    }, this.filterRooms)
    }


filterRooms = () =>
{
let {rooms, type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = this.state;

let tempRooms = [...rooms];
//filter buy value
capacity=parseInt(capacity);
price=parseInt(price);

if (type!=='all')
{
    tempRooms = tempRooms.filter(rooms=>rooms.type===type);
    
}
if (capacity!==1)
{ 
    tempRooms = tempRooms.filter(rooms=>rooms.capacity >=capacity);
}

   tempRooms = tempRooms.filter(rooms=>rooms.price <=price);

    tempRooms = tempRooms.filter(rooms=>rooms.size >= minSize && rooms.size <= maxSize);

if (breakfast)
{ 
    tempRooms = tempRooms.filter(rooms=>rooms.breakfast === true);
}

if (pets)
{ 
    tempRooms = tempRooms.filter(rooms=>rooms.pets === true );
}
this.setState({
    sortedRooms:tempRooms
})
}










    render() {
        return (
            <RoomContext.Provider value=
            {{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

 export function withRoomConsumer (Component) {
     return function consumerWrapper (props){
         return <RoomConsumer>
             {value => <Component {...props} context={value}/>}
         </RoomConsumer>
     }
 }
export {RoomProvider, RoomConsumer, RoomContext};