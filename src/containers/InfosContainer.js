import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
//액션 import
import { changeInput, insert, toggle, remove } from "../modules/infos";
import Infos from "../components/Infos";

const InfosContainer = ({
  input,
  infos,
  changeInput,
  insert,
  toggle,
  remove
}) => {
  // const test = useSelector(state => state.Infos.)
  return (
    <Infos
      input={input}
      infos={infos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ infos }) => ({
    input: infos.input,
    infos: infos.infos
  }),
  {
    changeInput,
    insert,
    toggle,
    remove
  }
)(InfosContainer);
