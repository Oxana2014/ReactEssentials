export default function Tabs({ children, buttons, ButtonsContainer="menu" }) {
 // const ButtonsContainer = buttonsContainer; //make custom component from this propps value
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
