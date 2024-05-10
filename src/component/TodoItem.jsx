
import PropTypes from 'prop-types';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import cross from '../assets/cross.png';

const TodoItem = ({ no, display, text,setTodos }) => {

  const deleteTodo =(no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  }
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        }
        else {
          data[i].display = "";
        } break;
      }
    }
    setTodos(data);
  }
  return (
    <div className="todo-items">
      <div className={ `todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={not_tick} alt="notTick" />:<img src={tick} alt="tick" />}
        
        <div className="todo-items-text">{text}</div>
      </div>
      <img className="cross-icon" onClick={() => deleteTodo(no)} src={cross} alt="crossIcon" />
    </div>
  )
}


// PropTypes validation
TodoItem.propTypes = {
  no: PropTypes.number.isRequired, 
  display: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
};


export default TodoItem
