import { useState } from "react";
import styles from "./CSS/Testimonials.module.css";
const SelectedLegend = () => {
  
      const options = [
    { value: "Wraith" },
    { value: "Bloodhound" },
    { value: "Horizon" },
    { value: "Rampart" },
    { value: "Fuse" },
    { value: "Octane" },
    { value: "Wattson" },
    { value: "Caustic" },
    { value: "Gibraltar" },
    { value: "Loba" },
    { value: "Revenant" },
    { value: "Pathfinder" },
    { value: "Lifeline" },
    { value: "Crypto" },
    { value: "Mirage" },
    { value: "Valk" },
    { value: "Seer" },
    {value: "Ash"},
  ];
    return (
       <div>
              <label
                className={styles["select"]}
                for="slct"
                htmlFor="name"
                style={{ color: "white" }}
              >
                Select Your Main
                <select
                  id="slct"
                  required="required"
                  onChange={(e) => {
                    setMain(e.target.value);
                  }}
                >
                  <option
                    value=""
                    disabled="disabled"
                    selected="selected"
                  >
                    Select A Legend
                  </option>
                  {options.map((Items, index) => {
                    return (
                      <option value={Items.value}>
                        {Items.value}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
    )
}

export default SelectedLegend
