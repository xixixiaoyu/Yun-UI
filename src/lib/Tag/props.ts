let sizeRules = ["small", "medium", "large"];
let typeRules = ["primary", "info", "success", "error", "warning", "normal"];

const _props = {
  type: {
    type: String,
    default: "normal",
    validator(value: string) {
      return typeRules.includes(value);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(value: string) {
      return sizeRules.includes(value);
    },
  },
  maxWidth: {
    type: String,
    default: "120px",
  },
  round: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "",
  },
};

export default _props;
