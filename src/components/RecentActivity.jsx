 import { UserPlus, BookOpen, CalendarDays } from "lucide-react";

 function RecentActivity() {
    return(
  <section className="recent-activity">

    <div className="recent-activity-header">
        <h2>Recent Activity</h2>
        <span> View All</span>
   </div>

    <div className="recent-activity-item">
        <div className="activity-icon">
            <UserPlus size={20} />
        </div>
       
        <div>
       <h3>New Student Enrolled</h3>
       <p>Ethan Johnson joined 3rd Grade Reading</p>
       <small>3/14/2024 at 05:30 AM</small>
     </div>
    </div>

  <div className="recent-activity-item">
    <div className="activity-icon">
        <BookOpen size={20} />

    </div> 
    <div>
       <h3>Class Created</h3>
       <p>4th Grade Science class was created</p>
       <small>3/14/2024 at 04:15 AM</small>
     </div>
    </div>



<div className="recent-activity-item">
    <div className="activity-icon">
    <CalendarDays size={20} />

    </div>
    <div>
       <h3>Assignment Due Soon</h3>
       <p>Math homework due tomorrow</p>
       <small>3/14/2024 at 03:00 AM</small>

    </div>
    </div>
  </section>


    );
 }

 export default RecentActivity;