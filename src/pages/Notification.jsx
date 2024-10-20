import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

const notifyData = [
  {
    id: 1,
    Title: "New Bus Ticket Purchase",
    time: "2024-10-17 10:30 AM",
    description: "A customer purchased a bus ticket for the Dhaka to Chittagong route.",
  },
  {
    id: 2,
    Title: "Train Ticket Refund Request",
    time: "2024-10-17 11:00 AM",
    description: "A customer requested a refund for a canceled train journey.",
  },
  {
    id: 3,
    Title: "Ship Ticket Confirmation",
    time: "2024-10-17 11:45 AM",
    description: "A ship ticket was successfully confirmed for the Barisal to Dhaka trip.",
  },
  {
    id: 4,
    Title: "Flight Booking Payment",
    time: "2024-10-17 12:15 PM",
    description: "A payment was received for a plane ticket to London from Dhaka.",
  },
  {
    id: 5,
    Title: "Taxi Booking for Airport",
    time: "2024-10-17 01:00 PM",
    description: "A taxi was booked for transportation to the airport for a passenger.",
  },
  {
    id: 6,
    Title: "Bus Ticket Cancellation",
    time: "2024-10-17 02:10 PM",
    description: "A customer canceled their bus ticket for the Sylhet to Dhaka route.",
  },
  {
    id: 7,
    Title: "Train Ticket Purchase",
    time: "2024-10-17 02:45 PM",
    description: "A train ticket was purchased for the Dhaka to Rajshahi route.",
  },
  {
    id: 8,
    Title: "Flight Delay Notification",
    time: "2024-10-17 03:15 PM",
    description: "A flight from Dhaka to New York has been delayed by 2 hours.",
  },
  {
    id: 9,
    Title: "Ship Ticket Refund",
    time: "2024-10-17 04:00 PM",
    description: "A refund was processed for a ship ticket from Cox's Bazar to St. Martin's.",
  },
  {
    id: 10,
    Title: "New Taxi Reservation",
    time: "2024-10-17 04:30 PM",
    description: "A taxi was reserved for pickup at Dhaka Airport.",
  }
];

const Notification = () => {
  return (
    <div className='w-full bg-[#111525] overflow-y-auto max-h-screen'>
      <div className='container px-4 pt-8 pb-4 mx-auto lg:px-16 md:px-9'>
        <div className='flex flex-col items-center space-y-4'>
          {notifyData.map((data) => (
            <div key={data.id} className='bg-[#161b2e] border lg:w-2/3 w-full md:w-4/5 border-white/15 hover:border-pink-500 p-4 cursor-pointer space-y-4 rounded-2xl hover:-translate-y-3 transition-all duration-150'>
              <div className='flex flex-row justify-between text-white'>
                <div className='flex items-center space-x-2'>
                  <IoNotificationsOutline className='text-xl text-sky-400' />
                  <h2 className='text-pink-500'>{data.Title}</h2>
                </div>
                <h3 className='self-end px-2 py-1 text-sm bg-pink-600 rounded-xl'>{data.time}</h3>
              </div>
              <div>
                <p className='text-lg text-white'>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
