import { useState, useRef } from "react";
import "../styles/MyForm.css";

interface Form {
  name: string;
  description: string;
}

function MyForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<Form>({
    name: '',
    description: '',
  });
  const { name, description } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: '',
      description: '',
    });
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };

  return (
    <div className="MyForm">
      <form onSubmit={onSubmit}>
        <input name="name" value={name} onChange={onChange} ref={inputRef} />
        <input name="description" value={description} onChange={onChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default MyForm;
