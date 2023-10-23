/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 9,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{
          '--width': value + '%',
          '--height': styles.height + 'px'

        }}
        />
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  // I added because I didn't feel like it was clear how much more progress was remaining
  // outline: 1px solid ${COLORS.primary};
  box-shadow: inset 0 0 10px ${COLORS.transparentGray35};
  /* Trim off corners when progress border is nearly full */
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
