import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h3>Team Detail</h3>
      <p>Id: {teamId}</p>
    </div>
  );
}

