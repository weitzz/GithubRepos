import React from 'react';
import Spinner from "../Spinner";

const Form = ({user,loading,error,btnAction,changeUser}) =>(
  <div className="formContainer">
    <input type="text"
      className="userInput"
      value={user}
      placeholder="Usuário ou repositório..."
      onChange={event =>changeUser(event.target.value)}
      />
      <button className="searchButton"onClick={btnAction}>
        {loading ? <Spinner/> : "Buscar"}
      </button>
      <p className="errorText">{error}</p>
  </div>
);

export default Form;