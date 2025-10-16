import { useContext } from "react";
import AuthContext from "./AuthContext";

function MyForm() {
  const authContext = useContext(AuthContext);

  // Form이 제출될때 호출될 수 있도록 작성
  const handleSubmit = (e) => {
    e.preventDefault(); // md 파일에서 작성한 기본 동작 방지 메서드
    // 그러면 onSubmit에 딸려있는 default는 뭐냐면 양식 제출입니다. -> DB나 백엔드로
    alert(`제출 시에 나오는 경고창입니다. ${authContext}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value='제출 !'/>
      </form>
    </>
  );
}

export default MyForm;