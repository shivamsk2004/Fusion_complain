import React, { useState } from 'react';
import './App.css';
import { Calendar } from 'react-calendar';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [isModulesDropdownOpen, setIsModulesDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchBarExpanded(!isSearchBarExpanded);
  };

  const toggleModulesDropdown = () => {
    setIsModulesDropdownOpen(!isModulesDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Navbar for smaller screens */}
      <div className="lg:hidden p-4 bg-[#1D1D1D] flex justify-between items-center">
        <div className="flex space-x-4">
          {/* Modules Dropdown */}
          <div className="relative">
            <button onClick={toggleModulesDropdown} className="text-white">
              <i className="fas fa-bars"></i>
            </button>
            {isModulesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#333333] rounded-lg shadow-lg">
                <ul className="p-2">
                  <li className="p-2"><a href="#" className="text-white">Today's Schedule</a></li>
                  <li className="p-2"><a href="#" className="text-white">Notifications</a></li>
                  <li className="p-2"><a href="#" className="text-white">Calendar</a></li>
                </ul>
              </div>
            )}
          </div>
          {/* Search Bar */}
          <div className={`relative ${isSearchBarExpanded ? 'w-48' : 'w-10'} transition-width duration-300`}>
            <div className="flex items-center" onClick={toggleSearchBar}>
              <i className="fas fa-search text-gray-400"></i>
              {isSearchBarExpanded && (
                <input type="text" placeholder="Search..." className="bg-transparent text-white outline-none pl-2 w-full" />
              )}
            </div>
          </div>
        </div>
        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={toggleProfileDropdown} className="flex items-center text-white">
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/40" alt="Profile" />
            <i className={`fas fa-chevron-down ml-2 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#333333] rounded-lg shadow-lg">
              <div className="p-4">
                <img className="w-12 h-12 rounded-full mx-auto" src="https://via.placeholder.com/50" alt="Student" />
                <p className="text-center font-semibold mt-2">Student Name</p>
                <p className="text-center text-gray-400 text-sm">Roll No: 123456</p>
                <p className="text-center text-gray-400 text-sm">studentemail@gmail.com</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar for larger screens */}
        <aside className="hidden lg:block w-64 bg-[#1D1D1D] p-4">
          <div className="text-3xl font-semibold text-white mb-8">Fusion</div>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="flex items-center space-x-2 p-2 bg-[#DAFF3E] text-black rounded-lg">
                  <span>Dashboard</span>
                </a>
              </li>
              {/* Additional Nav Items */}
              <li className="mb-4"><a href="#" className="p-2 text-white">Academics</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Programme And Curriculum</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Mess Management</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Visitor's Hostel</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Healthcare Center</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Scholarship Portal</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Complaint System</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Placement Cell</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Department Portal</a></li>
              <li className="mb-4"><a href="#" className="p-2 text-white">Gymkhana</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="hidden lg:flex justify-between items-center mb-8">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className={`search-bar ${isSearchBarExpanded ? 'expanded' : ''}`} onClick={toggleSearchBar}>
                <i className="fas fa-search text-gray-400"></i>
                {isSearchBarExpanded && <input type="text" placeholder="Search..." className="bg-transparent text-white outline-none pl-2" />}
              </div>
              {/* Profile Dropdown */}
              <div className="relative">
                <div className="flex items-center cursor-pointer" onClick={toggleProfileDropdown}>
                  <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Profile" />
                  <div className="ml-3">
                    <p className="font-semibold">Student Name</p>
                    <p className="text-gray-400 text-sm">studentemail@gmail.com</p>
                  </div>
                  <i className={`fas fa-chevron-down ml-3 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}></i>
                </div>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#333333] p-4 rounded-lg shadow-lg">
                    <img className="w-12 h-12 rounded-full mx-auto" src="https://via.placeholder.com/50" alt="Student" />
                    <p className="text-center font-semibold mt-2">Student Name</p>
                    <p className="text-center text-gray-400 text-sm">Roll No: 123456</p>
                    <p className="text-center text-gray-400 text-sm">studentemail@gmail.com</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Courses Section */}
            <section className="col-span-8 bg-[#2C2C2C] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Courses</h2>
              <div className="flex flex-col space-y-6">
                <div className="bg-[#333333] p-4 rounded-lg">
                  <div className="flex justify-between">
                    <p>Course 1</p>
                    <p className="text-gray-400">Attendance: 15/30</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>Quiz 1: 35/50</p>
                    <p>Quiz 2: 42/50</p>
                  </div>
                </div>
                {/* Additional Course Details */}
                <div className="bg-[#333333] p-4 rounded-lg">
                  <div className="flex justify-between">
                    <p>Course 2</p>
                    <p className="text-gray-400">Attendance: 20/30</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>Quiz 1: 35/50</p>
                    <p>Quiz 2: 42/50</p>
                  </div>
                </div>
              </div>
            </section>

                        {/* Right Section with 3 Parts (Visible on larger screens only) */}
                        <section className="hidden lg:block col-span-4 space-y-8">
              {/* Today's Schedule Section */}
              <div className="bg-[#2C2C2C] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Today's Schedule</h2>
                <div className="space-y-4">
                  <div className="bg-[#333333] p-4 rounded-lg flex justify-between">
                    <p>Course 1</p>
                    <p className="text-gray-400">10:00AM-11:00AM</p>
                  </div>
                  <div className="bg-[#333333] p-4 rounded-lg flex justify-between">
                    <p>Congestion control</p>
                    <p className="text-gray-400">12:00PM-1:00PM</p>
                  </div>
                  <div className="bg-[#333333] p-4 rounded-lg flex justify-between">
                    <p>Reasoning</p>
                    <p className="text-gray-400">2:00PM-3:30PM</p>
                  </div>
                </div>
              </div>

              {/* Notifications Section */}
              <div className="bg-[#2C2C2C] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                <div className="space-y-4">
                  <div className="bg-[#333333] p-4 rounded-lg">
                    <p>Notification 1: Quiz Scheduled</p>
                    <p className="text-gray-400">Course 1</p>
                  </div>
                  <div className="bg-[#333333] p-4 rounded-lg">
                    <p>Notification 2: Quiz Scheduled</p>
                    <p className="text-gray-400">Course 2</p>
                  </div>
                </div>
              </div>

              {/* Calendar Section */}
              <div className="bg-[#2C2C2C] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">May, 2024</h2>
                <Calendar
                  className="text-white bg-[#333333] rounded-lg"
                  tileClassName={({ date, view }) => {
                    if (date.getDate() === new Date().getDate()) {
                      return 'bg-white text-black rounded-full';
                    }
                  }}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
