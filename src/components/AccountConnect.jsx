import React, { useState } from 'react';

const initialAccounts = [
  { id: 1, name: "Google", connected: true, img: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" },
  { id: 2, name: "Facebook", connected: true, img: "https://freepnglogo.com/images/all_img/facebook-logo.png" },
  { id: 3, name: "Twitter", connected: false, img: "https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png" },
];

const AccountConnect = () => {
  // State to track connection status of each account
  const [accounts, setAccounts] = useState(initialAccounts);

  // Function to toggle the connection state
  const toggleConnection = (id) => {
    setAccounts((prevState) =>
      prevState.map((account) =>
        account.id === id ? { ...account, connected: !account.connected } : account
      )
    );
  };

  return (
    <div className='flex flex-col'>
      {accounts.map((item) => (
        <div className='flex justify-between' key={item.id}>
          <div className='flex items-center pb-8 space-x-3 text-slate-200'>
            <img className='w-6 h-6' src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>


          <div className='flex flex-col items-center'>
          {item.connected ? (
            <button
              onClick={() => toggleConnection(item.id)}
              className='text-white bg-[#2eb7b7] hover:bg-[#258d8d] transition-colors duration-150 py-2 px-4 rounded-lg'
            >
              Connected
            </button>
          ) : (
            <button
              onClick={() => toggleConnection(item.id)}
              className='px-4 py-2 text-white bg-gray-500 rounded-lg'
            >
              Connect
            </button>
          )}
          </div>


        </div>
      ))}
    </div>
  );
};

export default AccountConnect;
