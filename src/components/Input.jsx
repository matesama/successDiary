import { useState } from 'react'

const InputForm = (onSubmit) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
