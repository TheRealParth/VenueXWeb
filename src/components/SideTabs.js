import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

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
`;

const Tab = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 800;
  color: #b0b0b0;
  width: 100%;
  position: relative;
  cursor: pointer;

  ${props => props.isActive && css`
    color: ${props.theme.colors.primary};

    &:after {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 0px;
      width: 4px;
      background-color: ${props.theme.colors.primary};
      box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.15);
    }
  `}
`;

const Icon = styled.img`
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
    activeTab: 0,
  }

  render() {
    const { tabs } = this.props;
    return (
      <Container>
        <Tabs>
          {tabs.map((tab, i) => (
            <Tab
              isActive={i === this.state.activeTab}
              onClick={() => this.setState({ activeTab: i })}
            >
              <Icon src={tab.icon} />
              <div>{tab.title}</div>
            </Tab>
          ))}
        </Tabs>
        <Content>
          {tabs[this.state.activeTab].content}
        </Content>
      </Container>
    );
  }
}

export default SideTabs;
