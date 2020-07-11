import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

const getErrorContent = (errors = []) =>
  errors.map(e => (e.isError ? <div key={e.id}>{e.msg}</div> : ""));

export const Alert = ({ id, errors, callouts }) => {
  if (errors && errors.length) {
    return (
      <Flex>
        <Box
          mt={3}
          width={1 / 2}
          color="red"
          bg="primary"
          id={`${id}-errors`}
          ariaAtomic="true"
          ariaLive={callouts ? "polite" : "off"}
          role={callouts ? "alert" : "none"}
          data-testid="inline-errors-root"
        >
          {getErrorContent(errors)}
        </Box>
      </Flex>
    );
  }
  return "";
};

export const ALERT_SHAPE = PropTypes.shape({
  id: PropTypes.string, // error id
  msg: PropTypes.any, // localized error text
  isError: PropTypes.bool // error condition
});

Alert.propTypes = {
  /** DOM element ID for form control */
  id: PropTypes.string.isRequired,

  /** sets aria-live to 'polite' and role to 'alert' on error message block  */
  callouts: PropTypes.bool,

  /** Array of error objects adhering to ERROR_SHAPE */
  errors: PropTypes.arrayOf(ALERT_SHAPE)
};

Alert.defaultProps = {
  errors: [],
  callouts: false
};
