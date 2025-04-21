
export const getBookings=()=>{
    const bookings = localStorage.getItem('bookings');
    if(bookings){
        const  storedBookingsData = JSON.parse(bookings);
        return storedBookingsData;
    }
    return [];

}

// export const addBooking = doctor=>{
//     const bookings = getBookings()
//     const isExist = bookings.find(d=>d.id === doctor.id)
//      if(isExist) return console.log('added')
//     bookings.push(doctor)
//     console.log(bookings)
//     localStorage.setItem('bookings', JSON.stringify(bookings))
// }

const saveCartToLocalstorage = bookings =>{
    const cartStringified = JSON.stringify(bookings);
    localStorage.setItem('bookings', cartStringified);
}

 export const addItemToCartlocalStorage = (id) => {
    const storedBookingsData = getBookings();

    if(storedBookingsData.includes(id)){
        alert("Already Exist This Item");
    }
    else{
         //storedBookData.push(id)
        const newcart = [...storedBookingsData, id];
        //save cart to local storage
        saveCartToLocalstorage(newcart);
        
    }
      
}

export const removeBooking =(id)=>{
    const storedBookingsData = getBookings();
    const remainingBookings = storedBookingsData.filter(doctor => doctor.id !==id)
    localStorage.setItem('bookings', JSON.stringify(remainingBookings))
}