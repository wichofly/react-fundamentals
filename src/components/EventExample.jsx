function EventExample() {
  const handleFormInput = (e) => {
    console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('handle button click');
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0', outline: 'none' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me!!!</button>
    </section>
  );
}

export default EventExample;
