import "./ticket.css";
 
function  Tickets() {
return(
  <div className="all-wrapper">
    <div className="tickets-wrapper">
      <div className="title-wrapper">
        <div>
          <h3 className="tickets-title">Unresolved tickets</h3>
          <p className="ticket-text">
            <span>Group:</span> Support
          </p>
        </div>
        <div><a href="#" className="ticket-link">View details</a></div>
      </div>
      <ul className="tickets-list">
           <li className="tickets-item">Waiting on Feature Request<span>4238</span></li>
           <li className="tickets-item">Awaiting Customer Response<span>1005</span></li>
           <li className="tickets-item">Awaiting Developer Fix<span>914</span></li>
           <li className="tickets-item">Pending<span>281</span></li>
      </ul>
    </div>

    <div className="tickets-wrapper">
      <div className="title-wrapper">
        <div>
          <h3 className="tickets-title">Tasks</h3>
          <p className="ticket-text">
            <span>Today</span> 
          </p>
        </div>
        <div><a href="#" className="ticket-link">View all</a></div>
      </div>
      <ul className="tickets-list">
           <li className="task-item">Create new task <span>+</span></li>
           <li className="task-item"><input type="checkbox"/>Finish ticket update 
           <span>Urgent</span>
           </li>
           <li className="task-item"><input type="checkbox"/>Create new ticket example
            <span>New</span>
            </li>
           <li className="task-item"><input type="checkbox"/>Update ticket report
            <span>Default</span>
            </li>
      </ul>
    </div>
  </div>
)
}

export default Tickets;