import React from 'react'
import { CgDollar } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineInbox } from "react-icons/md";
import { motion} from 'framer-motion';

import DailyTicketSales from '../components/DailyTicketSales';
import Trafic from '../components/Trafic';
import NewTicketAndReturnTicket from '../components/NewTicketAndReturnTicket';
import Calendar from 'react-calendar';

const DashBoard = () => {
  return (
    <div className='w-full bg-[#111525] overflow-y-auto max-h-screen'>
      <div className='container px-4 pt-8 mx-auto lg:px-16 md:px-9'>


              {/* top head small card start here */}

        <motion.div
           className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, amount: 0.1 }}>   

          <div className='bg-[#161b2e] border border-white/15 p-4 space-y-1 flex flex-col items-start rounded-2xl hover:-translate-y-3 transition-all duration-150 '>
            <p className='flex items-center'><CgDollar className='text-xl text-blue-500' /> <span className='text-gray-300'>Total Revenue</span></p>
            <p className='text-2xl text-white'>$1,034,371.53</p>
          </div>

          <div className='bg-[#161b2e] border border-white/15 p-4 space-y-1 flex flex-col hover:-translate-y-3 transition-all duration-150 items-start rounded-2xl '>
            <p className='flex items-center space-x-1'><FiShoppingCart className='text-xl text-green-500' /> <span className='text-gray-300'>Avg. Order Value</span></p>
            <p className='text-2xl text-white'>$78.93</p>
          </div>

          <div className='bg-[#161b2e] border border-white/15 p-4 space-y-1 flex flex-col  hover:-translate-y-3 transition-all duration-150 items-start rounded-2xl '>
            <p className='flex items-center space-x-1'><HiArrowTrendingUp className='text-xl text-yellow-500' /> <span className='text-gray-300'>Conversion Rate</span></p>
            <p className='text-2xl text-white'>4.83%</p>
          </div>

          <div className='bg-[#161b2e] border hover:-translate-y-3 transition-all duration-150 border-white/15 p-4 space-y-1 flex flex-col items-start rounded-2xl '>
            <p className='flex items-center space-x-1'>< MdOutlineInbox className='text-xl text-red-500' /> <span className='text-gray-300'>Sales Growth</span></p>
            <p className='text-2xl text-white'>13.4%</p>
          </div>

        </motion.div>
        
        
              {/* top head small card ends here */}

              {/* Chart first row start from here */}

        <div className='grid grid-cols-1 gap-5 pt-5 md:grid-cols-1 lg:grid-cols-3'>

            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className='bg-[#161b2e] border border-white/15 p-4 rounded-3xl space-y-3 text-center lg:col-span-2'>
              <h2 className='text-white'>Daily Ticket Sales </h2>
              <div>
                <DailyTicketSales />
              </div>
              
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true, amount: 0.1 }}
              className='bg-[#161b2e] border border-white/15 p-4 rounded-3xl space-y-3 text-center'>

            <h2 className='text-white'>Trafic </h2>
            
              <Trafic />
            
            </motion.div>

        </div>

            {/* Chart first row ends here */}

            {/* Chart secoend row start froms here */}


      <div className='grid grid-cols-1 gap-5 pt-5 pb-5 md:grid-cols-1 lg:grid-cols-3'>

      <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className='bg-[#161b2e] border border-white/15 p-4 rounded-3xl space-y-3 text-center'>
              <h2 className='text-white'>New Ticket vs Return Ticket </h2>
              <div>
                <NewTicketAndReturnTicket />
              </div>
              
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className='flex flex-col items-center justify-center p-4 space-y-3 text-center text-white border bg-[#161b2e] border-white/15 rounded-3xl lg:col-span-2'>
              
              <Calendar  />
              
            </motion.div>

      </div>


            {/* Chart secoend row ends here */}

      </div>
    </div>
  )
}

export default DashBoard