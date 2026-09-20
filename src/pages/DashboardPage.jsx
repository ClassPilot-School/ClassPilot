import Sidebar from "../components/Sidebar";
import Header from  "../components/Header";
import StatCard from "../components/StatCard" ;
import QuickActions from "../components/QuickActions";
import RecentActivity  from "../components/RecentActivity";
import ClassOverview from "../components/ClassOverview";
import UpcomingReminder from "../components/UpcomingReminder";
import PerformanceSummary from "../components/PerformanceSummary";
import Calendar from "../components/Calendar";

function DashboardPage() {

 return (
<div className="dashboard-layout">
 
    <Sidebar />

    <div className="dashboard-content">

      <Header />

    <main className="dashboard-main">
    <div className="stat-container">

  <StatCard
   title="Total Students"
   value="6"
   text="Across all classes"
   color="blue-card"
 />

  <StatCard 
   title="My Classes"
   value="3"
   text="Action this semester"
   color="purple-card"
  />
  
  <StatCard
  title="Pending Tasks"
  value="3"
  text="Needs attention"
  color="orange-card"
 />


  <StatCard
  title="Class Average"
  value="85%"
  text="This semester"
  color="green-card"
  />
  
</div>
 <div className="dashboard-grid"> 
  <div className="left-column"> 

  <QuickActions />
  <RecentActivity />
  <ClassOverview />

  </div> 

  <div className="right-column">
  <Calendar />
 <UpcomingReminder />
 <PerformanceSummary />
</div>
</div>
 </main>
</div>
</div>


 );
}
export default DashboardPage;