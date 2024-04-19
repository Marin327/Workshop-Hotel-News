// Модел за резервация
class Reservation {
  constructor(id, guestName, checkInDate, checkOutDate) {
      this.id = id;
      this.guestName = guestName;
      this.checkInDate = checkInDate;
      this.checkOutDate = checkOutDate;
  }
}


const reservations = [];


const reservationService = {
 
  createReservation: ({ guestName, checkInDate, checkOutDate }) => {
      const id = reservations.length + 1;
      const newReservation = new Reservation(id, guestName, checkInDate, checkOutDate);
      reservations.push(newReservation);
      return newReservation;
  },

  
  getAllReservations: () => reservations,

 
  getReservationById: (id) => reservations.find(reservation => reservation.id === parseInt(id)),
};

module.exports = reservationService;
