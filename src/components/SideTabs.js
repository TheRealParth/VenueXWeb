import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Icons from '../assets/icons';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Tabs = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  padding-top: 30px;
`;

const Tab = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #b0b0b0;
  width: 100%;
  position: relative;
  cursor: pointer;

  ${props =>
    props.isActive &&
    css`
      color: props.primaryColor;

      &:after {
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        width: 4px;
        background-color: ${props.primaryColor};
        box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.15);
      }
    `}
`;

const Icon = styled.div`
  height: 20px;
  object-fit: contain;
  margin-right: 10px;
  margin-left: 20px;
`;

const Content = styled.div`
  flex: 1;
  overflow: scroll;
  max-height: 100%;
`;

class SideTabs extends PureComponent {
  state = {
    activeTab: 0
  };

  render() {
    const { tabs } = this.props;

    return (
      <Container>
        <Tabs>
          {tabs.map((tab, i) => {
            if (i === this.state.activeTab) {
              console.log(tab.icon);
            }

            return (
              <Tab
                isActive={i === this.state.activeTab}
                onClick={() => this.setState({ activeTab: i })}
                primaryColor={this.props.primaryColor}
                style={{
                  color: i === this.state.activeTab ? this.props.primaryColor : '#b0b0b0'
                }}
              >
                <Icon>
                  {React.createElement(Icons[tab.icon], {
                    color: i === this.state.activeTab ? this.props.primaryColor : '#b0b0b0',
                    size: 20
                  })}
                </Icon>
                <div>{tab.title}</div>
              </Tab>
            );
          })}
        </Tabs>
        <Content>{tabs[this.state.activeTab].content}</Content>
      </Container>
    );
  }
}

export default SideTabs;
