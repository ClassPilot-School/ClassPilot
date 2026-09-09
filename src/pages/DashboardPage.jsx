import Sidebar from "../components/Sidebar";
import Header from  "../components/Header";
import StatCard from "../components/StatCard" ;


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

    
 </main>
</div>
</div>

 );
}
export default DashboardPage;