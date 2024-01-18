import { Link } from "@remix-run/react";

const userData = {
  "id": 1,
  "first_name": "Jonas",
  "last_name": "Hughes",
  "email": "brandon@hotmail.com",
  "phone": "724-981-8686",
  "agent_name": "Hughes",
  "status": "MLS Player",
  "yearly_ytd_bonus": "$20,000",
  "salary": "$185k",
  "phone_e_164": "+17249818686",
  "contract_status": "2022",
  "free_agency_years": 1,
  "years_of_service": 10,
  "profile_information": "30%"
};

function Dashboard() {
  return (
    <div className="bg-black ring-2">
    <nav className="navbar text-white rounded-md">
        <Link to="./edit-profile" className="hover:text-gray-300 mr-10">Edit Profile</Link>
        <Link to="./news-alerts" className="hover:text-gray-300 mr-4">News & Alerts</Link>
        <Link to="./bonus-tracking" className="mr-4">Bonus Tracking</Link>
        <Link to="./salary-guide" className="mr-4">Salary Guide</Link>
        <Link to="./faq" className="mr-4">FAQ</Link>
        <Link to="./get-help" className="mr-4">Get Help</Link>
    </nav>
      <section>
        <h1 className="text-3xl font-bold text-white rounded-lg">Welcome to your Dashboard, {userData.first_name}!</h1>
        &nbsp;
        <div className="bg-white p-6 rounded-lg shadow-md ring-2">
      <h2 className="text-2xl font-bold mb-4">{`${userData.first_name} ${userData.last_name}`}</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Agent Name: {userData.agent_name}</p>
          <p>Status: {userData.status}</p>
        </div>
        <div className="flex-1">
          <p>Yearly YTD Bonus: {userData.yearly_ytd_bonus}</p>
          <p>Salary: {userData.salary}</p>
          <p>Phone (E.164): {userData.phone_e_164}</p>
          <p>Contract Status: {userData.contract_status}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Free Agency Years: {userData.free_agency_years}</p>
        <p>Years of Service: {userData.years_of_service}</p>
        <p>Profile Information: {userData.profile_information}</p>
      </div>
    </div>
      </section>
    </div>
  );
}

export default Dashboard;