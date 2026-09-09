

function StatCard ({ title, value, text, color}) {

    return (
  <div className={`stat-card ${color}`}>
  <h3>{title}</h3>
  <h2>{value}</h2>
  <p>{text}</p>

  </div>

    );
}

export default StatCard;