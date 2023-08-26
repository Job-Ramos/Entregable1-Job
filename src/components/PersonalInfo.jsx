const PersonalInfo = ({ me, title, bgColor='blueviolet' }) => {

  console.log(me)

  const objStyle = {
    backgroundColor: bgColor 
  }

  const titleStyle = {
    color: me.age >= 18 ? 'yellow' : 'red'
  }


  return (
    <ul style={objStyle} className="principal-list">
      <h3 style={titleStyle}>{title}</h3>{}
      <li className="principal-item">
        <span className="principal-label">Nombre:</span> {me.name}
      </li>
      <li className="principal-item">
        <span className="principal-label">Edad:</span> {me["age"]} años
      </li>
      <li className="principal-item">
        <span className="principal-label">Película favorita:</span>{" "}
        {me.favoriteMovie}
      </li>
      <li className="principal-item">
        <span className="principal-label">Música favorita:</span>{" "}
        {me.favoriteMusic}
      </li>
    </ul>
  );
};

export default PersonalInfo;
