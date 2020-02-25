import React from "react";

const InfoItem = ({ info, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(info.id)}
        checked={info.done}
        readOnly={true}
      />
      <span style={{ textDecoration: info.done ? "line-through" : "none" }}>
        {info.text}
      </span>

      <button onClick={() => onRemove(info.id)}>삭제</button>
    </div>
  );
};

const Infos = ({
  input,
  infos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  const onChange = e => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {infos.map(info => (
          <InfoItem
            info={info}
            key={info.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Infos;
