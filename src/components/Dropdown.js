import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 180px;
  position: absolute;
  z-index: 10;
  background-color: #FFF;
  top: calc(100% + 5px);
  right: 0px;
  padding: 5px;
`;

class Dropdown extends PureComponent {

  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  close = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { ref, ...restProps } = this.props;
    return (
      <Container>
        <div onClick={this.handleToggle}>{this.props.toggle}</div>
        {isOpen &&
          <Content {...restProps}>
            {this.props.children}
          </Content>}
      </Container>
    );
  }
}

export default Dropdown;
