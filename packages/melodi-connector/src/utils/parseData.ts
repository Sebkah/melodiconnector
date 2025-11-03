import { GenericObservation } from "../types/generalTypes";
import { traverseObjectOrArray } from "./traverseObjectOrArray";

/**
 * This function directly modifies the input object, converting string representations of numbers into actual numbers.
 */
const parseNumbers = (input: {} & Partial<GenericObservation>) => {
  // These cleanups will need to be done also in the public getter functions
  // Replace number strings with numbers in the sample JSON
  traverseObjectOrArray(input, (value, _path, setValue) => {
    // If the value is a primitive string...
    if (typeof value === "string" && value.trim() !== "") {
      const num = Number(value);
      //... that can be converted to a number...
      if (!isNaN(num) && /^-?[\d.]+$/.test(value)) {
        //... then set it as to a number
        setValue(num);
      }
    }
  });
};

export const parseData = (observations: GenericObservation[]) => {
  observations.forEach((obs: {} & Partial<GenericObservation>) => {
    parseNumbers(obs);
    if (obs.measures && obs.measures.OBS_VALUE_NIVEAU) {
      obs.measure = obs.measures.OBS_VALUE_NIVEAU.value;
      // Delete obs.measures;
      delete obs.measures;
      return;
    }
    obs.measure = undefined;
  });
};
