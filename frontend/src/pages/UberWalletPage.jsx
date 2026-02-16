import React from "react";
import { Plus, ChevronRight, UserRound } from "lucide-react";

const UberWalletPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] px-6 md:px-16 lg:px-32 xl:px-60 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Balance Card */}
          <div className="bg-[#eeeeee] rounded-2xl hover:bg-[#dddddd] p-8 border border-gray-200 transition duration-200">
            <p className="text-gray-600 text-lg mb-2">Balance</p>

            <h1 className="text-4xl font-semibold mb-6">₹0.00</h1>

            <p className="text-xl font-medium mb-8 max-w-sm">
              Add the bank account where you want to receive payouts
            </p>

            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              <Plus size={18} />
              Add bank account
            </button>
          </div>

          {/* Uber Cash Card */}
          <div
            className=" bg-linear-to-br  from-[#eeeeee]  to-[#e5e5e5]  hover:from-[#dcdcdc]  hover:to-[#cfcfcf] rounded-2xl  p-8  border  border-gray-200  transition-all  duration-300">
            <p className="text-gray-600 text-lg mb-2">Uber Cash</p>

            <h1 className="text-4xl font-semibold mb-8">₹0.00</h1>

            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              <Plus size={18} />
              Gift card
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-8">Payment Methods</h2>

          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
            <Plus size={20} />
            <span className="text-lg">Add Payment Method</span>
          </div>

          <div className="border-b border-gray-300 mt-6"></div>
        </section>

        {/* Profiles */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-6">Profiles</h2>

          <p className="text-gray-500 mb-6">Shared with you</p>

          <div className="flex justify-between items-center p-4 hover:bg-gray-100 rounded-lg cursor-pointer transition">
            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <UserRound size={18} />
              </div>
              <div>
                <p className="text-lg font-medium">
                  Manage business rides for others
                </p>
                <p className="text-gray-500 text-sm">
                  Request access to their business profile
                </p>
              </div>
            </div>

            <ChevronRight size={22} />
          </div>

          <div className="border-b border-gray-300 mt-6"></div>
        </section>

        {/* Vouchers */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-6">Vouchers</h2>

          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
            <Plus size={20} />
            <span className="text-lg">Add voucher</span>
          </div>

          <div className="border-b border-gray-300 mt-6"></div>
        </section>

        {/* In-store offers */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">In-store offers</h2>
          <p className="text-gray-600 text-lg">Offers</p>
          <div className="border-b border-gray-300 mt-6"></div>
        </section>
      </div>
    </div>
  );
};

export default UberWalletPage;
