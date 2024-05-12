function User(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.userName}</h2>
      <p>{props.tweet}</p>
      <p>{props.userRealName}</p>
    </div>
  );
}

export default User;