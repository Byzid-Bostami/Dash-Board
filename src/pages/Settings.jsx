import React,{useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import Switch from "react-switch";
import { GoLock } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { motion } from 'framer-motion';

import me from '../assets/joker.jpg';
import AccountConnect from '../components/AccountConnect';

const Settings = () => {
  const [push,setPush]= useState(true);
  const [email,setEmail]= useState(false);
  const [sms,setSms]= useState(false);
  const [towFactor,setTowFactor]= useState(true);



  return (
    <div className='w-full bg-[#111525] overflow-y-auto max-h-screen'>
      <div className='container px-4 pt-8 pb-4 mx-auto space-y-5 lg:px-24 md:px-14'>

            {/* profile start */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='bg-[#161b2e] border border-white/15 p-5 rounded-3xl space-y-6 '> 
          <p className='flex flex-row items-center space-x-2'><CgProfile className='text-3xl font-semibold text-indigo-500 ' /> <span className='text-xl font-semibold text-white'>Profile</span></p>
          <div className='flex flex-row items-center space-x-3'>
              <img className='w-20 h-20 rounded-full' src={me} alt="me" />
              <div>
                <h3 className='text-xl font-semibold text-white'>Byzid Bostami</h3>
                <p className='text-slate-300'>byzid@example.com</p>
              </div>
          </div>
          <button className='px-4 py-2 text-lg font-medium text-white transition-colors duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-800'>Edit Profile</button>
        </motion.div>

               {/* profile ends */}


               {/*Notification start */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='bg-[#161b2e] border border-white/15 p-5 rounded-3xl space-y-6 '>
          <p className='flex items-center space-x-2'><IoNotificationsOutline className='text-2xl font-bold text-pink-600' /> <span className='text-xl font-semibold text-white'>Notifications</span></p>
          <p className='flex items-center justify-between'>
            <span className='text-lg text-slate-300'>Push Notifications</span>
            <Switch
            checked={push}
            onChange={setPush}
            onColor="#e825ae"
            onHandleColor="#ffffff"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={45}
          />
          </p>
          <p className='flex items-center justify-between'>
            <span className='text-lg text-slate-300'>Email Notifications</span>
            <Switch
            checked={email}
            onChange={setEmail}
            onColor="#e825ae"
            onHandleColor="#ffffff"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={45}
          />
          </p>
          <p className='flex items-center justify-between'>
            <span className='text-lg text-slate-300'>SMS Notifications</span>
            <Switch
            checked={sms}
            onChange={setSms}
            onColor="#e825ae"
            onHandleColor="#ffffff"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={45}
          />
          </p>
        </motion.div>

               {/*notification ends */}

               {/*Security start */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='bg-[#161b2e] border border-white/15 p-5 rounded-3xl space-y-6'>
          <p className='flex items-center space-x-2'><GoLock className='text-2xl font-bold text-green-400' /> <span className='text-xl font-semibold text-white'>Security</span></p>
          <p className='flex items-center justify-between'>
            <span className='text-lg text-slate-300'>Two-Factor Authentication</span>
            <Switch
            checked={towFactor}
            onChange={setTowFactor}
            onColor="#0da65c"
            onHandleColor="#ffffff"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={45}
          />
          </p>
          <button className='px-4 py-2 text-lg font-medium text-white transition-colors duration-150 bg-green-600 rounded-lg hover:bg-green-800'>Change Password</button>

        </motion.div>

               {/*Security ends */}

                {/* Account start */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='bg-[#161b2e] border border-white/15 p-5 rounded-3xl space-y-6'>
        <p className='flex items-center space-x-2'><FaRegCircleQuestion className='text-2xl font-bold text-[#0be0e0]' /> <span className='text-xl font-semibold text-white'>Connected Accounts</span></p>
          <AccountConnect />
          
        </motion.div>

                {/* Account start */}


                {/*delet button start */}

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className='bg-[#591314] border border-red-500 p-5 rounded-3xl space-y-5'>
          <p className='flex items-center space-x-2'><FaRegTrashAlt className='text-2xl font-bold text-red-400' /> <span className='text-xl font-semibold text-white'>Danger Zone</span></p>
          <p className=' text-slate-200'>Permanently delete your account and all of your content.</p>
          <button className='px-4 py-2 text-lg font-medium text-white transition-colors duration-150 bg-red-500 rounded-lg hover:bg-red-700'>Delete Account</button>
          </motion.div>
                {/*delet button ens */}


      </div>
    </div>
  )
}

export default Settings