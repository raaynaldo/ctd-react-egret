const AddTodoForm = () => {
  return (
    <form>
      <label htmlFor='todoTitle'>Title: </label>
      <input type='text' id='todoTitle' />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
