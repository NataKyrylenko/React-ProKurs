import "./styles.css";

function ProfileCard() {
  const userName = "Alex Parker";
  const userProfession = "Software Engineer specializing in artificial intelligence and robotics";
  const userHobby = "Alex is passionate about creating autonomous robots for robotics competitions. In his spare time, he designs and programs new algorithms to enhance the performance and efficiency of robots. He also enjoys virtual reality and game development for VR platforms, where he can bring his ideas and creative concepts to life.";
  return (
    <div className="profileCard">
      <img src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4406.jpg?w=740" alt="" />
      <h3 className="userTitle">{userName}</h3>
      <p className="userPretitle">{userProfession}</p>
      <p>{userHobby}</p>
    </div>
  );
}

export default ProfileCard;
