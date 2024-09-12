import React, { useState } from "react";

const TableBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [hallType, setHallType] = useState("Non-AC Hall");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking submission logic here
    console.log("Booking Details:", {
      name,
      email,
      date,
      time,
      guests,
      hallType,
    });

    // Reset the form
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests(1);
    setHallType("Non-AC Hall");
    setMessage("Your table has been booked successfully!");
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/neattable.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
          <div
            className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-md p-6 mt-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))",
            }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              Book a Table
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  min="1"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Book Now
              </button>
            </form>
            {message && (
              <p className="mt-4 text-green-600 font-semibold text-center">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
