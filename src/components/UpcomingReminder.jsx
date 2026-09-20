

function UpcomingReminder() {
    return(
        <section className="upcoming-reminder">
            <div className="upcoming-reminder-header">
            <h3>Upcoming Reminder</h3>
            <p>+ Add</p>
            </div>

            <div className="reminder-item">
            <h4>Grade Math Tests</h4>
            <p>Grade the multiplivation tests from yesterday</p>
            <small>Due: 3/14/2024</small>
            
           <span className="priority high">high</span>

            </div>

            <div className="reminder-item">
            <h4>Parent-Teacher Conferences</h4>
            <p>Prepar meterials for upcoming conference</p>
            <small>Due: 3/17/2024</small>
             <span className="priority medium">medium</span>

            </div>

            <div className="reminder-item">
            <h4>Update Lesson Plans</h4>
            <p>Update lesson plans for next week</p>
            <small>Due: 3/15/2024</small>
            <span className="priority medium">medium</span>


            </div>


        </section>

    );
}

export default UpcomingReminder;