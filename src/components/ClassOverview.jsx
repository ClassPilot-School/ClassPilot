import { BookOpen } from "lucide-react";


function ClassOverview() {
    return(

 <section className="class-overview">

<div className="class-overview-header">
    <h3>Class Overview</h3>
  <p>View All Classes</p>
</div>

<div className="class-overview-cards">
    <div className="class-card">
 <div className="class-card-top">
    <div className="class-icon">
     <BookOpen  size={20} />
   </div>

   <div>
    <h3>3rd Grade Methematics</h3>
    <p>3 students</p>
   </div>
   </div>
   <p>Advanced mathematics for 3rd grade students focusing on multiplication,...</p>
    </div>

    <div className="class-card">
    <div className="class-card-top">
    <div className="class-icon">
    <BookOpen  size={20}/>
    </div>

    <div>
     <h3>4th Grade Science</h3>
     <p> 2 students</p>
    </div>
     </div>  
    <p>Exploring the natural world through hands-on experiments and observation.</p>
    </div>
   </div>
  
</section>

 );
}

export default ClassOverview;