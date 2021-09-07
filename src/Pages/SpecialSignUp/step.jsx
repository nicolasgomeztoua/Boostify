import { Button, StepContainer } from "./signupstyles";
const Step = ({ icon, textfile, containerRef, step }) => {
  const Icon = icon;
  const iconStyles = { height: "100px" };

  function scrollToRight() {
    containerRef.current.scrollTo({
      left: step * window.innerWidth,
      behavior: "smooth",
    });
    console.log(containerRef.current);
  }

  return (
    <StepContainer>
      <div class="services">
        <div class="content content-1">
          <Icon style={iconStyles}></Icon>
          <h2>{textfile.title}</h2>
          {textfile.time === true ? "" : ""}
          <p>{textfile.body}</p>
          <Button
            background={"black"}
            color={"white"}
            border={"none"}
            onClick={scrollToRight}
          >
            {textfile.button}
          </Button>
        </div>
      </div>
    </StepContainer>
  );
};

export default Step;
