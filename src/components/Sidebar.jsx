
import { Home, BookOpen, Users, MessageSquare, Settings, LogOut, Menu, X} from "lucide-react"


function Sidebar(){
  

    return (
        <aside className="sidebar"> 
        
        
      <h2>ClassPilot</h2>
     

      
      <nav>
       <p><Home size={20} /> Dashboard</p>
       <p><BookOpen  size={20} /> Courses</p>
       <p><Users  size={20} /> Students</p>
       <p><MessageSquare  size={20} /> Messages</p>
       <p><Settings  size={20} /> Profile</p>
      </nav>

      <button><LogOut  size={18} /> Sign Out</button>
      
     </aside>
     
    );
}

export default Sidebar;