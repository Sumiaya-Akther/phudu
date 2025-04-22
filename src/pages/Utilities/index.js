import { toast } from 'react-hot-toast';

export const getBookings = () => {
  const bookings = localStorage.getItem('bookings');
  return bookings ? JSON.parse(bookings) : [];
};

const saveCartToLocalstorage = (bookings) => {
  const cartStringified = JSON.stringify(bookings);
  localStorage.setItem('bookings', cartStringified);
};

export const addItemToCartlocalStorage = (id) => {
  const storedBookingsData = getBookings();

  if (storedBookingsData.includes(id)) {
    toast.error('You have already booked this appointment');
  } else {
    const newCart = [...storedBookingsData, id];
    saveCartToLocalstorage(newCart);
    toast.success('Appointment booked successfully!');
  }
};

export const removeBooking = (id) => {
  const storedBookingsData = getBookings();
  const remainingBookings = storedBookingsData.filter(
    (bookingId) => bookingId !== id
  );
  saveCartToLocalstorage(remainingBookings);
  toast.success('Booking cancelled successfully!');
};