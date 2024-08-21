import './App.css';
import { Calendar } from 'react-calendar';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1D1D1D] p-4">
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Profile" />
              <div className="text-right">
                <p className="font-semibold">Student Name</p>
                <p className="text-sm text-gray-400">studentemail@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Courses Section */}
            <section className="col-span-8 bg-[#2C2C2C] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Courses</h2>
              <div className="grid grid-cols-2 gap-6">
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

            {/* Today's Schedule Section */}
            <section className="col-span-4 bg-[#2C2C2C] p-6 rounded-lg">
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
            </section>

            {/* Notifications Section */}
            <section className="col-span-6 bg-[#2C2C2C] p-6 rounded-lg">
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
            </section>

            {/* Calendar Section */}
            <section className="col-span-6 bg-[#2C2C2C] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">May, 2024</h2>
              <Calendar
                className="text-white bg-[#333333] rounded-lg"
                tileClassName={({ date, view }) => {
                  if (date.getDate() === new Date().getDate()) {
                    return 'bg-white text-black rounded-full';
                  }
                }}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
