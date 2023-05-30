import "./MealModal.css";

const MealModal = (props) => {
  const closeModalHandler = () => {
    props.setIsMealDetailShowed(false);
  };
  return (
    <div id="modal" className="modal-overlay" onClick={closeModalHandler}>
      <div className="modal-content">
        <h2>Dobrodošli!</h2>
        <p>Ovo je primjer modalne komponente.</p>
        <span className="modal-close">Close</span>
      </div>
    </div>
  );
};
export default MealModal;
