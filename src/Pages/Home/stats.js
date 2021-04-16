import React from "react";
import AnimatedNumber from "react-animated-number";
import { BagCheckFill } from "@styled-icons/bootstrap/BagCheckFill";
import { UserClock } from "@styled-icons/fa-solid/UserClock";
import { CalendarExclamation } from "@styled-icons/boxicons-regular/CalendarExclamation";
import styled from "styled-components";
const Stats = () => {
  const Completed = styled(BagCheckFill)`
    height: 50px;
    color: #40e0d0;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  const InProgress = styled(UserClock)`
    height: 50px;
    color: #40e0d0;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  const TimeLeft = styled(CalendarExclamation)`
    height: 50px;
    color: #40e0d0;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  return (
    <div className="home-banner">
      <div>
        <h4>
          <AnimatedNumber
            value={1168}
            style={{
              fontSize: 43.96,
            }}
            duration={11500}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />
        </h4>
        <div id="icon-counter">
          <Completed></Completed>
        </div>
        <p>Orders completed</p>
      </div>
      <div>
        <h4>
          <AnimatedNumber
            value={23}
            style={{
              fontSize: 43.96,
            }}
            duration={11500}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />
        </h4>
        <div id="icon-counter">
          <InProgress></InProgress>
        </div>
        <p>Active Boosters</p>
      </div>
      <div>
        {" "}
        <h4>
          <AnimatedNumber
            value={17}
            style={{
              fontSize: 43.96,
            }}
            duration={11500}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />{" "}
        </h4>
        <div id="icon-counter">
          <TimeLeft></TimeLeft>
        </div>
        <p>Remaining split</p>
      </div>
    </div>
  );
};

export default Stats;
