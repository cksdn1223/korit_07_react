import { useState } from "react";
function MyForm() {

  const [text, setText] = useState('');

  // const handleChange = (event) => {
  //   setText(event.target.value);
  //   console.log(text);
  // }

  const handleSubmit = (event) => {
    alert(`'${text}' 라고 입력했음`);
    event.preventDefault();
  }

  // const [color, setColor] = useState('#242424');
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={event => setText(event.target.value)} value={text} />
        <br />
        {/* <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/> */}
        <br />
        <input type="submit" value='클릭하세요' />
      </form>
    </>
  );
}                                                  

export default MyForm;