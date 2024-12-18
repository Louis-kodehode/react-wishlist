import styled from "styled-components";
import Sparkles from "react-sparkle";

// const Demo = () => (
//   <div className="box">
//     <Sparkles
//       color="red"
//       count={20}
//       minSize={7}
//       maxSize={12}
//       overflowPx={80}
//       fadeOutSpeed={30}
//       flicker={false}
//     />
//   </div>
// );

const Container = styled.div`
  gap: 30px;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-wrap: wrap;
  // height: 100vh;
  max-width: 1200px;
`;
const Cards = styled.div`
  position: relative;
  text-wrap: wrap;
  background: ${(props) => (props.naughty ? "red" : "green")};
  display: flex;
  // background-color: green;
  width: 350px;

  gap: 10px;
  justify-content: space-between;
  color: #ffebeb;
  border-radius: 20px;
  border: 3px dotted red;
  padding: 1rem;
  box-shadow: 0px 1.5px 5px 1px black inset, 0px -3px 3px 0px black inset;
`;

const Christmastree = styled.div`
  background-image: url("src/assets/christmasback.png");
  background-size: 100%;
  width: 100vw;
  height: 100%;
  // background-repeat: no-repeat;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const containerstyles = {
  Container,
  Cards,
  Christmastree,
};

export default containerstyles;

// background: ${(props, i) =>
//   props.naughty
// ? "linear-gradient(135deg, #81c784, #aed581)"
// : "linear-gradient(135deg, #e3f2fd, #f1f1f1)"};
