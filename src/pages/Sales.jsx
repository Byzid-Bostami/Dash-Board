import React from 'react'
import { motion } from 'framer-motion'
import { CgProfile } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import TargetVsRevenue from '../components/TargetVsRevenue';
import UsersTable from '../components/UsersTable';
import OrdersTable from '../components/OrdersTable';
import ProductPerformance from '../components/ProductPerformance';

const Sales = () => {
  return (

    <div className='w-full bg-[#111525] overflow-y-auto max-h-screen'>
      <div className='container px-4 pt-8 pb-4 mx-auto lg:px-16 md:px-9'>

          {/* top head small card start here */}

          <motion.div
           className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, amount: 0.1 }}>   

          <div className='bg-[#161b2e] border border-white/15 p-4 space-y-1 flex flex-col items-start rounded-2xl hover:-translate-y-3 transition-all duration-150 '>
            <p className='flex items-center space-x-1'><CgProfile className='text-xl text-blue-500' /> <span className='text-gray-300'>Total Users</span></p>
            <p className='text-2xl text-white'>45,300</p>
          </div>

          <div className='bg-[#161b2e] border border-white/15 p-4 space-y-1 flex flex-col hover:-translate-y-3 transition-all duration-150 items-start rounded-2xl '>
            <p className='flex items-center space-x-1'><RiShoppingBag2Line className='text-xl text-yellow-500' /> <span className='text-gray-300'>Total Ticket Sell</span></p>
            <p className='text-2xl text-white'>1,234</p>
          </div>

          <div className='bg-[#161b2e] border border-white/15 p-4 space-y-1 flex flex-col  hover:-translate-y-3 transition-all duration-150 items-start rounded-2xl '>
            <p className='flex items-center space-x-1'><IoTicketOutline className='text-xl text-violet-500' /> <span className='text-gray-300'>Total Ticket Category </span></p>
            <p className='text-2xl text-white'>6</p>
          </div>

          <div className='bg-[#161b2e] border hover:-translate-y-3 transition-all duration-150 border-white/15 p-4 space-y-1 flex flex-col items-start rounded-2xl '>
            <p className='flex items-center space-x-1'>< IoEyeOutline className='text-xl text-green-500' /> <span className='text-gray-300'>Page Views </span></p>
            <p className='text-2xl text-white'>1,234,567</p>
          </div>

        </motion.div>
        
        
              {/* top head small card ends here */}

              {/* revenue vs terget start */}
        <motion.div
        className='bg-[#161b2e] border border-white/15 p-2 rounded-3xl text-center mt-5 '
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}> 
         <TargetVsRevenue /></motion.div>     
              {/* revenue vs terget end */}

              {/* User table */}
              <motion.div
               className='bg-[#161b2e] border border-white/15 p-2 rounded-3xl text-center mt-5 overflow-auto '
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}>
                <UsersTable />
              </motion.div>
               {/* User table */}

                {/* customer table */}
              <motion.div
               className='bg-[#161b2e] border border-white/15 p-2 rounded-3xl text-center mt-5 overflow-auto '
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}>
                <OrdersTable />
              </motion.div>
               {/* customer table */}

               {/* most ticket sell chart  */}
              <motion.div
               className='bg-[#161b2e] border border-white/15 p-2 rounded-3xl text-center mt-5 overflow-auto '
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}>
                <ProductPerformance />
              </motion.div>
               {/* most ticket sell chart */}

      </div>
    </div>
  )
}

export default Sales